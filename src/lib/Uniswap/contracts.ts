import { ethers } from 'ethers';
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from '../../enums';
import { IProtocolContractDefinitions } from '../../types';
import UniswapUniversalRouterABI from './abis/UniswapUniversalRouter.json';
import UniswapV2RouterABI from './abis/UniswapV2Router.json';

export enum CONTRACT_ENUM {
  POOL_V2 = 'PoolV2',
  ROUTER_V2 = 'RouterV2',
  POOL_V3 = 'PoolV3',
  ROUTER_V3 = 'RouterV3',
  UNIVERSAL_ROUTER = 'UniversalRouter'
}

export enum EVENT_ENUM {
  SWAP = '0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822'
}

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER_V2]: {
    interface: new ethers.Interface(UniswapV2RouterABI),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: '0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.OPTIMISM]: {
        address: '0x4A7b5Da61326A6379179b40d00F57E5bbDC962c2',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.POLYGON]: {
        address: '0xedf6066a2b290C185783862C7F4776A2C8077AD1',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.BASE]: {
        address: '0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      }
    },
    events: {
      [EVENT_ENUM.SWAP]: {
        abi: new ethers.Interface([
          'event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)'
        ])
      }
    }
  },
  [CONTRACT_ENUM.UNIVERSAL_ROUTER]: {
    interface: new ethers.Interface(UniswapUniversalRouterABI.abi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.ARBITRUM]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.OPTIMISM]: {
        address: '0xCb1355ff08Ab38bBCE60111F1bb2B784bE25D7e8',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.POLYGON]: {
        address: '0xec7BE89e9d109e7e3Fec59c222CF297125FEFda2',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.BASE]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      }
    },
    events: {}
  }
};
