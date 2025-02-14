import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import SwapRouterAbi from "./abis/SwapRouter.json";
import ThrustRouterAbi from "./abis/ThrustRouter.json";
import ThrustRouter2Abi from "./abis/ThrustRouter2.json";

enum CONTRACT_ENUM {
  THRUSTER_ROUTER = "THRUSTER_ROUTER",
  THRUSTER_ROUTER_2 = "THRUSTER_ROUTER_2",
  SWAP_ROUTER = "SWAP_ROUTER"
}
export enum EVENT_ENUM {
  V2_SWAP = "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
  V3_SWAP = "0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67",
}
const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.THRUSTER_ROUTER]: {
    interface: new ethers.Interface(ThrustRouterAbi),
    deployments: {
      [CHAIN_ID.BLAST]: {
        address: "0x98994a9A7a2570367554589189dC9772241650f6",
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
  [CONTRACT_ENUM.THRUSTER_ROUTER_2]: {
    interface: new ethers.Interface(ThrustRouter2Abi),
    deployments: {
      [CHAIN_ID.BLAST]: {
        address: "0x44889b52b71E60De6ed7dE82E2939fcc52fB2B4E",
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
  [CONTRACT_ENUM.SWAP_ROUTER]: {
    interface: new ethers.Interface(SwapRouterAbi),
    deployments: {
      [CHAIN_ID.BLAST]: {
        address: "0x337827814155ECBf24D20231fCA4444F530C0555",
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
  }
};

export { CONTRACT_ENUM, contracts };
