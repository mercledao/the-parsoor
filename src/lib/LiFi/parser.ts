import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { IBridgeOutAction, ISingleSwapAction, ITransaction, ITransactionAction, ITransactionLog } from "../../types";
import { EVENT_ENUM } from "./contracts";

export class LifiParser {
  public static async parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    for (const log of transaction.logs) {
      const topic = log.topics[0].toLowerCase();
      
      if (topic === EVENT_ENUM.LIFI_TRANSFER_STARTED.toLowerCase()) {
        return [this.parseLiFiTransferStartedEvent(log, transaction)];
      }
      
      if (topic === EVENT_ENUM.LIFI_GENERIC_SWAP_COMPLETED.toLowerCase()) {
        return [await this.parseGenericSwapCompletedEvent(log, transaction)];
      }
      
      if (topic === EVENT_ENUM.LIFI_SWAPPED_GENERIC.toLowerCase()) {
        return [await this.parseSwappedGenericEvent(log, transaction)];
      }
    }

    for (const log of transaction.logs) {      
      const topic = log.topics[0].toLowerCase();
      if (topic === EVENT_ENUM.SWAP_STARTED.toLowerCase()) {
        return [await this.parseSwapEvent(log, transaction)];
      }
    }

    throw new Error("No supported events found in transaction");
  }

  private static parseLiFiTransferStartedEvent(log: ITransactionLog, transaction: ITransaction): IBridgeOutAction {
    const [transferData] = ethers.AbiCoder.defaultAbiCoder().decode(
      ["tuple(bytes32 transactionId, string bridge, string integrator, address sendingAssetId, address receivingAssetId, address receiver, uint256 amount, uint256 destinationChainId)"],
      log.data
    );

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: Number(transferData.destinationChainId),
      fromToken: transferData.sendingAssetId.toLowerCase(),
      toToken: transferData.receivingAssetId.toLowerCase(),
      fromAmount: transferData.amount.toString(),
      toAmount: transferData.amount.toString(),
      sender: transaction.from.toLowerCase(),
      recipient: transferData.receiver.toLowerCase()
    };
  }

  private static async parseSwapEvent(log: ITransactionLog, transaction: ITransaction): Promise<ISingleSwapAction> {
    const swapData = ethers.AbiCoder.defaultAbiCoder().decode(
      ["bytes32", "address", "address", "address", "uint256", "uint256", "uint256"],
      log.data
    );

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: ethers.ZeroAddress,
      toToken: swapData[3].toLowerCase(),
      fromAmount: swapData[4].toString(),
      toAmount: swapData[5].toString(),
      sender: transaction.from.toLowerCase(),
      recipient: transaction.from.toLowerCase()
    };
  }

  private static async parseGenericSwapCompletedEvent(log: ITransactionLog, transaction: ITransaction): Promise<ISingleSwapAction> {
    const [integrator, referrer, receiver, fromAssetId, toAssetId, fromAmount, toAmount] = ethers.AbiCoder.defaultAbiCoder().decode(
      ["string", "string", "address", "address", "address", "uint256", "uint256"],
      log.data
    );

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: fromAssetId.toLowerCase(),
      toToken: toAssetId.toLowerCase(),
      fromAmount: fromAmount.toString(),
      toAmount: toAmount.toString(),
      sender: transaction.from.toLowerCase(),
      recipient: receiver.toLowerCase()
    };
  }

  private static async parseSwappedGenericEvent(log: ITransactionLog, transaction: ITransaction): Promise<ISingleSwapAction> {
    const [integrator, referrer, fromAssetId, toAssetId, fromAmount, toAmount] = ethers.AbiCoder.defaultAbiCoder().decode(
      ["string", "string", "address", "address", "uint256", "uint256"],
      log.data
    );

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: fromAssetId.toLowerCase(),
      toToken: toAssetId.toLowerCase(),
      fromAmount: fromAmount.toString(),
      toAmount: toAmount.toString(),
      sender: transaction.from.toLowerCase(),
      recipient: transaction.from.toLowerCase()
    };
  }
}