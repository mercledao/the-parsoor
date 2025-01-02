import { ethers, ZeroAddress } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IBridgeInAction,
  IBridgeOutAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";


export class ModeL1BridgeParser {
  private static contractDefiniton = contracts[CONTRACT_ENUM.L1_STANDARD_BRIDGE];

  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const matchedBridgeLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.ERC20_BRIDGE_INITIATED
    );
    
    const matchedETHBridgeLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.ETH_BRIDGE_INITIATED
    );

    if (matchedBridgeLog) {
      actions.push(this.parseBridgeOrder(matchedBridgeLog, transaction));
    }

    if (matchedETHBridgeLog) {
      actions.push(this.parseETHBridgeOrder(matchedETHBridgeLog, transaction));
    }
    return actions;
  }

  private static parseBridgeOrder(
    matchedBridgeLog: ITransactionLog,
    transaction: ITransaction
  ): IBridgeOutAction {
    const parsedLog = ProtocolHelper.parseLog(
      matchedBridgeLog,
      this.contractDefiniton.events[EVENT_ENUM.ERC20_BRIDGE_INITIATED]
    );

    const args = parsedLog.args;  

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: null,
      fromToken: args.localToken,
      toToken: args.remoteToken,
      fromAmount: args.amount.toString(),
      toAmount: null,
      sender: args.from,
      recipient: args.to
    };
  }

  private static parseETHBridgeOrder(
    matchedETHBridgeLog: ITransactionLog,
    transaction: ITransaction
  ): IBridgeOutAction {
    const parsedLog = ProtocolHelper.parseLog(
      matchedETHBridgeLog,
      this.contractDefiniton.events[EVENT_ENUM.ETH_BRIDGE_INITIATED]
    );

    const args = parsedLog.args;  

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: null,
      fromToken: ZeroAddress,
      toToken: null,
      fromAmount: args.amount.toString(),
      toAmount: null,
      sender: args.from,
      recipient: args.to
    };
  }
}
