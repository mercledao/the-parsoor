import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import { IBridgeOutAction, ISingleSwapAction, ITransaction, ITransactionAction, ITransactionLog } from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";

export class LifiParser {
  private static readonly LIFI_TRANSFER_STARTED = {
    topic: "0xcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1",
    abi: ["tuple(bytes32 transactionId, string bridge, string integrator, address sendingAssetId, address receivingAssetId, address receiver, uint256 amount, uint256 destinationChainId)"]
  };

  private static readonly SWAP_STARTED = {
    topic: "0x7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38",
    abi: ["bytes32", "address", "address", "address", "uint256", "uint256", "uint256"]
  };

  public static async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    for (const log of transaction.logs) {
      if (!log.topics?.[0]) continue;

      const topic = log.topics[0].toLowerCase();
      
      if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.LIFI_DIAMOND, contracts)) {
        if (topic === this.LIFI_TRANSFER_STARTED.topic.toLowerCase()) {
          const bridgeAction = this.parseLiFiTransferStartedEvent(log, transaction);
          actions.push(bridgeAction);
        } else if (topic === this.SWAP_STARTED.topic.toLowerCase()) {
          const swapAction = await this.parseSwapEvent(log, transaction);
          actions.push(swapAction);
        }
      }
    }

    return actions;
  }

  private static parseLiFiTransferStartedEvent(
    log: ITransactionLog,
    transaction: ITransaction
  ): IBridgeOutAction {
    const [transferData] = ethers.AbiCoder.defaultAbiCoder().decode(
      this.LIFI_TRANSFER_STARTED.abi,
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

  private static async parseSwapEvent(
    log: ITransactionLog,
    transaction: ITransaction
  ): Promise<ISingleSwapAction> {
    const swapData = ethers.AbiCoder.defaultAbiCoder().decode(
      this.SWAP_STARTED.abi,
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