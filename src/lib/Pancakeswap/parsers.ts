import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import { ethers } from "ethers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { contracts, EVENT_ENUM, CONTRACT_ENUM } from "./contracts";

enum CONTRACT_FUNCTION_NAMES {
  EXACT_INPUT_SINGLE = "exactInputSingle"
}

export class SmartRouterContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const swapLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAP
    );

    if (swapLog) {
      actions.push(this.parseSingleswap(transaction, swapLog));
      return actions;
    }

    return actions;
  }

  private static parseSingleswap(
    transaction: ITransaction,
    swapLog: ITransactionLog
  ): ISingleSwapAction {

    const parsedSwapLog = ProtocolHelper.parseLog(
      swapLog,
      contracts.SMART_ROUTER_V3.events[EVENT_ENUM.SWAP]
    );

    const erc20Transactions = ProtocolHelper.parseERC20TransferLogs(transaction.logs);
    
    const incomingTxns = erc20Transactions.filter((t)=>{
      return t.toAddress === transaction.from;
    })
    
    const outgoingTxns = erc20Transactions.filter((t)=>{
      return t.fromAddress === transaction.from;
    })

    const args = parsedSwapLog.args;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: outgoingTxns[0]?.contractAddress ?? null,
      toToken: incomingTxns[0]?.contractAddress ?? null,
      fromAmount: args.amount0 >= '0n' ? args.amount0.toString() : (-args.amount0).toString(),
      toAmount: args.amount1.toString(),
      sender: transaction.from,
      recipient: args.recipient
    };
  }
}

export class SwapRouterContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const swapLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAP
    );

    if (swapLog) {
      actions.push(this.parseSingleswap(transaction, swapLog));
      return actions;
    }
    return actions;
  }

  private static parseSingleswap(
    transaction: ITransaction,
    swapLog: ITransactionLog
  ): ISingleSwapAction {

    const parsedSwapLog = ProtocolHelper.parseLog(
      swapLog,
      contracts.SWAP_ROUTER_V3.events[EVENT_ENUM.SWAP]
    );

    const erc20Transactions = ProtocolHelper.parseERC20TransferLogs(transaction.logs);

    const incomingTxns = erc20Transactions.filter((t)=>{
      return t.toAddress === transaction.from;
    })
    
    const outgoingTxns = erc20Transactions.filter((t)=>{
      return t.fromAddress === transaction.from;
    })

    const args = parsedSwapLog.args;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: outgoingTxns[0].contractAddress,
      toToken: incomingTxns[0].contractAddress,
      fromAmount: args.amount0 >= '0n' ? args.amount0.toString() : (-args.amount0).toString(),
      toAmount: args.amount1.toString(),
      sender: transaction.from,
      recipient: args.recipient
    };
  }
}


export class RouterV2ContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const swapLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAP_V2
    );

    if (swapLog) {
      actions.push(this.parseSingleswap(transaction, swapLog));
      return actions;
    }
    return actions;
  }

  private static parseSingleswap(
    transaction: ITransaction,
    swapLog: ITransactionLog
  ): ISingleSwapAction {

    const parsedSwapLog = ProtocolHelper.parseLog(
      swapLog,
      contracts.ROUTER_V2.events[EVENT_ENUM.SWAP_V2]
    );
    console.log(parsedSwapLog);
    

    const erc20Transactions = ProtocolHelper.parseERC20TransferLogs(transaction.logs);

    const incomingTxns = erc20Transactions.filter((t)=>{
      return t.toAddress === transaction.from;
    })
    
    const outgoingTxns = erc20Transactions.filter((t)=>{
      return t.fromAddress === transaction.from;
    })

    const args = parsedSwapLog.args;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: outgoingTxns[0].contractAddress,
      toToken: incomingTxns[0].contractAddress,
      fromAmount: args.amount0Out.toString(),
      toAmount: args.amount1In.toString(),
      sender: transaction.from,
      recipient: args.to
    };
  }
}