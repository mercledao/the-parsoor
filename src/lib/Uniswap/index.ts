import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { LimitOrderParser } from "./parsers/LimitOrderRouter";
import { UniswapParser } from "./parsers/Uniswap";

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

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.UNIVERSAL_ROUTER,
        contracts
      )
    ) {
      return await UniswapParser.parseUniversalRouterTransaction(transaction);
    }

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.ROUTER_V2,
        contracts
      )
    ) {
      return await UniswapParser.parseV2Transaction(transaction);
    }

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.ROUTER_V3_01,
        contracts
      )
    ) {
      return await UniswapParser.parseV3Transaction(
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
      return await UniswapParser.parseV3Transaction(
        transaction,
        CONTRACT_ENUM.ROUTER_V3_02
      );
    }

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.LIMIT_ORDER_ROUTER,
        contracts
      )
    ) {
      return await LimitOrderParser.parseTransaction(transaction);
    }

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.EXCLUSIVE_LIMIT_ORDER_ROUTER,
        contracts
      )
    ) {
      return await LimitOrderParser.parseTransaction(transaction);
    }

    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return this.combinedContracts;
  }
}
