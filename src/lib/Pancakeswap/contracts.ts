import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import SmartRouterV3Abi from "./abis/SmartRouterV3.json";
import SwapRouterV3Abi from "./abis/SwapRouterV3.json";
import RouterV2Abi from "./abis/RouterV2.json";

enum CONTRACT_ENUM {
  SMART_ROUTER_V3 = "SMART_ROUTER_V3",
  SWAP_ROUTER_V3 = "SWAP_ROUTER_V3",
  ROUTER_V2 = "ROUTER_V2"
}

enum EVENT_ENUM {
  SWAP = "0x19b47279256b2a23a1665c810c8d55a1758940ee09377d4f8d26497a3577dc83",
  FILLED_DEPOSIT = "0x571749edf1d5c9599318cdbc4e28a6475d65e87fd3b2ddbe1e9a8d5e7a0f0ff7",
  SWAP_V2 = "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.SMART_ROUTER_V3]: {
    interface: new ethers.Interface(SmartRouterV3Abi),
    deployments: {
      [CHAIN_ID.BSC]: {
        address: "0x13f4EA83D0bd40E75C8222255bc855a974568Dd4",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x32226588378236Fd0c7c4053999F88aC0e5cAc77",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x13f4EA83D0bd40E75C8222255bc855a974568Dd4",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0xf8b59f3c3Ab33200ec80a8A58b2aA5F5D2a8944C",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },

    events: {
      [EVENT_ENUM.SWAP]: {
        abi: new ethers.Interface([
          "event Swap (address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick, uint128 protocolFeesToken0, uint128 protocolFeesToken1)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.SWAP_ROUTER_V3]: {
    interface: new ethers.Interface(SwapRouterV3Abi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x1b81D678ffb9C0263b24A97847620C99d213eB14",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x1b81D678ffb9C0263b24A97847620C99d213eB14",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x1b81D678ffb9C0263b24A97847620C99d213eB14",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x1b81D678ffb9C0263b24A97847620C99d213eB14",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0xD70C70AD87aa8D45b8D59600342FB3AEe76E3c68",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x1b81D678ffb9C0263b24A97847620C99d213eB14",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x1b81D678ffb9C0263b24A97847620C99d213eB14",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.SWAP]: {
        abi: new ethers.Interface([
          "event Swap (address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick, uint128 protocolFeesToken0, uint128 protocolFeesToken1)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.ROUTER_V2]: {
    interface: new ethers.Interface(RouterV2Abi),
    deployments: {
      [CHAIN_ID.BSC]: {
        address: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xEfF92A263d31888d860bD50809A8D171709b7b1c",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x1b81D678ffb9C0263b24A97847620C99d213eB14",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x5aEaF2883FBf30f3D62471154eDa3C0c1b05942d",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.SWAP_V2]: {
        abi: new ethers.Interface([
          "event Swap (address indexed sender, uint256 amount0In, uint256 amount1In, uint256 amount0Out, uint256 amount1Out, address indexed to)",
        ]),
      },
    },
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
