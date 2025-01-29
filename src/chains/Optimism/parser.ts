import { ZeroAddress } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../enums";
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
    transaction: ITransaction,
    contract: string
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const bridgeLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.BRIDGE
    );

    const ethBridgeLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.ETH_BRIDGE
    );

    if (bridgeLog) {
      actions.push(this.parseBridge(transaction, bridgeLog, contract));
      return actions;
    } else if (ethBridgeLog) {
      actions.push(this.parseEthBridge(transaction, ethBridgeLog, contract));
      return actions;
    }
    return actions;
  }

  private static parseBridge(
    transaction: ITransaction,
    bridgeLog: ITransactionLog,
    contract: string
  ): IBridgeOutAction {
    const parsedBridgeLog = ProtocolHelper.parseLog(
      bridgeLog,
      contracts[contract].events[EVENT_ENUM.BRIDGE]
    );

    const args = parsedBridgeLog.args;

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: CHAIN_ID.ETHEREUM,
      fromToken: args.localToken,
      toToken: args.remoteToken,
      fromAmount: args.amount.toString(),
      toAmount: null,
      sender: transaction.from,
      recipient: args.to,
    };
  }

  private static parseEthBridge(
    transaction: ITransaction,
    ethBridgeLog: ITransactionLog,
    contract: string
  ): IBridgeOutAction {
    
    const parsedBridgeLog = ProtocolHelper.parseLog(
      ethBridgeLog,
      contracts[contract].events[EVENT_ENUM.ETH_BRIDGE]
    );

    const args = parsedBridgeLog.args;

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: CHAIN_ID.ETHEREUM,
      fromToken: ZeroAddress,
      toToken: ZeroAddress,
      fromAmount: args.amount.toString(),
      toAmount: null,
      sender: transaction.from,
      recipient: args.to,
    };
  }
}
