import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import AugustusV5Abi from "./abis/AugustusV5.json";
import AugustusV6Abi from "./abis/AugustusV6.json"

enum CONTRACT_ENUM {
  AUGUSTUS_V5 = "AUGUSTUS_V5",
  AUGUSTUS_V6 = "AUGUSTUS_V6.2"
}

enum EVENT_ENUM {
  SWAPPED_V3 = "0xe00361d207b252a464323eb23d45d42583e391f2031acdd2e9fa36efddd43cb0",
  SWAPPED_DIRECT = "0xd2d73da2b5fd52cd654d8fd1b514ad57355bad741de639e3a1c3a20dd9f17347",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.AUGUSTUS_V5]: {
    interface: new ethers.Interface(AugustusV5Abi),
    deployments: {
      [CHAIN_ID.AVALANCHE]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x59C7C832e96D2568bea6db468C1aAdcbbDa08A52",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x7E63A5f1a8F0B4d0934B2f2327DAED3F6bb2ee75",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON_ZK]: {
        address: "0xb83b554730d29ce4cb55bb42206c3e2c03e4a40a",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.SWAPPED_V3]: {
        abi: new ethers.Interface([
          "event SwappedV3 (bytes16 uuid, address partner, uint256 feePercent, address initiator, address indexed beneficiary, address indexed srcToken, address indexed destToken, uint256 srcAmount, uint256 receivedAmount, uint256 expectedAmount)",
        ]),
      },
      [EVENT_ENUM.SWAPPED_DIRECT]: {
        abi: new ethers.Interface([
          "event SwappedDirect (bytes16 uuid, address partner, uint256 feePercent, address initiator, uint8 kind, address indexed beneficiary, address indexed srcToken, address indexed destToken, uint256 srcAmount, uint256 receivedAmount, uint256 expectedAmount)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.AUGUSTUS_V6]: {
    interface: new ethers.Interface(AugustusV6Abi),
    deployments: {
      [CHAIN_ID.AVALANCHE]: {
        address: "0x6A000F20005980200259B80c5102003040001068",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x6A000F20005980200259B80c5102003040001068",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x6A000F20005980200259B80c5102003040001068",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x59C7C832e96D2568bea6db468C1aAdcbbDa08A52",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x7E63A5f1a8F0B4d0934B2f2327DAED3F6bb2ee75",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON_ZK]: {
        address: "0xb83b554730d29ce4cb55bb42206c3e2c03e4a40a",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.SWAPPED_V3]: {
        abi: new ethers.Interface([
          "event SwappedV3 (bytes16 uuid, address partner, uint256 feePercent, address initiator, address indexed beneficiary, address indexed srcToken, address indexed destToken, uint256 srcAmount, uint256 receivedAmount, uint256 expectedAmount)",
        ]),
      },
      [EVENT_ENUM.SWAPPED_DIRECT]: {
        abi: new ethers.Interface([
          "event SwappedDirect (bytes16 uuid, address partner, uint256 feePercent, address initiator, uint8 kind, address indexed beneficiary, address indexed srcToken, address indexed destToken, uint256 srcAmount, uint256 receivedAmount, uint256 expectedAmount)",
        ]),
      },
    },
  }
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
