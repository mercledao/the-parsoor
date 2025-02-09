export type IProtocolDefinitionMap = Record<string, IProtocolDefinition>;

export type IProtocolDefinition = {
  identifier: string;
  name: string;
  twitter?: string;
  logo?: string;
  website?: string;
  type?: ProtocolType;
  actionTags?: ActionTags[];
};

export enum ProtocolType {
  DEX = "DEX",
  DEX_AGGREGGATOR = "DEX Aggregator",
  CROSS_CHAIN_BRIDGE = "Cross Chain Bridge",
}

export enum ActionTags {
  SWAP = "swap",
  BRIDGE = "bridge",
}
