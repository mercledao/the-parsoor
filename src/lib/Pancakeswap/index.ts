import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { PancakeswapParser } from "./parsers";

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
      const action = await PancakeswapParser.parseV3Transaction(transaction,CONTRACT_ENUM.SMART_ROUTER_V3);
      actions.push(...action);
    } else if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.SWAP_ROUTER_V3,
        contracts
      )
    ) {
      const action = await PancakeswapParser.parseV3Transaction(transaction, CONTRACT_ENUM.SWAP_ROUTER_V3);
      actions.push(...action);
    } else if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.ROUTER_V2,
        contracts
      )
    ) {
      const action = await PancakeswapParser.parseV2Transaction(transaction);
      actions.push(...action);
    }
    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
