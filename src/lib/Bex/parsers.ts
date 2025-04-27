import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";

export class BexContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const matchedSwapOrderLogs = transaction.logs.filter(
      (log) => log.topics[0] === EVENT_ENUM.SWAP
    );

    if (matchedSwapOrderLogs) {
      for (const swapLog of matchedSwapOrderLogs) {
        actions.push(this.parseSwap(swapLog, transaction));
      }
    }

    return actions;
  }

  private static parseSwap(
    log: ITransactionLog,
    transaction: ITransaction
  ): ISingleSwapAction {
    const parsedLog = ProtocolHelper.parseLog(
      log,
      contracts[CONTRACT_ENUM.VAULT].events[EVENT_ENUM.SWAP]
    );

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedLog.args.tokenIn,
      toToken: parsedLog.args.tokenOut,
      fromAmount: parsedLog.args.amountIn.toString(),
      toAmount: parsedLog.args.amountOut.toString(),
      sender: transaction.from,
      recipient: transaction.from,
    };
  }
}
