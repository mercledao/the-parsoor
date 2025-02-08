import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";

export class CowswapContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];
    
    const matchedSwapOrderLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.TRADE
    );
    if (matchedSwapOrderLog) {
      actions.push(this.parseSwapOrder(matchedSwapOrderLog, transaction));
    }
    
    return actions;
  }
  
  private static parseSwapOrder(log: ITransactionLog, transaction:ITransaction): ISingleSwapAction {
    const parsedLog = ProtocolHelper.parseLog(
      log,
      contracts.GP_V2_SETTLEMENT.events[EVENT_ENUM.TRADE]
    );

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedLog.args.sellToken,
      toToken: parsedLog.args.buyToken,
      fromAmount: parsedLog.args.sellAmount.toString(),
      toAmount: parsedLog.args.buyAmount.toString(),
      sender: parsedLog.args.owner ?? `0x${parsedLog.args.orderUid.slice(66,106)}`,
      recipient: parsedLog.args.owner ?? `0x${parsedLog.args.orderUid.slice(66,106)}`
    };
  }
}
