import { ethers } from 'ethers';
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from '../../enums';
import { IProtocolContractDefinitions } from '../../types';
import PoolAbi from './abis/Pool.json';
import RouterAbi from './abis/Router.json';
import SwapRouter01Abi from './abis/SwapRouter01.json';
import SwapRouter02Abi from './abis/SwapRouter02.json';
import UniswapUniversalRouterABI from './abis/UniswapUniversalRouter.json';
import UniswapV2RouterABI from './abis/UniswapV2Router.json';

export enum CONTRACT_ENUM {
  POOL_V2 = 'PoolV2',
  ROUTER_V2 = 'RouterV2',
  POOL_V3 = 'PoolV3',
  ROUTER_V3 = 'RouterV3',
  UNIVERSAL_ROUTER = 'UniversalRouter',
}

export enum COMMAND_ENUM {
  // V3 Swap Commands
  V3_SWAP_EXACT_IN = 0x00,
  V3_SWAP_EXACT_OUT = 0x01,
  
  // V2 Swap Commands  
  V2_SWAP_EXACT_IN = 0x02,
  V2_SWAP_EXACT_OUT = 0x03,
  
  // Permit2 Commands
  PERMIT2_PERMIT = 0x0a,
  PERMIT2_TRANSFER_FROM = 0x0b,
  
  // Wrap/Unwrap Commands
  WRAP_ETH = 0x0c,
  UNWRAP_WETH = 0x0d,
  
  // Sweep Commands
  SWEEP = 0x0e,
  TRANSFER = 0x0f,
  
  // Payment Commands  
  PAY_PORTION = 0x10,
  
  // V3 LP Commands
  V3_MINT = 0x11,
  V3_COLLECT = 0x12,
  V3_BURN = 0x13,
  
  // V2 LP Commands
  V2_MINT = 0x14,
  V2_BURN = 0x15,
  
  // Routing Commands
  ROUTE = 0x16,
  NOOP = 0x17,
  
  // Timestamp Commands
  TIMESTAMP = 0x18,
  
  // Limit Order Commands
  LIMIT_ORDER = 0x19,
  CANCEL_LIMIT_ORDER = 0x1a
}

export enum EVENT_ENUM {
  SWAP = '0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67'
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
  },
  [CONTRACT_ENUM.POOL_V3]: {
    interface: new ethers.Interface(PoolAbi.abi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: ethers.ZeroAddress,
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
  },
  [CONTRACT_ENUM.ROUTER_V3]: {
    interface: new ethers.Interface(RouterAbi.abi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING]
      }
    },
    events: {}
  },
  'SwapRouter01': {
    interface: new ethers.Interface(SwapRouter01Abi.abi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING]
      }
    },
    events: {}
  },
  'SwapRouter02': {
    interface: new ethers.Interface(SwapRouter02Abi.abi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING]
      }
    },
    events: {}
  }
};