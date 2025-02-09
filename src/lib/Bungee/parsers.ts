import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IBridgeInAction,
  IBridgeOutAction,
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { contracts, EVENT_ENUM } from "./contracts";

export class SocketGatewayParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const swapLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAP
    );
    if (swapLog) {
      actions.push(this.parseSwap(transaction, swapLog));
    }

    const bridgeLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.BRIDGE
    );
    if (bridgeLog) {
      actions.push(this.parseBridge(transaction, bridgeLog));
    }

    return actions;
  }

  private static parseBridge(
    transaction: ITransaction,
    bridgeLog: ITransactionLog
  ): IBridgeOutAction {
    const parsedBridgeLog = ProtocolHelper.parseLog(
      bridgeLog,
      contracts.SOCKET_GATEWAY.events[EVENT_ENUM.BRIDGE]
    );

    const args = parsedBridgeLog.args;

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: args.toChainId.toString(),
      fromToken: args.token,
      toToken: null,
      fromAmount: args.amount.toString(),
      toAmount: null,
      sender: args.sender,
      recipient: args.receiver,
    };
  }

  private static parseSwap(
    transaction: ITransaction,
    swapLog: ITransactionLog
  ): ISingleSwapAction {
    const parsedSwapLog = ProtocolHelper.parseLog(
      swapLog,
      contracts.SOCKET_GATEWAY.events[EVENT_ENUM.SWAP]
    );

    const args = parsedSwapLog.args;
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: args.fromToken,
      toToken: args.toToken,
      fromAmount: args.sellAmount.toString(),
      toAmount: args.buyAmount.toString(),
      sender: transaction.from,
      recipient: args.receiver,
    };
  }
}
