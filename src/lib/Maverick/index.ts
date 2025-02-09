import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { MaverickContractParser } from "./parsers";

export default class Maverick implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.maverick.identifier;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];
    
    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.ROUTER_V1,
        contracts
      )
    ) {
      const action = MaverickContractParser.parseTransaction(transaction);
      actions.push(...action);
    }
    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
