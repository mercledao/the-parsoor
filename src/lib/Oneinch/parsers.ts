import { ZeroAddress } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { contracts, CONTRACT_ENUM } from "./contracts";
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
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedTxn.args.desc.srcToken,
      toToken: parsedTxn.args.desc.dstToken,
      fromAmount: parsedTxn.args.desc.amount.toString(),
      toAmount: null,
      sender: transaction.from,
      recipient: parsedTxn.args.desc.dstReceiver,
    };
  }

  private static parseAggregatorSwapTransaction(
    transaction: ITransaction,
    parsedTxn: any
  ): ISingleSwapAction {
    const log = transaction.logs;

    const { fromToken, toToken, fromAmount, toAmount } =
      ProtocolHelper.analyzeSingleSwapFromLogs(log, transaction);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: fromToken,
      toToken: toToken ?? ZeroAddress,
      fromAmount: BigInt(fromAmount) > 0 ? fromAmount : null,
      toAmount: BigInt(toAmount) > 0 ? toAmount : null,
      sender: transaction.from,
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
      sender: transaction.from,
      recipient: parsedTxn.args.recipient,
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
      sender: transaction.from,
      recipient: parsedTxn.args.recipient,
    };
  }

  private static parseFillOrderToTransaction(
    transaction: ITransaction,
    parsedTxn: any
  ): ISingleSwapAction {
    const log = transaction.logs;
    const { fromToken, toToken, fromAmount, toAmount } =
      ProtocolHelper.analyzeSingleSwapFromLogs(log, transaction);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: fromToken,
      toToken: toToken ?? ZeroAddress,
      fromAmount: BigInt(fromAmount) > 0 ? fromAmount : null,
      toAmount: BigInt(toAmount) > 0 ? toAmount : null,
      sender: transaction.from,
      recipient: parsedTxn.args.target,
    };
  }
}
