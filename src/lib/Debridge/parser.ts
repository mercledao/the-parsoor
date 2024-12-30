import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IBridgeInAction,
  IBridgeOutAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";

enum CONTRACT_FUNCTION_NAMES {
  SEND = "send",
  CLAIM = "claim",
  SWAP_CALL = "strictlySwapAndCall",
  SWAP_CALL_DLN = "strictlySwapAndCallDln",
}

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
  ): IBridgeOutAction {
    const parsedLog = ProtocolHelper.parseLog(
      placeOrderLog,
      this.contractDefiniton.events[EVENT_ENUM.ORDER_PLACED]
    );

    const order = parsedLog.args.order;

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: Number(order.giveChainId),
      toChain: order.takeChainId.toString(),
      fromToken: order.giveTokenAddress,
      toToken: order.takeTokenAddress,
      fromAmount: order.giveAmount.toString(),
      toAmount: order.takeAmount.toString(),
      sender: order.makerSrc,
      recipient: order.receiverDst,
      fee: parsedLog.args.percentFee.toString(),
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
      recipient: order.receiverDst
    };
  }
}

export class DlnCrossChainContractParseTransaction {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.DLN_CROSS_CHAIN,
      contracts
    );
    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP_CALL) {
      actions.push(...DlnSourceContractParseTransaction.parseTransaction(transaction));
    } else if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP_CALL_DLN) {
      actions.push(...DlnDestinationContractParseTransaction.parseTransaction(transaction));
    }

    return actions;
  }
  
}

export class DlnBridgeContractParseTransaction {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.DEBRIDGE_GATE,
      contracts
    );
    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SEND) {
      actions.push(this.parseSendTransaction(transaction, parsedTxn));
    } else if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.CLAIM) {
      actions.push(this.parseClaimTransaction(transaction, parsedTxn));
    }
    console.log(actions);
    
    return actions;
  }

  private static parseSendTransaction(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction {
    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId.toString(),
      toChain: parsedTxn.args._chainIdTo.toString(),
      fromToken: parsedTxn.args._tokenAddress.toString(),
      toToken: null,
      fromAmount: parsedTxn.args._amount.toString(),
      toAmount: null,
      sender: transaction.from.toString(),
      recipient: parsedTxn.args._receiver.toString()
    };
  }

  private static parseClaimTransaction(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeInAction {
    const log = transaction.logs;
  
    // Parse ERC20 transfer logs
    const parsedLogs = ProtocolHelper.parseERC20TransferLogs(log);
  
    if (parsedLogs.length === 0) {
      throw new Error("No ERC20 transfer logs found");
    }
  
    // Group logs by token address
    const tokenLogs = parsedLogs.reduce((acc, log) => {
      acc[log.contractAddress] = (acc[log.contractAddress] ?? BigInt(0)) + BigInt(log.value);
      return acc;
    }, {} as Record<string, bigint>);
    
  
    // Check if logs are for multiple tokens
    const tokenAddresses = Object.keys(tokenLogs);
    if (tokenAddresses.length > 1) {
      throw new Error("Multiple token transfer logs detected");
    }
  
    // Extract token address and summed value
    const contractAddress = tokenAddresses[0];
    const value = tokenLogs[contractAddress];
  
    return {
      type: ACTION_ENUM.BRIDGE_IN,
      fromChain: parsedTxn.args._chainIdFrom.toString(),
      toChain: transaction.chainId.toString(),
      fromToken: contractAddress.toString(),
      toToken: null,
      fromAmount: value.toString(),
      toAmount: null,
      sender: transaction.from.toString(),
      recipient: parsedTxn.args._receiver.toString(),
    };
  }
  
}
