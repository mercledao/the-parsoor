import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import SpokepoolAbi from "./abis/SpokePool.json";

enum CONTRACT_ENUM {
  SPOKEPOOL_CONTRACT = "SPOKEPOOL_CONTRACT",
}

enum EVENT_ENUM {
  DEPOSIT = "0xa123dc29aebf7d0c3322c8eeb5b999e859f39937950ed31056532713d0de396f",
  FILLED_DEPOSIT = "0x571749edf1d5c9599318cdbc4e28a6475d65e87fd3b2ddbe1e9a8d5e7a0f0ff7",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.SPOKEPOOL_CONTRACT]: {
    interface: new ethers.Interface(SpokepoolAbi),
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
        address: "0x5c7BCd6E7De5423a257D81B442095A1a6ced35C5",
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
      [CHAIN_ID.RED_STONE]: {
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
      [EVENT_ENUM.DEPOSIT]: {
        abi: new ethers.Interface([
          "event V3FundsDeposited(address inputToken, address outputToken, uint256 inputAmount, uint256 outputAmount, uint256 indexed destinationChainId, uint32 indexed depositId, uint32 quoteTimestamp, uint32 fillDeadline, uint32 exclusivityDeadline, address indexed depositor, address recipient, address exclusiveRelayer, bytes message)",
        ]),
      },
      [EVENT_ENUM.FILLED_DEPOSIT]: {
        abi: new ethers.Interface([
          "event FilledV3Relay(address inputToken, address outputToken, uint256 inputAmount, uint256 outputAmount, uint256 repaymentChainId, uint256 indexed originChainId, uint32 indexed depositId, uint32 fillDeadline, uint32 exclusivityDeadline, address exclusiveRelayer, address indexed relayer, address depositor, address recipient, bytes message, tuple(address updatedRecipient, bytes updatedMessage, uint256 updatedOutputAmount, uint8 fillType) relayExecutionInfo)",
        ]),
      },
    },
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
