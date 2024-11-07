import { CHAIN_ID } from '../../enums';

export type IChainDefinitions = Partial<Record<CHAIN_ID, IChainConfig>>;

export type IChainConfig = {
  /**JSON-RPC endpoint  */
  rpcUrl: string;
};
