import { ethers } from 'ethers';
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from '../../enums';
import { IProtocolContractDefinitions } from '../../types';
import PoolAbi from './abis/Pool.json';

enum CONTRACT_ENUM {
  POOL = 'Pool'
}

enum EVENT_ENUM {
  SWAP = 'Swap'
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.POOL]: {
    interface: new ethers.Interface(PoolAbi.abi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: ethers.ZeroAddress,
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      }
    },
    events: {
      [EVENT_ENUM.SWAP]: {
        signature: '0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67',
        abi: new ethers.Interface([
          'event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)'
        ])
      }
    }
  }
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };

