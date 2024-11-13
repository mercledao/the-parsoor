import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { UniswapParser } from "./parser";

export default class Uniswap implements IProtocolParserExport {
  public readonly protocolIdentifier: string;
  private readonly combinedContracts: IProtocolContractDefinitions;

  constructor() {
    this.protocolIdentifier = protocols.uniswap.identifier;
    this.combinedContracts = contracts;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (!transaction?.to || !transaction?.data) {
      return actions;
    }
    if (ProtocolHelper.txnToIsListenerContract(
      transaction,
      CONTRACT_ENUM.ROUTER_V2,
      contracts
    )) {
      const v2Actions = await UniswapParser.parseV2Transaction(transaction);
      if (v2Actions.length > 0) {
        return v2Actions;
      }
    }

    const v3Actions = await UniswapParser.parseV3Transaction(transaction);
    if (v3Actions.length > 0) {
      return v3Actions;
    }

    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return this.combinedContracts;
  }
}