import { IProtocolContractDefinitions } from './IContractDefinition';

/** Interface for a protocol parser */
export interface IProtocolParserExport {
  /** Unique identifier for the protocol */
  readonly protocolIdentifier: string;

  /** Get all protocol contracts for the protocol */
  getProtocolContracts(): IProtocolContractDefinitions;
}
