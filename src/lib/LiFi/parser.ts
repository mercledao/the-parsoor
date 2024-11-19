import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ITransaction, ITransactionAction } from "../../types";

export class LifiParser {
  private static readonly LIFI_TRANSFER_EVENT = 
    "0xcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1";
  private static readonly SWAP_EVENT =
    "0x7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38";

  public static async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];
    const logs = transaction.logs;

    for (const log of logs) {
      const action = await this.parseLog(log, transaction);
      if (action) {
        if (Array.isArray(action)) {
          actions.push(...action);
        } else {
          actions.push(action);
        }
      }
    }

    return actions;
  }

  private static async parseLog(
    log: any,
    transaction: ITransaction
  ): Promise<ITransactionAction | ITransactionAction[] | null> {
    switch (log.topics[0]) {
      case this.LIFI_TRANSFER_EVENT:
        return this.parseLiFiTransferEvent(log, transaction);
      case this.SWAP_EVENT:
        return this.parseSwapEvent(log, transaction);
      default:
        return null;
    }
  }

  private static async parseLiFiTransferEvent(
    log: any,
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const stargateEvent = transaction.logs.find(l => 
      l.topics[0] === "0x15955c5a4cc61b8fbb05301bce47fd31c0e6f935e1ab97fdac9b134c887bb074"
    );

    const transferData = ethers.AbiCoder.defaultAbiCoder().decode(
      ["tuple(bytes32 transactionId, string bridge, string integrator, address referrer, address sendingAssetId, address receivingAssetId, address receiver, uint256 amount, uint256 destinationChainId, bytes callData)"],
      log.data
    )[0];

    const stargateData = stargateEvent ? ethers.AbiCoder.defaultAbiCoder().decode(
      ["uint32", "uint72", "uint80", "bytes"],
      stargateEvent.data
    ) : null;

    const destinationChainId = stargateData ? this.mapStargateChainIdToLiFi(stargateData[0]) : 0;

    const recipient = transferData.receiver.length === 42 ? transferData.receiver : transaction.from;

    const actions: ITransactionAction[] = [];
    actions.push({
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: destinationChainId,
      fromToken: ethers.ZeroAddress,
      toToken: ethers.ZeroAddress,
      fromAmount: transferData.amount.toString(),
      toAmount: transferData.amount.toString(),
      sender: transaction.from,
      recipient: recipient
    });

    return actions;
  }

  private static mapStargateChainIdToLiFi(stargateChainId: number): number {
    const mapping: { [key: number]: number } = {
      30111: 10,
    };
    return mapping[stargateChainId] || 0;
  }

  private static async parseSwapEvent(
    log: any,
    transaction: ITransaction
  ): Promise<ITransactionAction> {
    const swapData = ethers.AbiCoder.defaultAbiCoder().decode(
      ["bytes32", "address", "address", "address", "uint256", "uint256", "uint256"],
      log.data
    );

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: ethers.ZeroAddress,
      toToken: swapData[3],
      fromAmount: swapData[4].toString(),
      toAmount: swapData[5].toString(),
      sender: transaction.from,
      recipient: transaction.from
    };
  }
}
