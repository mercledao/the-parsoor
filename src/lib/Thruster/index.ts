import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { ThrusterParser } from "./parsers";

export default class Thruster implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.thruster.identifier;
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
      return await ThrusterParser.parseSwapRouterTransaction(transaction);
    } else if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.THRUSTER_ROUTER,
        contracts
      )
    ) {
      return await ThrusterParser.parseThrustRouterTransaction(transaction, CONTRACT_ENUM.THRUSTER_ROUTER);
    } else if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.THRUSTER_ROUTER_2,
        contracts
      )
    )
      return await ThrusterParser.parseThrustRouterTransaction(transaction, CONTRACT_ENUM.THRUSTER_ROUTER);
    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
