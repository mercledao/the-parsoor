import { LogDescription } from "ethers";
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

export default class RouterV1Parser {
  private static v1ContractDefinition = contracts[CONTRACT_ENUM.V1_ROUTER];

  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const hasSwap = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.V1_SWAP
    );

    if (hasSwap) {
      actions.push(this.parseSwap(hasSwap));
      return actions;
    }

    throw new Error("No swap found in transaction");
  }

  private static parseSwap(
    swapLog: ITransactionLog
  ): ISingleSwapAction | IMultiSwapAction {
    const parsedLog = ProtocolHelper.parseLog(
      swapLog,
      this.v1ContractDefinition.events[EVENT_ENUM.V1_SWAP]
    );

    if (
      parsedLog.args.tokensIn.length === 1 &&
      parsedLog.args.outputs.length === 1
    ) {
      return this.parseSingleSwap(parsedLog);
    }

    return this.parseMultiSwap(parsedLog);
  }

  private static parseMultiSwap(
    multiSwapLog: LogDescription
  ): IMultiSwapAction {
    return {
      type: ACTION_ENUM.MULTI_SWAP,
      fromTokens: multiSwapLog.args.tokensIn.map((t) => t.toString()),
      toTokens: multiSwapLog.args.outputs.map((output) => output[0].toString()),
      fromAmounts: multiSwapLog.args.amountsIn.map((amount) =>
        amount.toString()
      ),
      toAmounts: multiSwapLog.args.amountsOut.map((amount) =>
        amount.toString()
      ),
      sender: multiSwapLog.args.sender,
      recipients: multiSwapLog.args.outputs.map((output) => output[2]),
    };
  }

  private static parseSingleSwap(
    singleSwapLog: LogDescription
  ): ISingleSwapAction {
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: singleSwapLog.args.tokensIn[0],
      toToken: singleSwapLog.args.outputs[0][0],
      fromAmount: singleSwapLog.args.amountsIn[0].toString(),
      toAmount: singleSwapLog.args.amountsOut[0].toString(),
      recipient: singleSwapLog.args.outputs[0][2],
      sender: singleSwapLog.args.sender,
    };
  }
}
