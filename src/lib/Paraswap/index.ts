import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { AugustusV5Parser } from "./parsers";

export default class Paraswap implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.across.identifier;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.AUGUSTUS_V5,
        contracts
      )
    ) {
      const action = AugustusV5Parser.parseTransaction(transaction);
      actions.push(...action);
    } else if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.AUGUSTUS_V6,
        contracts
      )
    ) {
      const action = AugustusV5Parser.parseTransaction(transaction);
      actions.push(...action);
    }
    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
