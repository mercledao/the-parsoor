import { ZeroAddress, toBigInt } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { contracts, CONTRACT_ENUM, EVENT_ENUM } from "./contracts";
enum CONTRACT_FUNCTION_NAMES {
  SWAP = "swap",
  UNISWAP_V3_SWAP = "uniswapV3Swap",
  UNOSWAP = "unoswap",
  UNOSWAP_TO = "unoswapTo",
  CLIPPER_SWAP_TO = "clipperSwapTo",
  CLIPPER_SWAP_TO_WITH_PERMIT = "clipperSwapToWithPermit",
  CLIPPER_SWAP = "clipperSwap",
  UNOSWAP_TO_WITH_PERMIT = "unoswapToWithPermit",
  FILL_ORDER = "fillOrder",
  FILL_ORDER_TO = "fillOrderTo",
  FILL_ORDER_TO_WITH_PERMIT = "fillOrderToWithPermit",
}

export class AggregationRouterV5ContractParser {
  private static readonly AGGREGATOR_SWAP_FUNCTIONS = new Set([
    CONTRACT_FUNCTION_NAMES.UNISWAP_V3_SWAP,
    CONTRACT_FUNCTION_NAMES.UNOSWAP,
    CONTRACT_FUNCTION_NAMES.UNOSWAP_TO,
    CONTRACT_FUNCTION_NAMES.UNOSWAP_TO_WITH_PERMIT,
    CONTRACT_FUNCTION_NAMES.FILL_ORDER,
  ]);

  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.AGGREGATION_ROUTER_V5_CONTRACT,
      contracts
    );

    switch (parsedTxn.name) {
      case CONTRACT_FUNCTION_NAMES.SWAP:
        actions.push(this.parseSwapTransaction(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.CLIPPER_SWAP_TO:
        actions.push(
          this.parseClipperSwapToTransaction(transaction, parsedTxn)
        );
        break;
      case CONTRACT_FUNCTION_NAMES.CLIPPER_SWAP:
        actions.push(this.parseClipperSwapTransaction(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.CLIPPER_SWAP_TO_WITH_PERMIT:
        actions.push(
          this.parseClipperSwapToWithPermitTransaction(transaction, parsedTxn)
        );
        break;
      case CONTRACT_FUNCTION_NAMES.FILL_ORDER_TO:
        actions.push(this.parseFillOrderToTransaction(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.FILL_ORDER_TO_WITH_PERMIT:
        actions.push(this.parseFillOrderToTransaction(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.UNOSWAP_TO:
        actions.push(this.parseUnoswapToTransaction(transaction, parsedTxn));
        break;
      default:
        if (
          this.AGGREGATOR_SWAP_FUNCTIONS.has(
            parsedTxn.name as CONTRACT_FUNCTION_NAMES
          )
        ) {
          actions.push(this.parseAggregatorSwapTransaction(transaction, parsedTxn));
        }

        break;
    }
    return actions;
  }

  private static parseSwapTransaction(
    transaction: ITransaction,
    parsedTxn: any
  ): ISingleSwapAction {
    const toAddress = parsedTxn.args.desc.dstReceiver;
    const erc20Transactions = ProtocolHelper.parseERC20TransferLogs(transaction.logs);
    const toTxn = erc20Transactions.filter((log)=> log.toAddress.toLowerCase() === toAddress.toLowerCase())
    const consolidatedTransactions = this.consolidateTransactions(toTxn);
    const toAmount = consolidatedTransactions[0].value;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedTxn.args.desc.srcToken,
      toToken: parsedTxn.args.desc.dstToken,
      fromAmount: parsedTxn.args.desc.amount.toString(),
      toAmount: toAmount.toString(),
      sender: parsedTxn.args.desc.dstReceiver,
      recipient: parsedTxn.args.desc.dstReceiver,
    };
  }

  private static consolidateTransactions(transactions) {
    const consolidated = {};
    
    transactions.forEach(({ contractAddress, value }) => {
      if (!consolidated[contractAddress]) {
        consolidated[contractAddress] = BigInt(0);
      }
      consolidated[contractAddress] += value;
    });
    
    return Object.entries(consolidated).map(([contractAddress, value]) => ({ contractAddress, value }));
  }


  private static parseAggregatorSwapTransaction(
    transaction: ITransaction,
    parsedTxn: any
  ): ISingleSwapAction {
    const log = transaction.logs;
    let fromToken, toToken, fromAmount, toAmount;
    const swapData =
      ProtocolHelper.analyzeSingleSwapFromLogs(log, transaction);

    fromToken = swapData.fromToken;
    toToken = swapData.toToken;
    fromAmount = swapData.fromAmount;
    toAmount = swapData.toAmount;
    
    if(!fromToken){
      const wethDepositLog = transaction.logs.find(
        (log) => log.topics[0] === EVENT_ENUM.WETH_DEPOSIT
      );
      fromToken = wethDepositLog.contractAddress;
      fromAmount = toBigInt(wethDepositLog.data).toString();
    }
    if(!toToken){
      const wethWithdrawalLog = transaction.logs.find(
        (log) => log.topics[0] === EVENT_ENUM.WETH_WITHDRAWAL
      );
      toToken = wethWithdrawalLog.contractAddress;
      toAmount = toBigInt(wethWithdrawalLog.data).toString();
    }
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount,
      toAmount,
      sender: parsedTxn.args.recipient ?? transaction.from,
      recipient: parsedTxn.args.recipient ?? transaction.from,
    };
  }

  private static parseClipperSwapToTransaction(
    transaction: ITransaction,
    parsedTxn: any
  ): ISingleSwapAction {
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedTxn.args.srcToken,
      toToken: parsedTxn.args.dstToken,
      fromAmount: parsedTxn.args.inputAmount.toString(),
      toAmount: parsedTxn.args.outputAmount.toString(),
      sender: parsedTxn.args.recipient,
      recipient: parsedTxn.args.recipient,
    };
  }

  private static parseUnoswapToTransaction(
    transaction: ITransaction,
    parsedTxn: any
  ): ISingleSwapAction {
    const { recipient, srcToken } = parsedTxn.args;
    const erc20Transactions = ProtocolHelper.parseERC20TransferLogs(transaction.logs);
  
    const toTxn = erc20Transactions.find((log) => log.toAddress.toLowerCase() === recipient.toLowerCase()) || null;
    const fromTxn = erc20Transactions.filter((log) => log.contractAddress === srcToken);
  
    const toToken = toTxn ? toTxn.contractAddress : null;
    const toAmount = toTxn ? this.consolidateTransactions([toTxn])[0].value.toString() : null;
    const fromAmount = fromTxn.length > 0 ? this.consolidateTransactions(fromTxn)[0].value.toString() : null;
  
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: srcToken,
      toToken,
      fromAmount,
      toAmount,
      sender: recipient,
      recipient,
    };
  }
  
  
  private static parseClipperSwapTransaction(
    transaction: ITransaction,
    parsedTxn: any
  ): ISingleSwapAction {
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedTxn.args.srcToken,
      toToken: parsedTxn.args.dstToken,
      fromAmount: parsedTxn.args.inputAmount.toString(),
      toAmount: parsedTxn.args.outputAmount.toString(),
      sender: transaction.from,
      recipient: transaction.from,
    };
  }

  private static parseClipperSwapToWithPermitTransaction(
    transaction: ITransaction,
    parsedTxn: any
  ): ISingleSwapAction {
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedTxn.args.srcToken,
      toToken: parsedTxn.args.dstToken,
      fromAmount: parsedTxn.args.inputAmount.toString(),
      toAmount: parsedTxn.args.outputAmount.toString(),
      sender: parsedTxn.args.recipient,
      recipient: parsedTxn.args.recipient,
    };
  }

  private static parseFillOrderToTransaction(
    transaction: ITransaction,
    parsedTxn: any
  ): ISingleSwapAction {
    const log = transaction.logs;
    let fromToken, toToken, fromAmount, toAmount;
    const swapData =
      ProtocolHelper.analyzeSingleSwapFromLogs(log, transaction);

    fromToken = swapData.fromToken;
    toToken = swapData.toToken;
    fromAmount = swapData.fromAmount;
    toAmount = swapData.toAmount;
    
    if(!fromToken){
      const wethDepositLog = transaction.logs.find(
        (log) => log.topics[0] === EVENT_ENUM.WETH_DEPOSIT
      );
      fromToken = wethDepositLog.contractAddress;
      fromAmount = toBigInt(wethDepositLog.data).toString();
    }
    if(!toToken){
      const wethWithdrawalLog = transaction.logs.find(
        (log) => log.topics[0] === EVENT_ENUM.WETH_WITHDRAWAL
      );
      toToken = wethWithdrawalLog.contractAddress;
      toAmount = toBigInt(wethWithdrawalLog.data).toString();
    }

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount,
      toAmount,
      sender: parsedTxn.args.target,
      recipient: parsedTxn.args.target,
    };
  }
}

export class LimitOrderV4ContractParser {

  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.LIMIT_ORDER_V4,
      contracts
    );

    const filledOrderLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.FILLED_ORDER
    );
    
    if (filledOrderLog) {
      actions.push(this.parseFillOrderTransaction(transaction, parsedTxn));
    }
    return actions;
  }

  private static parseFillOrderTransaction(
    transaction: ITransaction,
    parsedTxn: any
  ): ISingleSwapAction {
    
    const log = transaction.logs;
    let fromToken, toToken, fromAmount, toAmount;
    const swapData =
      ProtocolHelper.analyzeSingleSwapFromLogs(log, transaction);

    fromToken = swapData.fromToken;
    toToken = swapData.toToken;
    fromAmount = swapData.fromAmount;
    toAmount = swapData.toAmount;
    
    if(!fromToken){
      const wethDepositLog = transaction.logs.find(
        (log) => log.topics[0] === EVENT_ENUM.WETH_DEPOSIT
      );
      fromToken = wethDepositLog.contractAddress;
      fromAmount = toBigInt(wethDepositLog.data).toString();
    }
    if(!toToken){
      const wethWithdrawalLog = transaction.logs.find(
        (log) => log.topics[0] === EVENT_ENUM.WETH_WITHDRAWAL
      );
      toToken = wethWithdrawalLog.contractAddress;
      toAmount = toBigInt(wethWithdrawalLog.data).toString();
    }

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount,
      toAmount,
      sender: parsedTxn.args.target ?? transaction.from,
      recipient: parsedTxn.args.target ?? transaction.from,
    };
  }
}