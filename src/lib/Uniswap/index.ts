import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { UniswapParser } from "./parser";

export default class Uniswap implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.uniswap.identifier;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    console.log('Checking transaction:', {
      to: transaction.to,
      contractAddress: contracts[CONTRACT_ENUM.ROUTER].deployments[transaction.chainId].address
    });

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.ROUTER,
        contracts
      )
    ) {
      console.log('Transaction matches router contract');
      const action = UniswapParser.parseTransaction(transaction);
      actions.push(...action);
    } else {
      console.log('Transaction does not match router contract');
    }

    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}