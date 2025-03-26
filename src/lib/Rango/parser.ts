import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IBridgeOutAction,
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";

export class RangoDiamondContractParser {
  private static contractDefinition = contracts[CONTRACT_ENUM.RANGO_DIAMOND];

  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const hasSwap = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.RANGO_SWAP
    );

    const hasBridgeInitiated = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.RANGO_BRIDGE_INITIATED
    );

    if (hasSwap) {
      actions.push(this.parseSwap(hasSwap));
    }
    if(hasBridgeInitiated) {
    actions.push(this.parseBridgeInitiated(transaction, hasBridgeInitiated));
    }
    return actions;
  }

  private static parseSwap(log: ITransactionLog): ISingleSwapAction {
    const parsedLog = ProtocolHelper.parseLog(
      log,
      this.contractDefinition.events[EVENT_ENUM.RANGO_SWAP]
    );

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedLog.args.fromToken,
      toToken: parsedLog.args.toToken,
      fromAmount: parsedLog.args.amountIn.toString(),
      toAmount: parsedLog.args.outputAmount.toString(),
      recipient: parsedLog.args.receiver,
      sender: parsedLog.args.receiver,
    };
  }

  private static parseBridgeInitiated(
    transaction: ITransaction,
    log: ITransactionLog
  ): IBridgeOutAction {
    const parsedLog = ProtocolHelper.parseLog(
      log,
      this.contractDefinition.events[EVENT_ENUM.RANGO_BRIDGE_INITIATED]
    );

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: parsedLog.args.destinationChainId.toString(),
      fromToken: parsedLog.args.bridgeToken.toString(),
      toToken: parsedLog.args.bridgeToken.toString(),
      fromAmount: parsedLog.args.bridgeAmount.toString(),
      toAmount:  parsedLog.args.bridgeAmount.toString(),
      sender: transaction.from,
      recipient: parsedLog.args.receiver.toString(),
    };
  }
}
