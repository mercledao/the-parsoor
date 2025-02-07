import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import AggregationRouterV5Abi from "./abis/AggregationRouterV5.json";

enum CONTRACT_ENUM {
  AGGREGATION_ROUTER_V5_CONTRACT = "AGGREGATION_ROUTER_V5",
}

// enum EVENT_ENUM {
//   DEPOSIT = "0xa123dc29aebf7d0c3322c8eeb5b999e859f39937950ed31056532713d0de396f",
//   FILLED_DEPOSIT = "0x571749edf1d5c9599318cdbc4e28a6475d65e87fd3b2ddbe1e9a8d5e7a0f0ff7",
// }

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.AGGREGATION_ROUTER_V5_CONTRACT]: {
    interface: new ethers.Interface(AggregationRouterV5Abi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0x1111111254EEB25477B68fb85Ed929f73A960582",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x1111111254EEB25477B68fb85Ed929f73A960582",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },

    events: {},
  }
};

export { CONTRACT_ENUM, contracts };
