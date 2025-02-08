import { ACTION_ENUM } from "../../enums";
import { ethers, ZeroAddress } from "ethers";
import { ProtocolHelper } from "../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { contracts, EVENT_ENUM, CONTRACT_ENUM } from "./contracts";

enum CONTRACT_FUNCTION_NAMES {
  SWAP = "swap",
  BATCH_SWAP = "batchSwap",
}

export class BalancerV2Parser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.BALANCER_V2,
      contracts
    );
    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP) {
      actions.push(this.parseSwap(transaction, parsedTxn));
    } else if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.BATCH_SWAP) {
      actions.push(this.parseSingleSwap(transaction, parsedTxn));
    }

    return actions;
  }

  private static parseSwap(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const swapLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAP
    );

    let args;

    if (swapLog) {
      const parsedSwapLog = ProtocolHelper.parseLog(
        swapLog,
        contracts.BALANCER_V2.events[EVENT_ENUM.SWAP]
      );
      args = parsedSwapLog.args;
    }

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: args.tokenIn,
      toToken: args.tokenOut,
      fromAmount: args.tokenIn === ZeroAddress ? transaction.from : args.amountIn.toString(),
      toAmount: args.amountOut.toString(),
      sender: parsedTxn.args.funds.sender,
      recipient: parsedTxn.args.funds.recipient,
    };
  }

  private static parseSingleSwap(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const fromSwapHop = parsedTxn.args.swaps[0];
    const toSwapHop = parsedTxn.args.swaps[parsedTxn.args.swaps.length - 1];
    
    let fromAmount = BigInt(0);
    let toAmount = BigInt(0);
  
    const swapLogs = transaction.logs.filter(
      (log) => log.topics[0] === EVENT_ENUM.SWAP
    );

    const fromTxnPoolLog = swapLogs.find((log)=> log.topics[1] === fromSwapHop.poolId)
    const toTxnPoolLog = swapLogs.find((log)=> log.topics[1] === toSwapHop.poolId)
    
    const fromToken = `0x${fromTxnPoolLog.topics[2].slice(-40)}`;
    const toToken = `0x${toTxnPoolLog.topics[3].slice(-40)}`;
  
    swapLogs.forEach((swapLog) => {
      const { args } = ProtocolHelper.parseLog(
        swapLog,
        contracts.BALANCER_V2.events[EVENT_ENUM.SWAP]
      );
  
      if (args.tokenIn.toLowerCase() === fromToken.toLowerCase()) {
        fromAmount += args.amountIn;
      }

      if (args.tokenOut.toLowerCase() === toToken.toLowerCase()) {
        toAmount += args.amountOut;
      }
    });
  
    // Return the parsed action with the accumulated amounts
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: fromToken === ZeroAddress ? transaction.from : fromAmount > 0 ? fromAmount.toString() : null,
      toAmount: toAmount > 0 ? toAmount.toString() : null,
      sender: parsedTxn.args.funds.sender,
      recipient: parsedTxn.args.funds.recipient,
    };
  }
}
