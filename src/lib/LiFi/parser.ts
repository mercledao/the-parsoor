import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import { IBridgeOutAction, ISingleSwapAction, ITransaction, ITransactionAction, ITransactionLog } from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";

export class LifiParser {
  public static async parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    if (!ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.LIFI_DIAMOND, contracts)) {
      return [];
    }

    for (const log of transaction.logs) {
      if (!log.topics?.[0]) continue;
      
      const topic = log.topics[0].toLowerCase();
      if (topic === EVENT_ENUM.LIFI_TRANSFER_STARTED.toLowerCase()) {
        return [this.parseLiFiTransferStartedEvent(log, transaction)];
      }
    }

    for (const log of transaction.logs) {
      if (!log.topics?.[0]) continue;
      
      const topic = log.topics[0].toLowerCase();
      if (topic === EVENT_ENUM.SWAP_STARTED.toLowerCase()) {
        return [await this.parseSwapEvent(log, transaction)];
      }
    }

    return [];
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
}