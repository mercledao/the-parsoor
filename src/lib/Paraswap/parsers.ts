import { ACTION_ENUM } from "../../enums";
import { ethers } from "ethers";
import { ProtocolHelper } from "../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { contracts, EVENT_ENUM, CONTRACT_ENUM } from "./contracts";
import { IncomingMessage } from "http";

enum CONTRACT_FUNCTION_NAMES {
  SWAP_EXACT_AMOUNT_IN = "swapExactAmountIn",
  SWAP_EXACT_AMOUNT_IN_ON_UNISWAP_V2 = "swapExactAmountInOnUniswapV2",
  SWAP_EXACT_AMOUNT_IN_ON_UNISWAP_V3 = "swapExactAmountInOnUniswapV3",
  SWAP_EXACT_AMOUNT_IN_ON_CURVE_V1 = "swapExactAmountInOnCurveV1",
  SWAP_EXACT_AMOUNT_IN_ON_CURVE_V2 = "swapExactAmountInOnCurveV2",
  SWAP_EXACT_AMOUNT_IN_ON_BALANCER_V2 = "swapExactAmountInOnBalancerV2",
  SWAP_EXACT_AMOUNT_OUT = "swapExactAmountOut",
  SWAP_EXACT_AMOUNT_OUT_ON_UNISWAP_V2 = "swapExactAmountOutOnUniswapV2",
  SWAP_EXACT_AMOUNT_OUT_ON_UNISWAP_V3 = "swapExactAmountOutOnUniswapV3",
  SWAP_EXACT_AMOUNT_OUT_ON_BALANCER_V2 = "swapExactAmountOutOnBalancerV2",
  SWAP_ON_UNISWAP_V2 = "swapOnUniswapV2Fork"
}

export class AugustusV5Parser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];


    const SwappedV5Log = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAPPED_V3
    );

    const SwappedDirectLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAPPED_DIRECT
    );

    const SwapLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAP
    );

    if (SwappedV5Log) {
      actions.push(this.parseSwappedV3(transaction, SwappedV5Log));
      return actions;
    } else if (SwappedDirectLog) {
      actions.push(this.parseSwappedDirect(transaction, SwappedDirectLog));
      return actions;
    } else {
      actions.push(this.parseSwap(transaction, SwapLog));
      return actions;
    }

    return actions;
  }

  private static parseSwappedV3(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): ISingleSwapAction {
    const parsedSwappedV3Log = ProtocolHelper.parseLog(
      depositLog,
      contracts.AUGUSTUS_V5.events[EVENT_ENUM.SWAPPED_V3]
    );

    const args = parsedSwappedV3Log.args;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: args.srcToken,
      toToken: args.destToken,
      fromAmount: args.srcAmount.toString(),
      toAmount: args.receivedAmount.toString(),
      recipient: args.beneficiary,
      sender: args.initiator,
    };
  }

  private static parseSwappedDirect(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): ISingleSwapAction {
    const parsedSwappedV3Log = ProtocolHelper.parseLog(
      depositLog,
      contracts.AUGUSTUS_V5.events[EVENT_ENUM.SWAPPED_DIRECT]
    );

    const args = parsedSwappedV3Log.args;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: args.srcToken,
      toToken: args.destToken,
      fromAmount: args.srcAmount.toString(),
      toAmount: args.receivedAmount.toString(),
      recipient: args.beneficiary,
      sender: args.initiator,
    };
  }

  private static parseSwap(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): ISingleSwapAction {
    const erc20Transfers = ProtocolHelper.parseERC20TransferLogs(transaction.logs);

    const outGoingTxn = erc20Transfers.filter((t) => {
      return t.fromAddress === transaction.from;
    });

    const inComingTxn = erc20Transfers.filter((t) => {
      return t.toAddress === transaction.from;
    });
    
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: outGoingTxn[0].contractAddress,
      toToken: inComingTxn[0].contractAddress,
      fromAmount: outGoingTxn[0].value.toString(),
      toAmount: inComingTxn[0].value.toString(),
      recipient: transaction.from,
      sender: transaction.from,
    };
  }
}

export class AugustusV6Parser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.AUGUSTUS_V6,
      contracts
    );
    if (
      parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_IN ||
      parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_OUT
    ) {
      actions.push(
        this.parseSwapExactAmountInTransaction(transaction, parsedTxn)
      );
    } else if (
      parsedTxn.name ===
        CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_IN_ON_UNISWAP_V2 ||
      parsedTxn.name ===
        CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_IN_ON_UNISWAP_V3 ||
      parsedTxn.name ===
        CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_OUT_ON_UNISWAP_V3 ||
      parsedTxn.name ===
        CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_OUT_ON_UNISWAP_V2
    ) {
      actions.push(
        this.parseSwapExactAmountInUniswapV2Transaction(transaction, parsedTxn)
      );
    } else if (
      parsedTxn.name ===
        CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_IN_ON_CURVE_V1 ||
      parsedTxn.name ===
        CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_IN_ON_CURVE_V2
    ) {
      actions.push(
        this.parseSwapExactAmountInCurveV1Transaction(transaction, parsedTxn)
      );
    } else if (
      parsedTxn.name ===
      CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_IN_ON_BALANCER_V2 ||
      parsedTxn.name ===
      CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_OUT_ON_BALANCER_V2
    ) {
      actions.push(
        this.parseSwapExactAmountInBalancerV2Transaction(transaction, parsedTxn)
      );
    }
    return actions;
  }

  private static parseSwapExactAmountInTransaction(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedTxn.args.swapData.srcToken,
      toToken: parsedTxn.args.swapData.destToken,
      fromAmount: parsedTxn.args.swapData.fromAmount.toString(),
      toAmount: parsedTxn.args.swapData.quotedAmount.toString(),
      recipient: transaction.from,
      sender: transaction.from,
    };
  }

  private static parseSwapExactAmountInUniswapV2Transaction(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedTxn.args.uniData.srcToken,
      toToken: parsedTxn.args.uniData.destToken,
      fromAmount: parsedTxn.args.uniData.fromAmount.toString(),
      toAmount: parsedTxn.args.uniData.quotedAmount.toString(),
      recipient: transaction.from,
      sender: transaction.from,
    };
  }

  private static parseSwapExactAmountInCurveV1Transaction(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedTxn.args.curveV1Data.srcToken,
      toToken: parsedTxn.args.curveV1Data.destToken,
      fromAmount: parsedTxn.args.curveV1Data.fromAmount.toString(),
      toAmount: parsedTxn.args.curveV1Data.quotedAmount.toString(),
      recipient: transaction.from,
      sender: transaction.from,
    };
  }

  private static parseSwapExactAmountInBalancerV2Transaction(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const erc20Transfers = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const outGoingTxn = erc20Transfers.filter((t) => {
      return t.fromAddress === transaction.from;
    });

    const inComingTxn = erc20Transfers.filter((t) => {
      return t.toAddress === transaction.from;
    });

    const { fromAmount, quotedAmount } = parsedTxn.args.balancerData;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: outGoingTxn[0].contractAddress,
      toToken: inComingTxn[0].contractAddress,
      fromAmount: fromAmount.toString(),
      toAmount: quotedAmount.toString(),
      recipient: transaction.from,
      sender: transaction.from,
    };
  }
}

export class AugustusRFQParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const filledOrderLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.ORDER_FILLED
    );

    if (filledOrderLog) {
      actions.push(this.parseFilledOrder(transaction, filledOrderLog));
      return actions;
    }
  }

  private static parseFilledOrder(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): ISingleSwapAction {
    const parsedFilledOrderLog = ProtocolHelper.parseLog(
      depositLog,
      contracts[CONTRACT_ENUM.AUGUSTUS_RFQ].events[EVENT_ENUM.ORDER_FILLED]
    );

    const args = parsedFilledOrderLog.args;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: args.makerAsset,
      toToken: args.takerAsset,
      fromAmount: args.makerAmount.toString(),
      toAmount: args.takerAmount.toString(),
      recipient: args.taker,
      sender: transaction.from,
    };
  }
}

export class DeltaParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const filledOrderLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.ORDER_SETTLED
    );

    if (filledOrderLog) {
      actions.push(this.parseSettledOrder(transaction, filledOrderLog));
      return actions;
    }
  }

  private static parseSettledOrder(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): ISingleSwapAction {
    const parsedFilledOrderLog = ProtocolHelper.parseLog(
      depositLog,
      contracts[CONTRACT_ENUM.DELTA_V2].events[EVENT_ENUM.ORDER_SETTLED]
    );

    const args = parsedFilledOrderLog.args;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: args.srcToken,
      toToken: args.destToken,
      fromAmount: args.srcAmount.toString(),
      toAmount: args.destAmount.toString(),
      recipient: args.beneficiary,
      sender: transaction.from,
    };
  }
}