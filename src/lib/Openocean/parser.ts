import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";

export class OpenOceanExchangeContractParser {
  private static contractDefinition = contracts[CONTRACT_ENUM.OPENOCEAN_EXCHANGE];

  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const hasSwap = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAP
    );

    if (hasSwap) {
      actions.push(this.parseSwap(hasSwap));
    }
    
    return actions;
  }

  private static parseSwap(log: ITransactionLog): ISingleSwapAction {
    const parsedLog = ProtocolHelper.parseLog(
      log,
      this.contractDefinition.events[EVENT_ENUM.SWAP]
    );

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedLog.args.srcToken,
      toToken: parsedLog.args.dstToken,
      fromAmount: parsedLog.args.spentAmount.toString(),
      toAmount: parsedLog.args.returnAmount.toString(),
      recipient: parsedLog.args.dstReceiver,
      sender: parsedLog.args.sender,
    };
  }
}
