import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import SwapRouterAbi from "./abis/SwapRouter.json";
import RouterV2Abi from "./abis/RouterV2.json";

enum CONTRACT_ENUM {
  SWAP_ROUTER = "SWAP_ROUTER",
  ROUTER_V2 = "ROUTER_V2"
}
export enum EVENT_ENUM {
  V2_SWAP = "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
  V3_SWAP = "0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67",
}
const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.SWAP_ROUTER]: {
    interface: new ethers.Interface(SwapRouterAbi),
    deployments: {
      [CHAIN_ID.LINEA]: {
        address: "0x3921e8cb45B17fC029A0a6dE958330ca4e583390",
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
  [CONTRACT_ENUM.ROUTER_V2]: {
    interface: new ethers.Interface(RouterV2Abi),
    deployments: {
      [CHAIN_ID.LINEA]: {
        address: "0x610D2f07b7EdC67565160F587F37636194C34E74",
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
};

export { CONTRACT_ENUM, contracts };
