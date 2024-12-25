import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IBridgeInAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";

export class DlnSourceContractParseTransaction {
  private static contractDefiniton = contracts[CONTRACT_ENUM.DLN_SOURCE];

  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const matchedPlacedOrderLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.ORDER_PLACED
    );
    if (matchedPlacedOrderLog) {
      actions.push(this.parsePlacedOrder(matchedPlacedOrderLog));
    }
    return actions;
  }

  private static parsePlacedOrder(
    placeOrderLog: ITransactionLog
  ): IBridgeInAction {
    try {
      const parsedLog = ProtocolHelper.parseLog(
        placeOrderLog,
        this.contractDefiniton.events[EVENT_ENUM.ORDER_PLACED]
      );

      const order = parsedLog.args.order;

      return {
        type: ACTION_ENUM.BRIDGE_IN,
        fromChain: Number(order.giveChainId),
        toChain: order.takeChainId.toString(),
        fromToken: order.giveTokenAddress,
        toToken: order.takeTokenAddress,
        fromAmount: (
          BigInt(order.giveAmount) + BigInt(parsedLog.args.percentFee)
        ).toString(),
        toAmount: order.takeAmount.toString(),
        sender: order.makerSrc,
        recipient: order.receiverDst,
      };
    } catch (error) {
      console.error("Error parsing order placed transaction:", error);
      throw error;
    }
  }
}

export class DlnDestinationContractParseTransaction {
  private static contractDefiniton = contracts[CONTRACT_ENUM.DLN_DESTINATION];

  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const matchedFulfilledOrderLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.ORDER_FULFILLED
    );
    
    if (matchedFulfilledOrderLog) {
      actions.push(this.parseFulfilledOrder(matchedFulfilledOrderLog));
    }
    return actions;
  }

  private static parseFulfilledOrder(
    fulfilledOrderLog: ITransactionLog
  ): IBridgeInAction {
    try {
      const parsedLog = ProtocolHelper.parseLog(
        fulfilledOrderLog,
        this.contractDefiniton.events[EVENT_ENUM.ORDER_FULFILLED]
      );
      
      const order = parsedLog.args.order;
    
      return {
        type: ACTION_ENUM.BRIDGE_IN,
        fromChain: order.giveChainId.toString(),
        toChain: order.takeChainId.toString(),
        fromToken: order.giveTokenAddress,
        toToken: order.takeTokenAddress,
        fromAmount: Number(order.giveAmount).toString(),
        toAmount: order.takeAmount.toString(),
        sender: order.allowedTakerDst,
        recipient: order.receiverDst,
      };
    } catch (error) {
      console.error("Error parsing fulfilled order transaction:", error);
      throw error;
    }
  }
}