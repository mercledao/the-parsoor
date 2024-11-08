import { protocols } from '../../config';
import { ProtocolHelper } from '../../helpers';
import { IProtocolContractDefinitions, IProtocolParserExport, ITransaction, ITransactionAction } from '../../types';
import { CONTRACT_ENUM, contracts } from './contracts';
import { DepositContractParser, RhinoFiEthL1DepositContractParser, RhinofiL1WithdrawalRegistryParser } from './parser';

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
    } else if (
      ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.RHINOFI_ETH_L1_DEPOSIT_CONTRACT, contracts) ||
      ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.RHINOFI_L1_DEPOSIT_PROXY, contracts)
    ) {
      const action = RhinoFiEthL1DepositContractParser.parseTransaction(transaction);
      actions.push(...action);
    } else if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.L1_WITHDRAWAL_REGISTRY, contracts)) {
      const action = RhinofiL1WithdrawalRegistryParser.parseTransaction(transaction);
      actions.push(...action);
    }

    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
