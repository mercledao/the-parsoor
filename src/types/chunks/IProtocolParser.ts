/** Interface for a protocol parser */
export interface IProtocolParser {
  /** Unique identifier for the protocol */
  readonly protocolIdentifier: string;

  /** Get all listener contracts for the protocol */
  getListenerContracts(): string[];
}
