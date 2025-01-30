import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { contracts, EVENT_ENUM } from "./contracts";

export class SushiswapParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const swapLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.ROUTE
    );

    if (swapLog) {
      actions.push(this.parseSwapLog(transaction, swapLog));
      return actions;
    }

    return actions;
  }

  private static parseSwapLog(
    transaction: ITransaction,
    swapLog: ITransactionLog
  ): ISingleSwapAction {
    const parsedSwapLog = ProtocolHelper.parseLog(
      swapLog,
      contracts.SUSHISWAP_CONTRACT.events[EVENT_ENUM.ROUTE]
    );

    const args = parsedSwapLog.args;

    const parsedLogs = ProtocolHelper.parseERC20TransferLogs(transaction.logs);

    let inwardTxn;
    
    if(parsedLogs.length > 0){
      inwardTxn = parsedLogs.filter((log)=>{
        return log.toAddress === args.from
      })
    }
  
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: args.tokenIn,
      toToken: args.tokenOut,
      fromAmount: args.amountIn.toString(),
      toAmount: inwardTxn.length > 0 ? inwardTxn[0].value.toString() : args.amountOut.toString(),
      sender: transaction.from,
      recipient: args.from,
    };
  }
}
