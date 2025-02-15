import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import CrocSwapDexAbi from "./abis/CrocSwapDex.json";
import CrocSwapRouterAbi from "./abis/CrocSwapRouter.json";

enum CONTRACT_ENUM {
  CROC_SWAP_ROUTER = "CROC_SWAP_ROUTER",
  CROC_SWAP_DEX = "CROC_SWAP_DEX"
}
export enum EVENT_ENUM {
  V2_SWAP = "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
  V3_SWAP = "0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67",
}
const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.CROC_SWAP_DEX]: {
    interface: new ethers.Interface(CrocSwapRouterAbi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0xAaAaAAAaA24eEeb8d57D431224f73832bC34f688",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0xaAaaaAAAFfe404EE9433EEf0094b6382D81fb958",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SWELL]: {
        address: "0xaAAaAaaa82812F0a1f274016514ba2cA933bF24D",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0xaaaaAAAACB71BF2C8CaE522EA5fa455571A74106",
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
  [CONTRACT_ENUM.CROC_SWAP_ROUTER]: {
    interface: new ethers.Interface(CrocSwapDexAbi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x533E164ded63f4c55E83E1f409BDf2BaC5278035",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0xaab17419F062bB28CdBE82f9FC05E7C47C3F6194",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SWELL]: {
        address: "0x983a06261aE018FEFA16e1E95c7fda13a2eB1038",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0xfB5f26851E03449A0403Ca945eBB4201415fd1fc",
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
