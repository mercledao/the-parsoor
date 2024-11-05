/** Interface for a protocol parser */
export interface IProtocolParserExport {
  /** Unique identifier for the protocol */
  readonly protocolIdentifier: string;

  /** Get all listener contracts for the protocol */
  getListenerContracts(): string[];
}
