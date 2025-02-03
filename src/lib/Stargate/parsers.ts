import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IBridgeInAction,
  IBridgeOutAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { contracts, EVENT_ENUM, CONTRACT_ENUM } from "./contracts";
import { ethers, ZeroAddress } from "ethers";
enum CONTRACT_FUNCTION_NAMES {
  SWAP = "swap",
  SWAP_ETH = "swapETH",
  SWAP_TOKENS = "swapTokens"
}

const STARGATE_CHAINS = {
    "101": 1,
    "102": 56,
    "106": 43114,
    "109": 137,
    "110": 42161,
    "111": 10,
    "112": 250,
    "151": 1088,
    "184": 8453,
    "183": 59144,
    "181": 5000
}

export class RouterV1ContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.ROUTER_V1,
      contracts
    );

    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP) {
      actions.push(this.parseSwap(transaction, parsedTxn));
      return actions;
    }

    return actions;
  }

  private static parseSwap(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction {
    const erc20Transfers = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const outgoingTxn = erc20Transfers.filter(
      (t) => t.fromAddress === transaction.from
    );

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: STARGATE_CHAINS[parsedTxn.args._dstChainId.toString()],
      fromToken: outgoingTxn[0]?.contractAddress,
      toToken: null,
      fromAmount: parsedTxn.args._amountLD.toString(),
      toAmount: null,
      sender: parsedTxn.args._refundAddress,
      recipient: parsedTxn.args._to,
    };
  }
}


export class EthRouterV1ContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.ETH_ROUTER_V1,
      contracts
    );

    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP_ETH) {
      actions.push(this.parseSwap(transaction, parsedTxn));
      return actions;
    }

    return actions;
  }

  private static parseSwap(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction {

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: STARGATE_CHAINS[parsedTxn.args._dstChainId.toString()],
      fromToken: ZeroAddress,
      toToken: null,
      fromAmount: transaction.value.toString(),
      toAmount: null,
      sender: parsedTxn.args._refundAddress,
      recipient: parsedTxn.args._toAddress,
    };
  }
}

export class WidgetSwapV1ContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.WIDGET_SWAP_V1,
      contracts
    );

    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP_ETH) {
      actions.push(this.parseEthSwap(transaction, parsedTxn));
      return actions;
    }else if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP_TOKENS) {
      actions.push(this.parseSwapTokens(transaction, parsedTxn));
      return actions;
    }

    return actions;
  }

  private static parseEthSwap(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction {

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: STARGATE_CHAINS[parsedTxn.args._dstChainId.toString()],
      fromToken: ZeroAddress,
      toToken: null,
      fromAmount: transaction.value.toString(),
      toAmount: null,
      sender: transaction.from,
      recipient: parsedTxn.args._to,
    };
  }

  private static parseSwapTokens(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction {
    const erc20Transfers = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const outgoingTxn = erc20Transfers.filter(
      (t) => t.fromAddress === transaction.from
    );

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: STARGATE_CHAINS[parsedTxn.args._dstChainId.toString()],
      fromToken: outgoingTxn[0].contractAddress,
      toToken: null,
      fromAmount: parsedTxn.args._amountLD.toString(),
      toAmount: null,
      sender: transaction.from,
      recipient: parsedTxn.args._to,
    };
  }
}