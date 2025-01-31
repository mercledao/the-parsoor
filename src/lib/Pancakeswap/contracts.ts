import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import SmartRouterV3Abi from "./abis/SmartRouterV3.json";
import SwapRouterV3Abi from "./abis/SwapRouterV3.json";

enum CONTRACT_ENUM {
  SMART_ROUTER_V3 = "SMART_ROUTER_V3",
  SWAP_ROUTER_V3 = "SWAP_ROUTER_V3",
}

enum EVENT_ENUM {
  SWAP = "0x19b47279256b2a23a1665c810c8d55a1758940ee09377d4f8d26497a3577dc83",
  FILLED_DEPOSIT = "0x571749edf1d5c9599318cdbc4e28a6475d65e87fd3b2ddbe1e9a8d5e7a0f0ff7",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.SMART_ROUTER_V3]: {
    interface: new ethers.Interface(SmartRouterV3Abi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x09aea4b2242abC8bb4BB78D537A67a245A7bEC64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0xe35e9842fceaca96570b734083f4a58e8f7c5f2a",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x13f4EA83D0bd40E75C8222255bc855a974568Dd4",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x6f26Bf09B1C792e3228e5467807a900A503c0281",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0x2D509190Ed0172ba588407D4c2df918F955Cc6E1",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0xE0B015E54d54fc84a6cB9B666099c46adE9335FF",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ALEPH_ZERO]: {
        address: "0x13fDac9F9b4777705db45291bbFF3c972c6d1d97",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x7E63A5f1a8F0B4d0934B2f2327DAED3F6bb2ee75",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LISK]: {
        address: "0x9552a0a6624A23B848060AE5901659CDDa1f83f8",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MODE]: {
        address: "0x3baD7AD0728f9917d1Bf08af5782dCbD516cDd96",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x9295ee1d8C5b022Be115A2AD3c30C72E34e7F096",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.READ_STONE]: {
        address: "0x13fDac9F9b4777705db45291bbFF3c972c6d1d97",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0x3bad7ad0728f9917d1bf08af5782dcbd516cdd96",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.WORLDCHAIN]: {
        address: "0x09aea4b2242abC8bb4BB78D537A67a245A7bEC64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZORA]: {
        address: "0x13fDac9F9b4777705db45291bbFF3c972c6d1d97",
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
        address: "0x09aea4b2242abC8bb4BB78D537A67a245A7bEC64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0xe35e9842fceaca96570b734083f4a58e8f7c5f2a",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x1b81D678ffb9C0263b24A97847620C99d213eB14",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x6f26Bf09B1C792e3228e5467807a900A503c0281",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0x2D509190Ed0172ba588407D4c2df918F955Cc6E1",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0xE0B015E54d54fc84a6cB9B666099c46adE9335FF",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ALEPH_ZERO]: {
        address: "0x13fDac9F9b4777705db45291bbFF3c972c6d1d97",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x7E63A5f1a8F0B4d0934B2f2327DAED3F6bb2ee75",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LISK]: {
        address: "0x9552a0a6624A23B848060AE5901659CDDa1f83f8",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MODE]: {
        address: "0x3baD7AD0728f9917d1Bf08af5782dCbD516cDd96",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x9295ee1d8C5b022Be115A2AD3c30C72E34e7F096",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.READ_STONE]: {
        address: "0x13fDac9F9b4777705db45291bbFF3c972c6d1d97",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0x3bad7ad0728f9917d1bf08af5782dcbd516cdd96",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.WORLDCHAIN]: {
        address: "0x09aea4b2242abC8bb4BB78D537A67a245A7bEC64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZORA]: {
        address: "0x13fDac9F9b4777705db45291bbFF3c972c6d1d97",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },

    events: {},
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
