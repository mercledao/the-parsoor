import { ACTION_ENUM } from "../../../enums";
import { ProtocolHelper } from "../../../helpers";
import {
  IMultiSwapAction,
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "../contracts";

export default class RouterV2Parser {
  private static v2ContractDefinition = contracts[CONTRACT_ENUM.V2_ROUTER];

  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const hasSingleSwap = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.V2_SINGLE_SWAP
    );

    if (hasSingleSwap) {
      actions.push(this.parseSingleSwap(hasSingleSwap));
      return actions;
    }

    const hasMultiSwap = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.V2_MULTI_SWAP
    );

    if (hasMultiSwap) {
      actions.push(this.parseMultiSwap(hasMultiSwap));
      return actions;
    }

    throw new Error("No swap found in transaction");
  }

  private static parseMultiSwap(
    multiSwapLog: ITransactionLog
  ): IMultiSwapAction {
    const parsedLog = ProtocolHelper.parseLog(
      multiSwapLog,
      this.v2ContractDefinition.events[EVENT_ENUM.V2_MULTI_SWAP]
    );

    return {
      type: ACTION_ENUM.MULTI_SWAP,
      fromTokens: parsedLog.args.tokensIn,
      toTokens: parsedLog.args.tokensOut,
      fromAmounts: parsedLog.args.amountsIn.map((amount) => amount.toString()),
      toAmounts: parsedLog.args.amountsOut.map((amount) => amount.toString()),
    };
  }

  private static parseSingleSwap(
    singleSwapLog: ITransactionLog
  ): ISingleSwapAction {
    const parsedLog = ProtocolHelper.parseLog(
      singleSwapLog,
      this.v2ContractDefinition.events[EVENT_ENUM.V2_SINGLE_SWAP]
    );

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedLog.args.inputToken,
      toToken: parsedLog.args.outputToken,
      fromAmount: parsedLog.args.inputAmount.toString(),
      toAmount: parsedLog.args.amountOut.toString(),
      sender: parsedLog.args.sender,
    };
  }
}
