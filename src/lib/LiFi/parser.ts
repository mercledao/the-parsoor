import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import { IBridgeOutAction, ISingleSwapAction, ITransaction, ITransactionAction, ITransactionLog } from "../../types";
import { EVENT_ENUM, contracts } from "./contracts";

export class LifiParser {
  public static async parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    for (const log of transaction.logs) {
      const topic = log.topics[0].toLowerCase();
      
      if (topic === EVENT_ENUM.LIFI_TRANSFER_STARTED.toLowerCase()) {
        return [this.parseLiFiTransferStartedEvent(log, transaction)];
      }
      
      if (topic === EVENT_ENUM.LIFI_GENERIC_SWAP_COMPLETED.toLowerCase()) {
        return [this.parseGenericSwapCompletedEvent(log, transaction)];
      }
      
      if (topic === EVENT_ENUM.LIFI_SWAPPED_GENERIC.toLowerCase()) {
        return [this.parseSwappedGenericEvent(log, transaction)];
      }

      if (topic === EVENT_ENUM.SWAP.toLowerCase()) {
        return [this.parseSwapEvent(log)];
      }
    }

    throw new Error("No supported events found in transaction");
  }

  private static parseLiFiTransferStartedEvent(log: ITransactionLog, transaction: ITransaction): IBridgeOutAction {
    const parsedLog = ProtocolHelper.parseLog(log, contracts.LIFI_DIAMOND.events[EVENT_ENUM.LIFI_TRANSFER_STARTED]);
    const bridgeData = parsedLog.args.bridgeData;

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: Number(bridgeData.destinationChainId),
      fromToken: bridgeData.sendingAssetId.toLowerCase(),
      toToken: bridgeData.sendingAssetId.toLowerCase(),
      fromAmount: bridgeData.minAmount.toString(),
      toAmount: bridgeData.minAmount.toString(),
      sender: transaction.from.toLowerCase(),
      recipient: bridgeData.receiver.toLowerCase()
    };
  }

  private static parseGenericSwapCompletedEvent(log: ITransactionLog, transaction: ITransaction): ISingleSwapAction {
    const parsedLog = ProtocolHelper.parseLog(log, contracts.LIFI_DIAMOND.events[EVENT_ENUM.LIFI_GENERIC_SWAP_COMPLETED]);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedLog.args.fromAssetId.toLowerCase(),
      toToken: parsedLog.args.toAssetId.toLowerCase(),
      fromAmount: parsedLog.args.fromAmount.toString(),
      toAmount: parsedLog.args.toAmount.toString(),
      sender: transaction.from.toLowerCase(),
      recipient: parsedLog.args.receiver.toLowerCase()
    };
  }

  private static parseSwappedGenericEvent(log: ITransactionLog, transaction: ITransaction): ISingleSwapAction {
    const parsedLog = ProtocolHelper.parseLog(log, contracts.LIFI_DIAMOND.events[EVENT_ENUM.LIFI_SWAPPED_GENERIC]);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedLog.args.fromAssetId.toLowerCase(),
      toToken: parsedLog.args.toAssetId.toLowerCase(),
      fromAmount: parsedLog.args.fromAmount.toString(),
      toAmount: parsedLog.args.toAmount.toString(),
      sender: transaction.from.toLowerCase(),
      recipient: transaction.from.toLowerCase()
    };
  }

  private static parseSwapEvent(log: ITransactionLog): ISingleSwapAction {
    const parsedLog = ProtocolHelper.parseLog(log, contracts.LIFI_DIAMOND.events[EVENT_ENUM.SWAP]);

    const isToken0In = parsedLog.args.amount0In > 0;
    const fromAmount = isToken0In ? parsedLog.args.amount0In : parsedLog.args.amount1In;
    const toAmount = isToken0In ? parsedLog.args.amount1Out : parsedLog.args.amount0Out;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: ethers.ZeroAddress,
      toToken: ethers.ZeroAddress,
      fromAmount: fromAmount.toString(),
      toAmount: toAmount.toString(),
      sender: parsedLog.args.sender.toLowerCase(),
      recipient: parsedLog.args.to.toLowerCase()
    };
  }
}