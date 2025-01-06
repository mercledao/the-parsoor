import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import AggregationRouterV5Abi from "./abis/AggregationRouterV5.json";

enum CONTRACT_ENUM {
  AGGREGATION_ROUTER_V5_CONTRACT = "AGGREGATION_ROUTER_V5",
}

enum EVENT_ENUM {
  FILLED_ORDER = "0xb9ed0243fdf00f0545c63a0af8850c090d86bb46682baec4bf3c496814fe4f02",
}

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

    events: {
      [EVENT_ENUM.FILLED_ORDER]: {
        abi: new ethers.Interface([
          "event OrderFilled (address indexed maker, bytes32 orderHash, uint256 remaining)",
        ]),
      },
    },
  },
};

export { contracts, CONTRACT_ENUM, EVENT_ENUM };
