import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import LimitOrderRouterParser from "./parsers/LimitOrderRouter";
import RouterV1Parser from "./parsers/RouterV1";
import RouterV2Parser from "./parsers/RouterV2";

export default class Odos implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.odos.identifier;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.V2_ROUTER,
        contracts
      )
    ) {
      actions.push(...RouterV2Parser.parseTransaction(transaction));
    } else if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.V1_ROUTER,
        contracts
      )
    ) {
      actions.push(...RouterV1Parser.parseTransaction(transaction));
    } else if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.LIMIT_ORDER_ROUTER,
        contracts
      )
    ) {
      actions.push(...LimitOrderRouterParser.parseTransaction(transaction));
    }

    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
