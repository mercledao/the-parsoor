import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import RouterV1Abi from "./abis/RouterV1.json";
import RouterEthV1Abi from "./abis/RouterEthV1.json";
import WidgetSwapV1Abi from "./abis/WidgetSwapV1.json";

enum CONTRACT_ENUM {
  ROUTER_V1 = "ROUTER_V1",
  ETH_ROUTER_V1 = "ETH_ROUTER_V1",
  WIDGET_SWAP_V1 = "WIDGET_SWAP_V1",
}

enum EVENT_ENUM {
  SWAP = "0x34660fc8af304464529f48a778e03d03e4d34bcd5f9b6f0cfbf3cd238c642f7f",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER_V1]: {
    interface: new ethers.Interface(RouterV1Abi),
    deployments: {
      [CHAIN_ID.BSC]: {
        address: "0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x8731d54E9D02c286767d56ac03e8037C07e01e98",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.METIS]: {
        address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
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
      [CHAIN_ID.BASE]: {
        address: "0x45f1A95A4D3f3836523F5c83673c797f4d4d263B",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      }
    },

    events: {},
  },
  [CONTRACT_ENUM.ETH_ROUTER_V1]: {
    interface: new ethers.Interface(RouterEthV1Abi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x150f94B44927F078737562f0fcF3C95c01Cc2376",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0xbf22f0f184bCcbeA268dF387a49fF5238dD23E40",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xB49c4e680174E331CB0A7fF3Ab58afC9738d5F8b",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x50B6EbC2103BFEc165949CC946d739d5650d7ae4",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x8731d54E9D02c286767d56ac03e8037C07e01e98",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {},
  },
  [CONTRACT_ENUM.WIDGET_SWAP_V1]: {
    interface: new ethers.Interface(WidgetSwapV1Abi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.METIS]: {
        address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0x06D538690AF257Da524f25D0CD52fD85b1c2173E",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {},
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
