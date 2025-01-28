import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IBridgeInAction,
  IBridgeOutAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { contracts, EVENT_ENUM } from "./contracts";

export class OptimismParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const bridgeLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.BRIDGE
    );

    if (bridgeLog) {
      actions.push(this.parseBridge(transaction, bridgeLog));
      return actions;
    }
    return actions;
  }

  private static parseBridge(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): IBridgeInAction {
    const parsedBridgeLog = ProtocolHelper.parseLog(
      depositLog,
      contracts.OPTIMISM.events[EVENT_ENUM.BRIDGE]
    );

    const args = parsedBridgeLog.args;

    console.log(args);
    

    return {
      type: ACTION_ENUM.BRIDGE_IN,
      fromChain: args.repaymentChainId.toString(),
      toChain: transaction.chainId,
      fromToken: args.localToken,
      toToken: args.remoteToken,
      fromAmount: args.inputAmount.toString(),
      toAmount: args.outputAmount.toString(),
      sender: args.depositor,
      recipient: args.recipient,
    };
  }
}
