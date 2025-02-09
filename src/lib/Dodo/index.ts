import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { TransactionParser } from "./parsers";

export default class Dodo implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.dodo.identifier;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    const contractTypes = [
      CONTRACT_ENUM.PROXY_02_V2,
      CONTRACT_ENUM.PROXY_ROUTE,
      CONTRACT_ENUM.FEE_ROUTE_PROXY_WIDGET,
      CONTRACT_ENUM.FEE_ROUTE_PROXY
    ];

    for (const contractType of contractTypes) {
      if (
        ProtocolHelper.txnToIsListenerContract(transaction, contractType, contracts)
      ) {
        actions.push(...TransactionParser.parseTransaction(transaction, contractType));
      }
    }

    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
