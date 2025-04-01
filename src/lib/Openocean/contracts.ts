import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import OpenOceanExchangeAbi from "./abis/OpenOceanExchange.json";

export enum CONTRACT_ENUM {
  OPENOCEAN_EXCHANGE = "OpenOceanExchange",
}

export enum EVENT_ENUM {
  SWAP = "0x76af224a143865a50b41496e1a73622698692c565c1214bc862f18e22d829c5e",
}

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.OPENOCEAN_EXCHANGE]: {
    interface: new ethers.Interface(OpenOceanExchangeAbi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTA]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.HARMONY]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MODE]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.METIS]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.CELO]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AURORA]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SONIC]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON_ZK]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.SWAP]: {
        abi: new ethers.Interface([
          "event Swapped(address indexed sender, address indexed srcToken, address indexed dstToken, address dstReceiver, uint256 amount, uint256 spentAmount, uint256 returnAmount, uint256 minReturnAmount, uint256 guaranteedAmount, address referrer)",
        ]),
      },
    },
  },
};
