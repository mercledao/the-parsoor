import { ethers } from "ethers";
import { ACTION_ENUM } from "../../../enums";
import { ProtocolHelper } from "../../../helpers";
import { ISingleSwapAction, ITransaction, ITransactionAction } from "../../../types";
import { CONTRACT_ENUM, contracts } from "../contracts";

enum CONTRACT_FUNCTION_NAMES {
  EXACT_INPUT = 'exactInput',
  EXACT_OUTPUT = 'exactOutput',
  EXACT_INPUT_SINGLE = 'exactInputSingle',
  EXACT_OUTPUT_SINGLE = 'exactOutputSingle',
  MULTICALL = 'multicall'
}

export class UniswapV3Parser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];
    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.ROUTER,
      contracts
    );

    switch (parsedTxn.name) {
      case CONTRACT_FUNCTION_NAMES.EXACT_INPUT:
        actions.push(this.parseExactInput(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.EXACT_OUTPUT:
        actions.push(this.parseExactOutput(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.EXACT_INPUT_SINGLE:
        actions.push(this.parseExactInputSingle(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.EXACT_OUTPUT_SINGLE:
        actions.push(this.parseExactOutputSingle(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.MULTICALL:
        actions.push(...this.parseMulticall(transaction, parsedTxn));
        break;
    }

    return actions;
  }

  private static parseExactInput(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const params = parsedTxn.args.params;
    const path = this.decodePath(params.path);
    
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: path[0],
      toToken: path[path.length - 1],
      fromAmount: params.amountIn.toString(),
      toAmount: params.amountOutMinimum.toString(),
      recipient: params.recipient
    };
  }

  private static parseExactOutput(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const params = parsedTxn.args.params;
    const path = this.decodePath(params.path);
    
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: path[0],
      toToken: path[path.length - 1],
      fromAmount: params.amountInMaximum.toString(),
      toAmount: params.amountOut.toString(),
      recipient: params.recipient
    };
  }

  private static parseExactInputSingle(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const params = parsedTxn.args.params;
    
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: params.tokenIn,
      toToken: params.tokenOut,
      fromAmount: params.amountIn.toString(),
      toAmount: params.amountOutMinimum.toString(),
      recipient: params.recipient
    };
  }

  private static parseExactOutputSingle(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const params = parsedTxn.args.params;
    
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: params.tokenIn,
      toToken: params.tokenOut,
      fromAmount: params.amountInMaximum.toString(),
      toAmount: params.amountOut.toString(),
      recipient: params.recipient
    };
  }

  private static parseMulticall(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];
    const data = parsedTxn.args.data;

    for (const callData of data) {
      try {
        const decodedCall = contracts[CONTRACT_ENUM.ROUTER].interface.parseTransaction({
          data: callData
        });
        
        switch (decodedCall.name) {
          case CONTRACT_FUNCTION_NAMES.EXACT_INPUT:
            actions.push(this.parseExactInput(transaction, decodedCall));
            break;
          case CONTRACT_FUNCTION_NAMES.EXACT_OUTPUT:
            actions.push(this.parseExactOutput(transaction, decodedCall));
            break;
          case CONTRACT_FUNCTION_NAMES.EXACT_INPUT_SINGLE:
            actions.push(this.parseExactInputSingle(transaction, decodedCall));
            break;
          case CONTRACT_FUNCTION_NAMES.EXACT_OUTPUT_SINGLE:
            actions.push(this.parseExactOutputSingle(transaction, decodedCall));
            break;
        }
      } catch (e) {
        console.error('Failed to parse multicall data:', e);
      }
    }

    return actions;
  }

  private static decodePath(path: string): string[] {
    const tokens: string[] = [];
    let currentPosition = 2; // Skip 0x
    
    while (currentPosition < path.length) {
      tokens.push('0x' + path.slice(currentPosition, currentPosition + 40));
      currentPosition += 46; // 20 bytes address + 3 bytes fee
    }
    
    return tokens;
  }
}
