import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { KodiakParser } from "./parsers";

export default class Kodiak implements IProtocolParserExport {
  public readonly protocolIdentifier: string;
  private readonly combinedContracts: IProtocolContractDefinitions;

  constructor() {
    this.protocolIdentifier = protocols.kodiak.identifier;
    // this.combinedContracts = contracts;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.ROUTER_V2,
        contracts
      )
    ) {
      return await KodiakParser.parseV2Transaction(transaction);
    }

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.ROUTER_V3_01,
        contracts
      )
    ) {
      return await KodiakParser.parseV3Transaction(
        transaction,
        CONTRACT_ENUM.ROUTER_V3_01
      );
    }

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.ROUTER_V3_02,
        contracts
      )
    ) {
      return await KodiakParser.parseV3Transaction(
        transaction,
        CONTRACT_ENUM.ROUTER_V3_02
      );
    }

    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return this.combinedContracts;
  }
}
