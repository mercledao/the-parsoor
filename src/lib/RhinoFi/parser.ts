import { contracts } from "./contracts";
import {
  IBridgeOutAction,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM } from "./contracts";
import { ProtocolHelper } from "../../helpers";
import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";

enum CONTRACT_FUNCTION_NAMES {
  // Function for depositing tokens to the bridge
  DEPOSIT = "deposit",

  // Function for depositing native tokens to the bridge
  DEPOSIT_NATIVE = "depositNative",
}

export class DepositContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.DEPOSIT_CONTRACT,
      contracts
    );

    switch (parsedTxn.name) {
      case CONTRACT_FUNCTION_NAMES.DEPOSIT:
        actions.push(this.parseDeposit(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.DEPOSIT_NATIVE:
        actions.push(this.parseDepositNative(transaction, parsedTxn));
        break;
    }

    return actions;
  }

  private static parseDeposit(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction {
    return {
      type: ACTION_ENUM.BRIDGE_OUT,

      fromChain: transaction.chainId,
      toChain: null,

      fromToken: parsedTxn.args.token,
      toToken: null,

      fromAmount: parsedTxn.args.amount,
      toAmount: null,

      sender: transaction.from,
      recipient: null,
    };
  }

  private static parseDepositNative(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction {
    return {
      type: ACTION_ENUM.BRIDGE_OUT,

      fromChain: transaction.chainId,
      toChain: null,

      fromToken: ethers.ZeroAddress,
      toToken: null,

      fromAmount: transaction.value,
      toAmount: null,

      sender: transaction.from,
      recipient: null,
    };
  }
}
