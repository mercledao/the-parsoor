import { ProtocolHelper } from "../../../helpers";
import { protocols } from "../../config";
import { ITransaction, ITransactionAction, IProtocolParser } from "../../types";
import { contracts } from "./contracts";

export default class RhinoFiParser implements IProtocolParser {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.rhinofi.identifier;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    return [];
  }

  public getListenerContracts(): string[] {
    return ProtocolHelper.extractAllContracts(contracts);
  }
}
