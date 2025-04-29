import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import SwapRouter02Abi from "./abis/SwapRouter02.json";
import UniswapV2RouterAbi from "./abis/UniswapV2Router.json";
import UniswapUniversalRouterAbi from "./abis/UniswapUniversalRouter.json";

export enum CONTRACT_ENUM {
  ROUTER_V2 = "RouterV2",
 // ROUTER_V3_01 = "RouterV3_01",
  ROUTER_V3_02 = "RouterV3_02",
  UNIVERSAL_ROUTER = "UniversalRouter",
}

export enum EVENT_ENUM {
  // V2 Events
  V2_SWAP = "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",

  // V3 Events
  V3_SWAP = "0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67",
}

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER_V2]: {
    interface: new ethers.Interface(UniswapV2RouterAbi),
    deployments: {
      [CHAIN_ID.ABSTRACT]: {
        address: "0xad1eCa41E6F772bE3cb5A48A6141f9bcc1AF9F7c",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
    //   [EVENT_ENUM.V2_SWAP]: {
    //     abi: new ethers.Interface([
    //       "event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)",
    //     ]),
    //   },
    },
  },

  [CONTRACT_ENUM.UNIVERSAL_ROUTER]: {
    interface: new ethers.Interface([
      ...UniswapUniversalRouterAbi,
      "function execute(bytes commands, bytes[] inputs) payable",
      "function execute(bytes commands, bytes[] inputs, uint256 deadline) payable",
    ]),
    deployments: {
      [CHAIN_ID.ABSTRACT]: {
        address: "0xE1b076ea612Db28a0d768660e4D81346c02ED75e",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.V3_SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.ROUTER_V3_02]: {
    interface: new ethers.Interface(SwapRouter02Abi),
    deployments: {
      [CHAIN_ID.ABSTRACT]: {
        address: "0x7712FA47387542819d4E35A23f8116C90C18767C",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.V3_SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)",
        ]),
      },
    },
  },
};
