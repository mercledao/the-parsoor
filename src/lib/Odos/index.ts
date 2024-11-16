import { protocols } from "../../config";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { contracts } from "./contracts";

export default class Odos implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.odos.identifier;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
