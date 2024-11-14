import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IParsedTransaction,
  ISingleSwapAction,
  ITransaction,
  ITransactionAction
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";

interface IV3SwapParams {
  tokenIn: string;
  tokenOut: string;
  amountIn?: string;
  amountInMaximum?: string;
  amountOut?: string;
  amountOutMinimum?: string;
  recipient?: string;
  path?: string;
}

export class UniswapParser {
  private static readonly EXACT_INPUT_SINGLE = "exactInputSingle";
  private static readonly EXACT_OUTPUT_SINGLE = "exactOutputSingle";
  private static readonly EXACT_INPUT = "exactInput";
  private static readonly EXACT_OUTPUT = "exactOutput";
  private static readonly MULTICALL = "multicall";

  public static async parseV2Transaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    try {
      const parsedTxn = ProtocolHelper.parseTransaction(
        transaction,
        CONTRACT_ENUM.ROUTER_V2,
        contracts
      );

      if (!parsedTxn || !parsedTxn.args.path || parsedTxn.args.path.length < 2) {
        return actions;
      }

      const functionName = parsedTxn.name.toLowerCase();
      
      const isFeeOnTransfer = functionName.includes('supportingfeeontransfertokens');
      const isEthInput = functionName.includes('exacteth') || functionName.includes('ethforexact');
      const isEthOutput = functionName.includes('foreth');
      const isExactInput = functionName.includes('exact') && !functionName.includes('forexact');

      const action: ISingleSwapAction = {
        type: ACTION_ENUM.SINGLE_SWAP,
        fromToken: isEthInput ? ethers.ZeroAddress : parsedTxn.args.path[0],
        toToken: isEthOutput ? ethers.ZeroAddress : parsedTxn.args.path[parsedTxn.args.path.length - 1],
        fromAmount: this.parseAmount(isExactInput, isEthInput, parsedTxn.args, transaction),
        toAmount: this.parseOutputAmount(isExactInput, parsedTxn.args),
        recipient: parsedTxn.args.to || transaction.from
      };

      actions.push(action);
    } catch (error) {
      console.error('Failed to parse V2 transaction:', error, transaction.hash);
    }

    return actions;
  }

  public static async parseV3Transaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    try {
      const parsedTxn = await this.getParsedV3Transaction(transaction);
      if (!parsedTxn) return actions;

      if (parsedTxn.name.toLowerCase() === this.MULTICALL) {
        return this.handleMulticall(parsedTxn, transaction);
      }

      const action = await this.createV3SwapAction(parsedTxn, transaction);
      if (action) actions.push(action);
    } catch (error) {
      console.error('Failed to parse V3 transaction:', error, transaction.hash);
    }

    return actions;
  }

  private static parseAmount(isExactInput: boolean, isEthInput: boolean, args: any, transaction: ITransaction): string {
    if (isExactInput) {
      return isEthInput ? transaction.value : args.amountIn.toString();
    }
    return args.amountInMax?.toString() || transaction.value;
  }

  private static parseOutputAmount(isExactInput: boolean, args: any): string {
    return isExactInput
      ? (args.amountOutMin?.toString() || '0')
      : args.amountOut.toString();
  }

  private static async getParsedV3Transaction(transaction: ITransaction): Promise<IParsedTransaction | null> {
    const isRouterV3 = ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.ROUTER_V3, contracts);
    const isSwapRouter02 = ProtocolHelper.txnToIsListenerContract(transaction, 'SwapRouter02', contracts);

    if (!isRouterV3 && !isSwapRouter02) return null;

    let parsedTxn;
    if (isSwapRouter02) {
      parsedTxn = contracts['SwapRouter02'].interface.parseTransaction({ data: transaction.data });
    }
    if (!parsedTxn && isRouterV3) {
      parsedTxn = contracts[CONTRACT_ENUM.ROUTER_V3].interface.parseTransaction({ data: transaction.data });
    }

    return parsedTxn;
  }

  private static async handleMulticall(parsedTxn: any, transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];
    const decodedCalls = parsedTxn.args.data || parsedTxn.args;

    for (const call of decodedCalls) {
      try {
        const decodedCall = contracts[CONTRACT_ENUM.ROUTER_V3].interface.parseTransaction({ data: call });
        const action = await this.createV3SwapAction(decodedCall, transaction);
        if (action) actions.push(action);
      } catch (error) {
        console.error('Failed to parse multicall data:', error);
      }
    }

    return actions;
  }

  private static decodePath(path: string): string[] {
    if (!path.startsWith('0x')) return [];
    
    const cleanPath = path.slice(2);
    const tokens: string[] = [];
    
    for (let i = 0; i < cleanPath.length; i += 40) {
      const token = '0x' + cleanPath.slice(i, i + 40);
      tokens.push(token.toLowerCase());
    }
    
    return tokens;
  }

  private static async createV3SwapAction(parsedTxn: IParsedTransaction, transaction: ITransaction): Promise<ISingleSwapAction | null> {
    try {
      const functionName = parsedTxn.name.toLowerCase();
      const params = parsedTxn.args.params || parsedTxn.args as IV3SwapParams;
      const isExactInput = functionName.includes('exactinput');

      if (functionName === this.EXACT_INPUT_SINGLE.toLowerCase() || 
          functionName === this.EXACT_OUTPUT_SINGLE.toLowerCase()) {
        return this.createSingleV3SwapAction(params, isExactInput, transaction);
      }

      if (functionName === this.EXACT_INPUT.toLowerCase() || 
          functionName === this.EXACT_OUTPUT.toLowerCase()) {
        return this.createMultiHopV3SwapAction(params, isExactInput, transaction);
      }
    } catch (error) {
      console.error('Failed to create V3 swap action:', error, transaction.hash);
    }
    return null;
  }

  private static createSingleV3SwapAction(
    params: IV3SwapParams,
    isExactInput: boolean,
    transaction: ITransaction
  ): ISingleSwapAction {
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: isExactInput ? params.tokenIn : params.tokenOut,
      toToken: isExactInput ? params.tokenOut : params.tokenIn,
      fromAmount: (isExactInput ? params.amountIn : params.amountInMaximum || transaction.value).toString(),
      toAmount: (isExactInput ? params.amountOutMinimum : params.amountOut || '0').toString(),
      recipient: params.recipient || transaction.from
    };
  }

  private static createMultiHopV3SwapAction(
    params: IV3SwapParams,
    isExactInput: boolean,
    transaction: ITransaction
  ): ISingleSwapAction | null {
    if (!params.path) return null;
    
    const decodedPath = this.decodePath(params.path);
    if (decodedPath.length < 2) return null;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: isExactInput ? decodedPath[0] : decodedPath[decodedPath.length - 1],
      toToken: isExactInput ? decodedPath[decodedPath.length - 1] : decodedPath[0],
      fromAmount: (isExactInput ? params.amountIn : params.amountInMaximum || transaction.value).toString(),
      toAmount: (isExactInput ? params.amountOutMinimum : params.amountOut || '0').toString(),
      recipient: params.recipient || transaction.from
    };
  }
}
