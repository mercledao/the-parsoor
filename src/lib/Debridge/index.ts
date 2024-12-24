import { protocols } from '../../config';
import { ProtocolHelper } from '../../helpers';
import { IProtocolContractDefinitions, IProtocolParserExport, ITransaction, ITransactionAction } from '../../types';
import { CONTRACT_ENUM, contracts } from './contracts';
import { DlnSourceContractParseTransaction, DlnDestinationContractParseTransaction } from './parser';

export default class Debridge implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.debridge.identifier;
  }

  public async parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.DLN_SOURCE, contracts)) {
      const action = DlnSourceContractParseTransaction.parseTransaction(transaction);
      actions.push(...action);
    }else if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.DLN_DESTINATION, contracts)) {
      const action = DlnDestinationContractParseTransaction.parseTransaction(transaction);
      actions.push(...action);
    } 
    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
