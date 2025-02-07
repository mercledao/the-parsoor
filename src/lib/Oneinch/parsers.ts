import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IBridgeInAction,
  IBridgeOutAction,
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { contracts, CONTRACT_ENUM } from "./contracts";
enum CONTRACT_FUNCTION_NAMES {
  SWAP = "swap",
}

export class AggregationRouterV5ContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.AGGREGATION_ROUTER_V5_CONTRACT,
      contracts
    );
    
    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP) {
      actions.push(this.parseSwapTransaction(transaction, parsedTxn));
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
}
