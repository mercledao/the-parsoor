import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { LimitOrderParser } from "./LimitOrderParser";
import { UniswapParser } from "./parser";

export default class Uniswap implements IProtocolParserExport {
  public readonly protocolIdentifier: string;
  private readonly combinedContracts: IProtocolContractDefinitions;

  constructor() {
    this.protocolIdentifier = protocols.uniswap.identifier;
    this.combinedContracts = contracts;
  }

  public async parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    // Try parsing as limit order first
    const limitOrderActions = LimitOrderParser.parseTransaction(transaction);
    if (limitOrderActions.length > 0) {
      return limitOrderActions;
    }

    if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.UNIVERSAL_ROUTER, contracts)) {
      return await UniswapParser.parseUniversalRouterTransaction(transaction);
    }

    if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.ROUTER_V2, contracts)) {
      return await UniswapParser.parseV2Transaction(transaction);
    }

    if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.ROUTER_V3_01, contracts)) {
      return await UniswapParser.parseV3Transaction(transaction, CONTRACT_ENUM.ROUTER_V3_01);
    }

    if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.ROUTER_V3_02, contracts)) {
      return await UniswapParser.parseV3Transaction(transaction, CONTRACT_ENUM.ROUTER_V3_02);
    }

    return [];
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return this.combinedContracts;
  }
}