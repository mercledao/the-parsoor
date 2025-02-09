import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import RouterV1 from "./abis/RouterV1.json";
import RouterV2 from "./abis/RouterV2.json";

enum CONTRACT_ENUM {
  ROUTER_V1 = "ROUTER_V1",
  ROUTER_V2 = "ROUTER_V2",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER_V1]: {
    interface: new ethers.Interface(RouterV1),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x4f37A9d177470499A2dD084621020b023fcffc1F",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x2191718CD32d02B8E60BAdFFeA33E4B5DD9A0A0D",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xbBF1EE38152E9D8e3470Dc47947eAa65DcA94913",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x0DCDED3545D565bA3B19E683431381007245d983",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0x0DCDED3545D565bA3B19E683431381007245d983",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x0DCDED3545D565bA3B19E683431381007245d983",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x0DCDED3545D565bA3B19E683431381007245d983",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xA72C85C258A81761433B4e8da60505Fe3Dd551CC",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0x4f37A9d177470499A2dD084621020b023fcffc1F",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x7C915390e109CA66934f1eB285854375D1B127FA",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SONIC]: {
        address: "0x5eeE3091f747E60a045a2E715a4c71e600e31F6E",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.TAIKO]: {
        address: "0xd2002373543Ce3527023C75e7518C274A51ce712",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x0DCDED3545D565bA3B19E683431381007245d983",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {},
  },
};

export { CONTRACT_ENUM, contracts };
