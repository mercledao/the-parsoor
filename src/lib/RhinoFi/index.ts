import { protocols } from '../../config';
import { ProtocolHelper } from '../../helpers';
import { IProtocolContractDefinitions, IProtocolParserExport, ITransaction, ITransactionAction } from '../../types';
import { CONTRACT_ENUM, contracts } from './contracts';
import { DepositContractParser } from './parser';

export default class RhinoFi implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.rhinofi.identifier;
  }

  public async parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.DEPOSIT_CONTRACT, contracts)) {
      const action = DepositContractParser.parseTransaction(transaction);
      actions.push(...action);
    }

    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
