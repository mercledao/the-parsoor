import { ProtocolHelper } from "../../helpers";
import { protocols } from "../../config";
import { ITransaction, ITransactionAction, IProtocolParser } from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { ethers } from "ethers";

export default class RhinoFi implements IProtocolParser {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.rhinofi.identifier;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.DEPOSIT_CONTRACT,
        contracts
      )
    ) {
      const contractInterface =
        contracts[CONTRACT_ENUM.DEPOSIT_CONTRACT].interface;
      const decoded = contractInterface.parseTransaction(transaction);
    }
  }

  public getListenerContracts(): string[] {
    return ProtocolHelper.extractAllContracts(contracts);
  }
}
