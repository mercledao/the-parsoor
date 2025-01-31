import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { SmartRouterContractParser, SwapRouterContractParser } from "./parsers";

export default class Pancakeswap implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.pancakeswap.identifier;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.SMART_ROUTER_V3,
        contracts
      )
    ) {
      const action = SmartRouterContractParser.parseTransaction(transaction);
      actions.push(...action);
    } else if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.SWAP_ROUTER_V3,
        contracts
      )
    ) {
      const action = SwapRouterContractParser.parseTransaction(transaction);
      actions.push(...action);
    }
    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
