import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IChainContractDefinitions } from "../../types";
import L1StandardBridgeAbi from "./abis/L1StandardBridge.json";
import L2StandardBridgeAbi from "./abis/L2StandardBridge.json";

enum CONTRACT_ENUM {
  L1_STANDARD_BRIDGE = "L1_STANDARD_BRIDGE",
  L2_STANDARD_BRIDGE = "L2_STANDARD_BRIDGE",
}

enum EVENT_ENUM {
  BRIDGE = "0x7ff126db8024424bbfd9826e8ab82ff59136289ea440b04b39a0df1b03b9cabf",
}

const contracts: IChainContractDefinitions = {
  [CONTRACT_ENUM.L1_STANDARD_BRIDGE]: {
    interface: new ethers.Interface(L1StandardBridgeAbi),
    deployments: {
      [CHAIN_ID.OPTIMISM]: {
        address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZORA]: {
        address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MODE]: {
        address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.RED_STONE]: {
        address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },

    events: {
      [EVENT_ENUM.BRIDGE]: {
        abi: new ethers.Interface([
          "event ERC20BridgeInitiated(address inputToken, address outputToken, uint256 inputAmount, uint256 outputAmount, uint256 indexed destinationChainId, uint32 indexed depositId, uint32 quoteTimestamp, uint32 fillDeadline, uint32 exclusivityDeadline, address indexed depositor, address recipient, address exclusiveRelayer, bytes message)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.L2_STANDARD_BRIDGE]: {
    interface: new ethers.Interface(L2StandardBridgeAbi),
    deployments: {
      [CHAIN_ID.OPTIMISM]: {
        address: "0x4200000000000000000000000000000000000010",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x4200000000000000000000000000000000000010",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZORA]: {
        address: "0x4200000000000000000000000000000000000010",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MODE]: {
        address: "0x4200000000000000000000000000000000000010",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x4200000000000000000000000000000000000010",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.RED_STONE]: {
        address: "0x4200000000000000000000000000000000000010",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },

    events: {
      [EVENT_ENUM.BRIDGE]: {
        abi: new ethers.Interface([
          "event ERC20BridgeInitiated (address indexed localToken, address indexed remoteToken, address indexed from, address to, uint256 amount, bytes extraData)",
        ]),
      },
    },
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
