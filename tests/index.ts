import { ethers } from 'ethers';
import { chainConfig, parsers, protocols } from '../src';

export class ProtocolParserUtils {
  public readonly protocolIdentifier: string;
  private readonly rpcPool: Record<string, ethers.JsonRpcProvider>;

  constructor(protocolIdentifier: string) {
    this.protocolIdentifier = protocolIdentifier;
    this.rpcPool = {};
  }

  public async initialize(): Promise<void> {
    for (const [chainId, chain] of Object.entries(chainConfig)) {
      this.rpcPool[chainId] = new ethers.JsonRpcProvider(chain.rpcUrl);
    }
  }

  public isValidProtocol(): void {
    const hasParser = parsers[this.protocolIdentifier] !== undefined;
    expect(hasParser).toBe(true);

    const hasCorrectDefinition =
      protocols[this.protocolIdentifier] !== undefined &&
      protocols[this.protocolIdentifier].identifier === this.protocolIdentifier;

    expect(hasCorrectDefinition).toBe(true);
  }
}
