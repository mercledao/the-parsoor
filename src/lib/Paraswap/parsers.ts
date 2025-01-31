import { ACTION_ENUM } from "../../enums";
import { ethers } from "ethers";
import { ProtocolHelper } from "../../helpers";
import {
  IMultiSwapAction,
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

    if (SwappedV5Log) {
      actions.push(this.parseSwappedV3(transaction, SwappedV5Log));
      return actions;
    } else if (SwappedDirectLog) {
      actions.push(this.parseSwappedDirect(transaction, SwappedDirectLog));
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
    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_IN) {
      actions.push(
        this.parseSwapExactAmountInTransaction(transaction, parsedTxn)
      );
    } else if (
      parsedTxn.name ===
        CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_IN_ON_UNISWAP_V2 ||
      parsedTxn.name ===
        CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_IN_ON_UNISWAP_V3
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
      CONTRACT_FUNCTION_NAMES.SWAP_EXACT_AMOUNT_IN_ON_BALANCER_V2
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

    const erc20Transfers = ProtocolHelper.parseERC20TransferLogs(transaction.logs);

    const outGoingTxn = erc20Transfers.filter((t)=>{
      return t.fromAddress === transaction.from
    })

    const inComingTxn = erc20Transfers.filter((t)=>{
      return t.fromAddress === transaction.from
    })
    

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
