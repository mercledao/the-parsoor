import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IMultiSwapAction,
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { contracts, EVENT_ENUM } from "./contracts";

export class AugustusV5Parser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const SwappedV5Log = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAPPED_V3
    );

    const SwappedDirectLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAPPED_DIRECT
    );

    if (SwappedV5Log) {
      actions.push(this.parseSwappedV3(transaction, SwappedV5Log));
      return actions;
    }else if (SwappedDirectLog){
      actions.push(this.parseSwappedDirect(transaction, SwappedDirectLog));
      return actions;
    }

    return actions;
  }

  private static parseSwappedV3(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): ISingleSwapAction {
    const parsedSwappedV3Log = ProtocolHelper.parseLog(
      depositLog,
      contracts.AUGUSTUS_V5.events[EVENT_ENUM.SWAPPED_V3]
    );

    const args = parsedSwappedV3Log.args;

    return {
        type: ACTION_ENUM.SINGLE_SWAP,
        fromToken: args.srcToken,
        toToken: args.destToken,
        fromAmount: args.srcAmount.toString(),
        toAmount: args.receivedAmount.toString(),
        recipient: args.beneficiary,
        sender: args.initiator,
      };
  }

  private static parseSwappedDirect(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): ISingleSwapAction {
    const parsedSwappedV3Log = ProtocolHelper.parseLog(
      depositLog,
      contracts.AUGUSTUS_V5.events[EVENT_ENUM.SWAPPED_DIRECT]
    );

    const args = parsedSwappedV3Log.args;

    return {
        type: ACTION_ENUM.SINGLE_SWAP,
        fromToken: args.srcToken,
        toToken: args.destToken,
        fromAmount: args.srcAmount.toString(),
        toAmount: args.receivedAmount.toString(),
        recipient: args.beneficiary,
        sender: args.initiator,
      };
  }
}