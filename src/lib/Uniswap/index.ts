import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
    IProtocolContractDefinitions,
    IProtocolParserExport,
    ITransaction,
    ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { UniswapV2Parser } from "./parser";

export default class UniswapV2 implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.uniswapV2.identifier;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.ROUTER,
        contracts
      )
    ) {
      const action = UniswapV2Parser.parseTransaction(transaction);
      actions.push(...action);
    }

    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}