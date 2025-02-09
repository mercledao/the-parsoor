import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";

export class CurveContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];
    
    const matchedExchangeOrderLogs = transaction.logs.filter(
      (log) => log.topics[0] === EVENT_ENUM.EXCHANGE
    );
    if (matchedExchangeOrderLogs) {
      for (const exchangeOrder of matchedExchangeOrderLogs) {
        actions.push(this.parseExchangeOrder(exchangeOrder));
      }
    }
    
    return actions;
  }
  
  private static parseExchangeOrder(log: ITransactionLog): ISingleSwapAction {
    const parsedLog = ProtocolHelper.parseLog(
      log,
      contracts.ROUTER_V1.events[EVENT_ENUM.EXCHANGE]
    );

    const fromToken = parsedLog.args.route[0];
    const toToken = this.getToToken(parsedLog.args.route)

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: parsedLog.args.in_amount.toString(),
      toAmount: parsedLog.args.out_amount.toString(),
      sender: parsedLog.args.sender,
      recipient: parsedLog.args.receiver,
    };
  }

  private static getToToken(addresses: []) {
    for (let i = addresses.length - 1; i >= 0; i--) {
        if (addresses[i] !== "0x0000000000000000000000000000000000000000") {
            return addresses[i];
        }
    }
}
}
