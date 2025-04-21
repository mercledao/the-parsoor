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
  DATA_ANALYTICS = "Data Analytics",
  WALLET = "Wallet",
  TRADING_PLATFORM = "Trading Platform",
  GRANTS = "Grants",
  QUESTING_PLATFORM = "Questing Platform",
  STAKING = "Staking Platform",
  DOMAIN_SERVICE = "Domain Name Service",
  NFT_MARKETPLACE = "NFT Marketplace",
  INFRA = "Web3 Infra",
  MESSAGING_PROTOCOL = "Messaging Protocol",
  SOCIAL_FI = "SocialFi",
}

export enum ActionTags {
  SWAP = "swap",
  BRIDGE = "bridge",
}
