import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IBridgeInAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";

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
    }

    return actions;
  }

  private static parseFilledDeposit(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): IBridgeInAction {
    const parsedLog = ProtocolHelper.parseLog(
      depositLog,
      contracts.SPOKEPOOL_CONTRACT.events[EVENT_ENUM.FILLED_DEPOSIT]
    );
    
    const args = parsedLog.args;

    return {
      type: ACTION_ENUM.BRIDGE_IN,
      fromChain: transaction.chainId,
      toChain: Number(args.repaymentChainId),
      fromToken: args.inputToken.toLowerCase(),
      toToken: args.outputToken.toLowerCase(),
      fromAmount: args.inputAmount.toString(),
      toAmount: args.outputAmount.toString(),
      sender: args.relayer.toLowerCase(),
      recipient: args.recipient.toLowerCase(),
    };
  }
}
