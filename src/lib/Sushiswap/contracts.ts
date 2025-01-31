import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import RouteProcessor5Abi from "./abis/RouteProcessor5.json";

enum CONTRACT_ENUM {
  SUSHISWAP_CONTRACT = "SUSHISWAP_CONTRACT",
}

enum EVENT_ENUM {
  ROUTE = "0x2db5ddd0b42bdbca0d69ea16f234a870a485854ae0d91f16643d6f317d8b8994",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.SUSHISWAP_CONTRACT]: {
    interface: new ethers.Interface(RouteProcessor5Abi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x9e55e562D40FD01f38cD4057e632352fE0758F16",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTA]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MODE]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.TAIKO]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.HARMONY]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BOBA]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SONIC]: {
        address: "0xf2614A233c7C3e7f08b1F887Ba133a13f1eb2c55",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.ROUTE]: {
        abi: new ethers.Interface([
          "event Route(address indexed from, address to, address indexed tokenIn, address indexed tokenOut, uint256 amountIn, uint256 amountOutMin, uint256 amountOut)",
        ]),
      },
    },
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
