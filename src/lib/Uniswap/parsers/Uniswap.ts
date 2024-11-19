import { ethers } from "ethers";
import { ACTION_ENUM } from "../../../enums";
import { ProtocolHelper } from "../../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction
} from "../../../types";
import { COMMAND_ENUM, CONTRACT_ENUM, contracts } from "../contracts";

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

interface CommandConfig {
  decodeFormat: Array<string>;
  processPath: (path: any) => string[];
  getTokenOrder: (path: string[], isExactIn: boolean) => { fromToken: string; toToken: string };
  getAmountOrder: (amounts: any[], isExactIn: boolean) => { fromAmount: string; toAmount: string };
}

const COMMAND_CONFIGS: Partial<Record<COMMAND_ENUM, CommandConfig>> = {
  [COMMAND_ENUM.V3_SWAP_EXACT_IN]: {
    decodeFormat: ['address', 'uint256', 'uint256', 'bytes', 'bool'],
    processPath: (pathBytes: string) => UniswapParser.decodeV3Path(pathBytes),
    getTokenOrder: (path) => ({ fromToken: path[0], toToken: path[path.length - 1] }),
    getAmountOrder: (amounts) => ({ fromAmount: amounts[1].toString(), toAmount: amounts[2].toString() })
  },
  [COMMAND_ENUM.V3_SWAP_EXACT_OUT]: {
    decodeFormat: ['address', 'uint256', 'uint256', 'bytes', 'bool'],
    processPath: (pathBytes: string) => UniswapParser.decodeV3Path(pathBytes),
    getTokenOrder: (path) => ({ fromToken: path[path.length - 1], toToken: path[0] }),
    getAmountOrder: (amounts) => ({ fromAmount: amounts[2].toString(), toAmount: amounts[1].toString() })
  },
  [COMMAND_ENUM.V2_SWAP_EXACT_IN]: {
    decodeFormat: ['address', 'uint256', 'uint256', 'address[]', 'bool'],
    processPath: (path: string[]) => path,
    getTokenOrder: (path) => ({ fromToken: path[0], toToken: path[path.length - 1] }),
    getAmountOrder: (amounts) => ({ fromAmount: amounts[1].toString(), toAmount: amounts[2].toString() })
  },
  [COMMAND_ENUM.V2_SWAP_EXACT_OUT]: {
    decodeFormat: ['address', 'uint256', 'uint256', 'address[]', 'bool'],
    processPath: (path: string[]) => path,
    getTokenOrder: (path) => ({ fromToken: path[path.length - 1], toToken: path[0] }),
    getAmountOrder: (amounts) => ({ fromAmount: amounts[2].toString(), toAmount: amounts[1].toString() })
  }
};

export class UniswapParser {
  private static readonly EXACT_INPUT_SINGLE = "exactInputSingle";
  private static readonly EXACT_OUTPUT_SINGLE = "exactOutputSingle";
  private static readonly EXACT_INPUT = "exactInput";
  private static readonly EXACT_OUTPUT = "exactOutput";

  public static async parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.UNIVERSAL_ROUTER, contracts)) {
      const universalRouterActions = await this.parseUniversalRouterTransaction(transaction);
      actions.push(...universalRouterActions);
    } else if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.ROUTER_V2, contracts)) {
      const v2Actions = await this.parseV2Transaction(transaction);
      actions.push(...v2Actions);
    }

    return actions;
  }

  public static async parseV2Transaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];
    
    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.ROUTER_V2,
      contracts
    );

    if (!parsedTxn || !parsedTxn.args.path || parsedTxn.args.path.length < 2) {
      return actions;
    }

    const functionName = parsedTxn.name.toLowerCase();
    
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
    return actions;
  }

  public static async parseV3Transaction(transaction: ITransaction, routerType: CONTRACT_ENUM): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    const isRouterV3 = ProtocolHelper.txnToIsListenerContract(transaction, routerType, contracts);
    if (!isRouterV3) return actions;

    const parsedTxn = contracts[routerType].interface.parseTransaction({ data: transaction.data });
    if (!parsedTxn) return actions;

    const action = await this.createV3SwapAction(parsedTxn, transaction);
    if (action) actions.push(action);

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

  public static decodeV3Path(path: string): string[] {
    if (!path.startsWith('0x')) return [];
    
    const cleanPath = path.slice(2);
    const tokens: string[] = [];
    
    // V3 paths are encoded as: tokenIn (20 bytes) + fee (3 bytes) + tokenOut (20 bytes)
    // For each hop: address (20 bytes) = 40 hex chars, fee (3 bytes) = 6 hex chars
    let i = 0;
    while (i < cleanPath.length) {
      const token = '0x' + cleanPath.slice(i, i + 40);
      tokens.push(token.toLowerCase());
      
      // Skip the token address (40 chars) and fee (6 chars)
      i += 46;
    }
    
    return tokens;
  }

  private static async createV3SwapAction(
    parsedTxn: ethers.TransactionDescription, 
    transaction: ITransaction
  ): Promise<ISingleSwapAction | null> {
    const functionName = parsedTxn.name.toLowerCase();
    const params: IV3SwapParams = {
      tokenIn: parsedTxn.args.tokenIn || parsedTxn.args.params?.tokenIn,
      tokenOut: parsedTxn.args.tokenOut || parsedTxn.args.params?.tokenOut,
      amountIn: parsedTxn.args.amountIn?.toString() || parsedTxn.args.params?.amountIn?.toString(),
      amountInMaximum: parsedTxn.args.amountInMaximum?.toString() || parsedTxn.args.params?.amountInMaximum?.toString(),
      amountOut: parsedTxn.args.amountOut?.toString() || parsedTxn.args.params?.amountOut?.toString(),
      amountOutMinimum: parsedTxn.args.amountOutMinimum?.toString() || parsedTxn.args.params?.amountOutMinimum?.toString(),
      recipient: parsedTxn.args.recipient || parsedTxn.args.params?.recipient,
      path: parsedTxn.args.path || parsedTxn.args.params?.path
    };
    const isExactInput = functionName.includes('exactinput');

    if (functionName === this.EXACT_INPUT_SINGLE.toLowerCase() || 
        functionName === this.EXACT_OUTPUT_SINGLE.toLowerCase()) {
      return this.createSingleV3SwapAction(params, isExactInput, transaction);
    }

    if (functionName === this.EXACT_INPUT.toLowerCase() || 
        functionName === this.EXACT_OUTPUT.toLowerCase()) {
      return this.createMultiHopV3SwapAction(params, isExactInput, transaction);
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
    
    const decodedPath = this.decodeV3Path(params.path);
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

  public static async parseUniversalRouterTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];
    
    if (!transaction.data) return actions;

    const iface = new ethers.Interface([
      "function execute(bytes commands, bytes[] inputs) payable",
      "function execute(bytes commands, bytes[] inputs, uint256 deadline) payable"
    ]);

    const decoded = iface.parseTransaction({ data: transaction.data });
    if (!decoded) return actions;

    const commands = ethers.getBytes(decoded.args[0]);
    const inputs = decoded.args[1];

    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      const input = inputs[i];

      const commandType = command & 0x1F;
      const config = COMMAND_CONFIGS[commandType];

      if (config) {
        const decodedInput = ethers.AbiCoder.defaultAbiCoder().decode(
          config.decodeFormat,
          input
        );

        const path = config.processPath(decodedInput[3]);
        const { fromToken, toToken } = config.getTokenOrder(path, true);
        const { fromAmount, toAmount } = config.getAmountOrder(decodedInput, true);

        actions.push({
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken,
          toToken,
          fromAmount,
          toAmount,
          recipient: decodedInput[0]
        });
      }
    }

    return actions;
  }
}
