import { CHAIN_ID } from '../enums';
import { IChainDefinitions } from '../types';

export const chainConfig: IChainDefinitions = {
  [CHAIN_ID.ARBITRUM]: {
    rpcUrl: process.env.ARBITRUM_RPC_URL || 'https://arb1.arbitrum.io/rpc'
  },
  [CHAIN_ID.ETHEREUM]: {
    rpcUrl: process.env.ETHEREUM_RPC_URL || 'https://eth.public-rpc.com'
  }
};
