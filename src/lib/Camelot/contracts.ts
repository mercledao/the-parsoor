import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import SwapRouterAbi from "./abis/SwapRouter.json";
import CamelotYokRouterAbi from "./abis/CamelotYokRouter.json";
import RouterAbi from "./abis/Router.json";
import RouterV3Abi from "./abis/RouterV3.json";

enum CONTRACT_ENUM {
  SWAP_ROUTER = "SWAP_ROUTER",
  ROUTER = "ROUTER",
  ROUTER_V3 = "ROUTER_V3",
  CAMELOT_YOK_ROUTER = "CAMELOT_YOK_ROUTER"
}
export enum EVENT_ENUM {
  V2_SWAP = "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
  V3_SWAP = "0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67",
  YAK_SWAP = "0x9fc8352e52998db4087d5e6e1c1aafa38788e749e5d7a24f5cb230f737954402"
}
const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.SWAP_ROUTER]: {
    interface: new ethers.Interface(SwapRouterAbi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0xa555826C9a26E13238F657dB06E0A02431839Ef5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      }
    },
    events: {
      [EVENT_ENUM.V2_SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.ROUTER]: {
    interface: new ethers.Interface(RouterAbi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0xc873fEcbd354f5A56E00E710B90EF4201db2448d",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      }
    },
    events: {
      [EVENT_ENUM.V3_SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.ROUTER_V3]: {
    interface: new ethers.Interface(RouterV3Abi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0x1F721E2E82F6676FCE4eA07A5958cF098D339e18",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      }
    },
    events: {
      [EVENT_ENUM.V3_SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.CAMELOT_YOK_ROUTER]: {
    interface: new ethers.Interface(CamelotYokRouterAbi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0x99D4e80DB0C023EFF8D25d8155E0dCFb5aDDeC5E",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      }
    },
    events: {
      [EVENT_ENUM.YAK_SWAP]: {
        abi: new ethers.Interface([
          "event YakSwap (address indexed _tokenIn, address indexed _tokenOut, uint256 _amountIn, uint256 _amountOut)",
        ]),
      },
    },
  }
};

export { CONTRACT_ENUM, contracts };
