import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import VaultV2Abi from "./abis/VaultV2.json";

enum CONTRACT_ENUM {
  BALANCER_V2 = "BALANCER_V2"
}

enum EVENT_ENUM {
  SWAP = "0x2170c741c41531aec20e7c107c24eecfdd15e69c9bb0a8dd37b1840b9e0b207b"
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.BALANCER_V2]: {
    interface: new ethers.Interface(VaultV2Abi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MODE]: {
        address: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
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
      [CHAIN_ID.POLYGON]: {
        address: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      }
    },

    events: {
      [EVENT_ENUM.SWAP]: {
        abi: new ethers.Interface([
          "event Swap (bytes32 indexed poolId, address indexed tokenIn, address indexed tokenOut, uint256 amountIn, uint256 amountOut)",
        ]),
      }
    },
  }
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
