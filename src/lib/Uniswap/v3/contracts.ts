import { ethers } from 'ethers';
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from '../../../enums';
import { IProtocolContractDefinitions } from '../../../types';
import UniswapV3RouterABI from './abis/UniswapV3Router.json';

export enum CONTRACT_ENUM {
  ROUTER = 'UniswapV3Router'
}

export enum EVENT_ENUM {
  SWAP = '0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67'
}

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER]: {
    interface: new ethers.Interface(UniswapV3RouterABI),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      }
    },
    events: {
      [EVENT_ENUM.SWAP]: {
        abi: new ethers.Interface([
          'event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)'
        ])
      }
    }
  }
};
