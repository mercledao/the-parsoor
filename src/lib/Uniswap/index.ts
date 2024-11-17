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

  public async parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    if (!transaction?.to || !transaction?.data) {
      return [];
    }

    // Try V2
    if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.ROUTER_V2, contracts)) {
      return await UniswapParser.parseV2Transaction(transaction);
    }

    // Try Router01
    if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.ROUTER_V3_01, contracts)) {
      return await UniswapParser.parseV3Transaction(transaction, CONTRACT_ENUM.ROUTER_V3_01);
    }

    // Try Router02
    if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.ROUTER_V3_02, contracts)) {
      return await UniswapParser.parseV3Transaction(transaction, CONTRACT_ENUM.ROUTER_V3_02);
    }

    return [];
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return this.combinedContracts;
  }
}