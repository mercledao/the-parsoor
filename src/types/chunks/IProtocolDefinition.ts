export type IProtocolDefinitionMap = Record<string, IProtocolDefinition>;

export type IProtocolDefinition = {
  identifier: string;
  name: string;
  twitter?: string;
  logo?: string;
};