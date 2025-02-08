import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IBridgeInAction,
  IBridgeOutAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { contracts, EVENT_ENUM } from "./contracts";

export class SpokepoolContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const filledDepositLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.FILLED_DEPOSIT
    );

    if (filledDepositLog) {
      actions.push(this.parseFilledDeposit(transaction, filledDepositLog));
      return actions;
    }

    const depositLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.DEPOSIT
    );

    if (depositLog) {
      actions.push(this.parseDeposit(transaction, depositLog));
      return actions;
    }

    const filledDepositLogV2 = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.FILLED_DEPOSIT_V2
    );

    if (filledDepositLogV2) {
      actions.push(this.parseFilledDepositV2(transaction, filledDepositLogV2));
      return actions;
    }

    return actions;
  }

  private static parseDeposit(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): IBridgeOutAction {
    const parsedFilledDepositLog = ProtocolHelper.parseLog(
      depositLog,
      contracts.SPOKEPOOL_CONTRACT.events[EVENT_ENUM.DEPOSIT]
    );

    const args = parsedFilledDepositLog.args;

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: args.destinationChainId.toString(),
      fromToken: args.inputToken,
      toToken: args.outputToken,
      fromAmount: args.inputAmount.toString(),
      toAmount: args.outputAmount.toString(),
      sender: args.depositor,
      recipient: args.recipient,
    };
  }

  private static parseFilledDeposit(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): IBridgeInAction {
    const parsedFilledDepositLog = ProtocolHelper.parseLog(
      depositLog,
      contracts.SPOKEPOOL_CONTRACT.events[EVENT_ENUM.FILLED_DEPOSIT]
    );

    const args = parsedFilledDepositLog.args;

    return {
      type: ACTION_ENUM.BRIDGE_IN,
      fromChain: args.repaymentChainId.toString(),
      toChain: transaction.chainId,
      fromToken: args.inputToken,
      toToken: args.outputToken,
      fromAmount: args.inputAmount.toString(),
      toAmount: args.outputAmount.toString(),
      sender: args.depositor,
      recipient: args.recipient,
    };
  }

  private static parseFilledDepositV2(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): IBridgeInAction {
    const parsedFilledDepositLog = ProtocolHelper.parseLog(
      depositLog,
      contracts.SPOKEPOOL_CONTRACT.events[EVENT_ENUM.FILLED_DEPOSIT_V2]
    );

    const args = parsedFilledDepositLog.args;

    return {
      type: ACTION_ENUM.BRIDGE_IN,
      fromChain: args.originChainId.toString(),
      toChain: transaction.chainId,
      fromToken: null,
      toToken: args.destinationToken,
      fromAmount: null,
      toAmount: args.fillAmount.toString(),
      sender: args.depositor,
      recipient: args.recipient,
    };
  }
}
