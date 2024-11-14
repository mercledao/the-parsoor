import { IProtocolContractDefinitions } from "./IContractDefinition";
import { ITransaction } from "./ITransaction";
import { ITransactionAction } from "./ITransactionActions";

/** Interface for a protocol parser */
export interface IProtocolParserExport {
  /** Unique identifier for the protocol */
  readonly protocolIdentifier: string;

  /** Parse a transaction */
  parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]>;

  /** Get all protocol contracts for the protocol */
  getProtocolContracts(): IProtocolContractDefinitions;
}
