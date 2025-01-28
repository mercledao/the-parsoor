import { CHAIN_ID } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IChainContractDefinitions,
  IChainParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { OptimismParser } from "./parser";

export default class Optimism implements IChainParserExport {
  public readonly chainIdentifier: number;

  constructor() {
    this.chainIdentifier = CHAIN_ID.OPTIMISM;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.L1_STANDARD_BRIDGE,
        contracts
      )
    ) {
      const action = OptimismParser.parseTransaction(transaction);
      actions.push(...action);
    } else if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.L2_STANDARD_BRIDGE,
        contracts
      )
    ) {
      const action = OptimismParser.parseTransaction(transaction);
      actions.push(...action);
    }
    return actions;
  }

  public getChainContracts(): IChainContractDefinitions {
    return contracts;
  }
}
