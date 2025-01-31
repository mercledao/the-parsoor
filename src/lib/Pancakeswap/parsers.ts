import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import { ethers } from "ethers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { contracts, EVENT_ENUM, CONTRACT_ENUM } from "./contracts";

enum CONTRACT_FUNCTION_NAMES {
  EXACT_INPUT_SINGLE = "exactInputSingle"
}

export class SmartRouterContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const swapLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAP
    );

    if (swapLog) {
      actions.push(this.parseSingleswap(transaction, swapLog));
      return actions;
    }

    return actions;
  }

  private static parseSingleswap(
    transaction: ITransaction,
    swapLog: ITransactionLog
  ): ISingleSwapAction {
    const parsedFilledDepositLog = ProtocolHelper.parseLog(
      swapLog,
      contracts.SMART_ROUTER_V3.events[EVENT_ENUM.SWAP]
    );

    const args = parsedFilledDepositLog.args;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: args.amount0,
      toToken: args.amount1,
      fromAmount: args.fromAmount.toString(),
      toAmount: args.toAmount.toString(),
      sender: transaction.from,
      recipient: args.recipient
    };
  }
}

export class SwapRouterContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.SWAP_ROUTER_V3,
      contracts
    );
    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.EXACT_INPUT_SINGLE) {
      actions.push(this.parseExactInputTransaction(parsedTxn));
    }
    return actions;
  }

  private static parseExactInputTransaction(
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedTxn.args.params.tokenIn,
      toToken: parsedTxn.args.params.tokenOut,
      fromAmount: parsedTxn.args.params.amountOutMinimum.toString(),
      toAmount: parsedTxn.args.params.amountIn.toString(),
      fee: parsedTxn.args.params.fee.toString(),
      recipient: parsedTxn.args.params.recipient
    };
  }
}