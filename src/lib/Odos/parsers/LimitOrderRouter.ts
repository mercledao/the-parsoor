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

export default class LimitOrderRouterParser {
  private static contractDefinition =
    contracts[CONTRACT_ENUM.LIMIT_ORDER_ROUTER];

  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const hasLimitOrderFill = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.LIMIT_ORDER_FILL
    );

    if (hasLimitOrderFill) {
      actions.push(this.parseLimitOrderFill(hasLimitOrderFill));
      return actions;
    }

    const hasMultiLimitOrderFill = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.MULTI_LIMIT_ORDER_FILL
    );

    if (hasMultiLimitOrderFill) {
      actions.push(this.parseMultiLimitOrderFill(hasMultiLimitOrderFill));
      return actions;
    }

    throw new Error("No swap found in transaction");
  }

  private static parseLimitOrderFill(log: ITransactionLog): ISingleSwapAction {
    const parsedLog = ProtocolHelper.parseLog(
      log,
      this.contractDefinition.events[EVENT_ENUM.LIMIT_ORDER_FILL]
    );

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedLog.args.inputToken,
      toToken: parsedLog.args.outputToken,
      fromAmount: parsedLog.args.filledInputAmount.toString(),
      toAmount: parsedLog.args.filledOutputAmount.toString(),
      recipient: parsedLog.args.orderOwner,
      sender: parsedLog.args.orderOwner,
    };
  }

  private static parseMultiLimitOrderFill(
    log: ITransactionLog
  ): IMultiSwapAction {
    const parsedLog = ProtocolHelper.parseLog(
      log,
      this.contractDefinition.events[EVENT_ENUM.MULTI_LIMIT_ORDER_FILL]
    );

    return {
      type: ACTION_ENUM.MULTI_SWAP,
      fromTokens: parsedLog.args.inputTokens,
      toTokens: parsedLog.args.outputTokens,
      fromAmounts: parsedLog.args.filledInputAmounts.map((amount) =>
        amount.toString()
      ),
      toAmounts: parsedLog.args.filledOutputAmounts.map((amount) =>
        amount.toString()
      ),
      sender: parsedLog.args.orderOwner,
      recipients: new Array(parsedLog.args.filledInputAmounts.length).fill(
        parsedLog.args.orderOwner
      ),
    };
  }
}
