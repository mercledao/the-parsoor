import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";

export class UniswapParser {
  public static parseV2Transaction(transaction: ITransaction): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.ROUTER_V2,
      contracts
    );

    if (!parsedTxn) return actions;

    try {
      const functionName = parsedTxn.name.toLowerCase();
      let action: ISingleSwapAction;

      if (functionName.includes('exacttokensin')) {
        action = {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: parsedTxn.args.path[0],
          toToken: parsedTxn.args.path[parsedTxn.args.path.length - 1],
          fromAmount: parsedTxn.args.amountIn.toString(),
          toAmount: parsedTxn.args.amountOutMin.toString(),
          recipient: parsedTxn.args.to
        };
      } else if (functionName.includes('exactethfor')) {
        action = {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: ethers.ZeroAddress,
          toToken: parsedTxn.args.path[parsedTxn.args.path.length - 1],
          fromAmount: transaction.value,
          toAmount: parsedTxn.args.amountOutMin.toString(),
          recipient: parsedTxn.args.to
        };
      } else if (functionName.includes('tokensforexact')) {
        action = {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: parsedTxn.args.path[0],
          toToken: parsedTxn.args.path[parsedTxn.args.path.length - 1],
          fromAmount: parsedTxn.args.amountInMax?.toString() || transaction.value,
          toAmount: parsedTxn.args.amountOut.toString(),
          recipient: parsedTxn.args.to
        };
      } else {
        action = {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: parsedTxn.args.path[0],
          toToken: parsedTxn.args.path[parsedTxn.args.path.length - 1],
          fromAmount: parsedTxn.args.amountIn?.toString() || transaction.value,
          toAmount: parsedTxn.args.amountOutMin?.toString() || '0',
          recipient: parsedTxn.args.to || transaction.from
        };
      }

      actions.push(action);
    } catch (error) {
      console.error('Failed to parse V2 transaction:', error);
    }

    return actions;
  }

  public static async parseV3Transaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    const isRouterV3 = ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.ROUTER_V3, contracts);
    const isSwapRouter02 = ProtocolHelper.txnToIsListenerContract(transaction, 'SwapRouter02', contracts);

    if (!isRouterV3 && !isSwapRouter02) return actions;

    try {
      let parsedTxn;
      if (isSwapRouter02) {
        parsedTxn = contracts['SwapRouter02'].interface.parseTransaction({ data: transaction.data });
      }
      if (!parsedTxn && isRouterV3) {
        parsedTxn = contracts[CONTRACT_ENUM.ROUTER_V3].interface.parseTransaction({ data: transaction.data });
      }

      if (!parsedTxn) return actions;

      const params = parsedTxn.args.params || parsedTxn.args;
      const functionName = parsedTxn.name.toLowerCase();
      let fromToken, toToken;
      if (params.path) {
        const decodedPath = this.decodePath(params.path);
        fromToken = decodedPath[0];
        toToken = decodedPath[decodedPath.length - 1];
      } else {
        fromToken = params.tokenIn;
        toToken = params.tokenOut;
      }

      const action: ISingleSwapAction = {
        type: ACTION_ENUM.SINGLE_SWAP,
        fromToken,
        toToken,
        fromAmount: (functionName.includes('exactinput') ? params.amountIn : params.amountInMaximum || transaction.value).toString(),
        toAmount: (functionName.includes('exactinput') ? params.amountOutMinimum : params.amountOut || '0').toString(),
        recipient: params.recipient || transaction.from
      };

      actions.push(action);
    } catch (error) {
      console.error('Failed to parse V3 transaction:', error);
    }

    return actions;
  }

  private static decodePath(path: string): string[] {
    const cleanPath = path.startsWith('0x') ? path.slice(2) : path;
    const tokens: string[] = [];
    for (let i = 0; i < cleanPath.length; i += 40) {
      const token = '0x' + cleanPath.slice(i, i + 40);
      tokens.push(token);
    }
    
    return tokens;
  }
}