import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import RouterAbi from "./abis/Router.json";
import SwapRouterAbi from "./abis/SwapRouter.json";
import UniversalRouterAbi from "./abis/UniversalRouter.json";
enum CONTRACT_ENUM {
   ROUTER_CONTRACT = "ROUTER_CONTRACT",
   SWAP_ROUTER_CONTRACT = "SWAP_ROUTER_CONTRACT",
   UNIVERSAL_ROUTER_CONTRACT = "UNIVERSAL_ROUTER_CONTRACT",
}

enum EVENT_ENUM {
  ROUTER_SWAP = "0xb3e2773606abfd36b5bd91394b3a54d1398336c65005baf7bf7a05efeffaf75b"
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER_CONTRACT]: {
    interface: new ethers.Interface(RouterAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },

    events: {
      [EVENT_ENUM.ROUTER_SWAP]: {
        abi: new ethers.Interface([
          "event Swap (address indexed sender, address indexed to, uint256 amount0In, uint256 amount1In, uint256 amount0Out, uint256 amount1Out)",
        ]),
      }
    },
  },
  [CONTRACT_ENUM.SWAP_ROUTER_CONTRACT]: {
    interface: new ethers.Interface(SwapRouterAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0xBE6D8f0d05cC4be24d5167a3eF062215bE6D18a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },

    events: {
      [EVENT_ENUM.ROUTER_SWAP]: {
        abi: new ethers.Interface([
          "event V3FundsDeposited(address inputToken, address outputToken, uint256 inputAmount, uint256 outputAmount, uint256 indexed destinationChainId, uint32 indexed depositId, uint32 quoteTimestamp, uint32 fillDeadline, uint32 exclusivityDeadline, address indexed depositor, address recipient, address exclusiveRelayer, bytes message)",
        ]),
      }
    },
  },
  [CONTRACT_ENUM.UNIVERSAL_ROUTER_CONTRACT]: {
    interface: new ethers.Interface(UniversalRouterAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x6Cb442acF35158D5eDa88fe602221b67B400Be3E",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },

    events: {
      [EVENT_ENUM.ROUTER_SWAP]: {
        abi: new ethers.Interface([
          "event V3FundsDeposited(address inputToken, address outputToken, uint256 inputAmount, uint256 outputAmount, uint256 indexed destinationChainId, uint32 indexed depositId, uint32 quoteTimestamp, uint32 fillDeadline, uint32 exclusivityDeadline, address indexed depositor, address recipient, address exclusiveRelayer, bytes message)",
        ]),
      }
    },
  }
};

export enum COMMAND_ENUM {
  // V3 Swap Commands
  V3_SWAP_EXACT_IN = 0x00,
  V3_SWAP_EXACT_OUT = 0x01,

  // V2 Swap Commands
  V2_SWAP_EXACT_IN = 0x08,
  V2_SWAP_EXACT_OUT = 0x09,
}

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
