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

      const structuredEvent = this.mapDecodedEvent(parsedLog);

      const order = structuredEvent.order;

      return {
        type: ACTION_ENUM.BRIDGE_IN,
        fromChain: Number(order.giveChainId),
        toChain: order.takeChainId.toString(),
        fromToken: order.giveTokenAddress,
        toToken: order.takeTokenAddress,
        fromAmount: (
          BigInt(order.giveAmount) + BigInt(structuredEvent.percentFee)
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

  private static mapDecodedEvent(parsedLog: any): any {
    const { args } = parsedLog;

    const fieldNames = [
      "makerOrderNonce",
      "makerSrc",
      "giveChainId",
      "giveTokenAddress",
      "giveAmount",
      "takeChainId",
      "takeTokenAddress",
      "takeAmount",
      "receiverDst",
      "givePatchAuthoritySrc",
      "orderAuthorityAddressDst",
      "allowedTakerDst",
      "allowedCancelBeneficiarySrc",
      "externalCall",
    ] as const;

    const order = fieldNames.reduce(
      (obj, key, index) => ({
        ...obj,
        [key]: args[0][index],
      }),
      {}
    );

    return {
      order,
      orderId: args[1],
      affiliateFee: args[2],
      nativeFixFee: args[3],
      percentFee: args[4],
      referralCode: args[5],
      metadata: args[6],
    };
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

      const structuredEvent = this.mapDecodedEvent(parsedLog);

      const order = structuredEvent.order;

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

  private static mapDecodedEvent(parsedLog: any): any {
    const { args } = parsedLog;

    // Extract field names for the `Order` structure from the ABI
    const orderFieldNames = [
      "makerOrderNonce",
      "makerSrc",
      "giveChainId",
      "giveTokenAddress",
      "giveAmount",
      "takeChainId",
      "takeTokenAddress",
      "takeAmount",
      "receiverDst",
      "givePatchAuthoritySrc",
      "orderAuthorityAddressDst",
      "allowedTakerDst",
      "allowedCancelBeneficiarySrc",
      "externalCall",
    ] as const;

    // Map the `Order` structure
    const order = orderFieldNames.reduce(
      (obj, key, index) => ({
        ...obj,
        [key]: args.order[index],
      }),
      {}
    );

    // Return the parsed event object
    return {
      order,
      orderId: args.orderId, // bytes32
      sender: args.sender, // address
      unlockAuthority: args.unlockAuthority, // address
    };
  }
}
