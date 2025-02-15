import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";
import { ethers } from "ethers";


enum CONTRACT_FUNCTION_NAMES {
  SWAP = "swap",
}


export class AmbientParser {

  public static parseSwapTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.CROC_SWAP_ROUTER,
      contracts
    );

    if (!parsedTxn) {
      return actions;
    }

    if(parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP){
      return this.handleSwap(transaction, parsedTxn);
    }
    return actions;
  }

  private static handleSwap(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction [] {
    const actions = [];
    const fromToken = parsedTxn.args.base;
    const toToken = parsedTxn.args.quote;
    const fromAmount = parsedTxn.args.qty.toString();
    const sender = transaction.from;

    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(transaction.logs);
    

    const inComingTxns = erc20TransferLogs.filter((log)=> log.toAddress.toLowerCase() === sender.toLowerCase() && log.contractAddress === toToken)

    for (const incomingTxn of inComingTxns) {
      actions.push(
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken,
          toToken,
          fromAmount,
          toAmount: incomingTxn.value.toString(),
          sender,
          recipient: sender,
        }
      )
    }
    return actions
  }

  public static parseSwapDexTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.CROC_SWAP_ROUTER,
      contracts
    );

    if (!parsedTxn) {
      return actions;
    }

    if(parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP){
      return this.handleSwap(transaction, parsedTxn);
    }
    return actions;
  }
}
