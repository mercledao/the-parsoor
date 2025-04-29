import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { PandoraParser } from "./parsers";

export default class Pandora implements IProtocolParserExport {
  public readonly protocolIdentifier: string;
  private readonly combinedContracts: IProtocolContractDefinitions;

  constructor() {
    this.protocolIdentifier = protocols.pandora.identifier;
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
      return await PandoraParser.parseV2Transaction(transaction);
    }

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.UNIVERSAL_ROUTER,
        contracts
      )
    ) {
      return await PandoraParser.parseUniveralRouterTransaction(transaction);
    }

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.ROUTER_V3_02,
        contracts
      )
    ) {
      return await PandoraParser.parseV3Transaction(
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
