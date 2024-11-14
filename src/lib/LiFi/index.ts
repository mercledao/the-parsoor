import { protocols } from '../../config';
import { ProtocolHelper } from '../../helpers';
import { IProtocolContractDefinitions, IProtocolParserExport, ITransaction, ITransactionAction } from '../../types';
import { CONTRACT_ENUM, contracts } from './contracts';
import { LifiParser } from './parser';

export default class Lifi implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.lifi.identifier;
  }

  public async parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.LIFI_DIAMOND, contracts)) {
      const parsedActions = await LifiParser.parseTransaction(transaction);
      actions.push(...parsedActions);
    }

    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
