import { ethers } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../enums";
import { ITransaction, ITransactionAction } from "../../types";

export class LifiParser {
  private static readonly BRIDGE_EVENT =
    "0x15955c5a4cc61b8fbb05301bce47fd31c0e6f935e1ab97fdac9b134c887bb074";
  private static readonly SWAP_EVENT =
    "0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67";

  public static async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];
    const logs = transaction.logs;

    for (const log of logs) {
      const action = await this.parseLog(log, transaction);
      if (action) {
        actions.push(action);
      }
    }

    return actions;
  }

  private static async parseLog(
    log: any,
    transaction: ITransaction
  ): Promise<ITransactionAction | null> {
    switch (log.topics[0]) {
      case this.BRIDGE_EVENT:
        return this.parseBridgeEvent(log, transaction);
      case this.SWAP_EVENT:
        return this.parseSwapEvent(log, transaction);
      default:
        return null;
    }
  }

  private static async parseBridgeEvent(
    log: any,
    transaction: ITransaction
  ): Promise<ITransactionAction> {
    const bridgeData = ethers.AbiCoder.defaultAbiCoder().decode(
      ["uint256", "uint256", "uint256", "bytes"],
      log.data
    );

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: CHAIN_ID.OPTIMISM,
      fromToken: ethers.ZeroAddress,
      toToken: ethers.ZeroAddress,
      fromAmount: bridgeData[2].toString(),
      toAmount: bridgeData[2].toString(),
      sender: transaction.from,
      recipient: transaction.from,
    };
  }

  private static async parseSwapEvent(
    log: any,
    transaction: ITransaction
  ): Promise<ITransactionAction> {
    const swapData = ethers.AbiCoder.defaultAbiCoder().decode(
      ["uint256", "uint256"],
      log.data
    );

    const toToken = "0x" + log.topics[2].slice(26);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: ethers.ZeroAddress,
      toToken: toToken,
      fromAmount: swapData[0].toString(),
      toAmount: swapData[1].toString(),
      sender: transaction.from,
      recipient: transaction.from,
    };
  }
}
