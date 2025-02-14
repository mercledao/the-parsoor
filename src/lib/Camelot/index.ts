import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { CamelotParser } from "./parsers";

export default class Camelot implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.camelot.identifier;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.SWAP_ROUTER,
        contracts
      )
    ) {
      return await CamelotParser.parseSwapRouterTransaction(transaction, CONTRACT_ENUM.SWAP_ROUTER);
    } else if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.ROUTER,
        contracts
      )
    ) {
      return await CamelotParser.parseCamelotRouterTransaction(
        transaction,
        CONTRACT_ENUM.ROUTER
      );
    } else if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.ROUTER_V3,
        contracts
      )
    ) {
      return await CamelotParser.parseSwapRouterTransaction(
        transaction,
        CONTRACT_ENUM.ROUTER_V3
      );
    } else if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.CAMELOT_YOK_ROUTER,
        contracts
      )
    ) {
      return await CamelotParser.parseYakRouterTransaction(
        transaction
      );
    }
    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
