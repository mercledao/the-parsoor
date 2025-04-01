import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { KyberswapAggregatorContractParser } from "./parser";

export default class KyberswapAggregator implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.kyberswap.identifier;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.KYBERSWAP_AGGREGATOR,
        contracts
      ) || ProtocolHelper.txnToIsListenerContract(transaction,CONTRACT_ENUM.KSZapRouter,contracts)
    ) {
      actions.push(...KyberswapAggregatorContractParser.parseTransaction(transaction));
    }

    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
