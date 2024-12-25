import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import SpokepoolAbi from "./abis/SpokePool.json";

enum CONTRACT_ENUM {
  SPOKEPOOL_CONTRACT = "SPOKEPOOL_CONTRACT",
}

enum EVENT_ENUM {
  FILLED_DEPOSIT = "0x571749edf1d5c9599318cdbc4e28a6475d65e87fd3b2ddbe1e9a8d5e7a0f0ff7"
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
      }
    },

    events: {
      [EVENT_ENUM.FILLED_DEPOSIT]: {
        abi: new ethers.Interface([
          "event FilledV3Relay(address inputToken, address outputToken, uint256 inputAmount, uint256 outputAmount, uint256 repaymentChainId, uint256 indexed originChainId, uint32 indexed depositId, uint32 fillDeadline, uint32 exclusivityDeadline, address exclusiveRelayer, address indexed relayer, address depositor, address recipient, bytes message, tuple(address updatedRecipient, bytes updatedMessage, uint256 updatedOutputAmount, uint8 fillType) relayExecutionInfo)",
        ]),
      },
    },
  }
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
