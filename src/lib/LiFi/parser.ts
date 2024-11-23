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

      if (topic === EVENT_ENUM.SWAP_STARTED.toLowerCase()) {
        return [this.parseSwapEvent(log, transaction)];
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

    private static parseSwapEvent(log: ITransactionLog, transaction: ITransaction): ISingleSwapAction {
    const [transactionId, integrator, fromAssetId, toAssetId, fromAmount, toAmount] = ethers.AbiCoder.defaultAbiCoder().decode(
      ["bytes32", "address", "address", "address", "uint256", "uint256", "uint256"],
      log.data
    );

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: ethers.ZeroAddress,
      toToken: toAssetId.toLowerCase(),
      fromAmount: fromAmount.toString(),
      toAmount: toAmount.toString(),
      sender: transaction.from.toLowerCase(),
      recipient: transaction.from.toLowerCase()
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
}