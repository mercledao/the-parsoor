import { IChainContractDefinitions } from "./IContractDefinition";
import { ITransaction } from "./ITransaction";
import { ITransactionAction } from "./ITransactionActions";

/** Interface for a protocol parser */
export interface IChainParserExport {
  /** Unique identifier for the protocol */
  readonly chainIdentifier: number;

  /** Parse a transaction */
  parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]>;

  /** Get all protocol contracts for the protocol */
  getChainContracts(): IChainContractDefinitions;
}
