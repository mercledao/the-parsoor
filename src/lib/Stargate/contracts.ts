import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import RouterAbi from "./abis/Router.json";
import EthRouter2Abi from "./abis/EthRouter2.json";
import WidgetSwapAbi from "./abis/WidgetSwap.json";
import PoolmEthAbi from "./abis/PoolmEth.json";
import PoolNativeAbi from "./abis/PoolNative.json";
import PoolUsdcAbi from "./abis/PoolUsdc.json";
import PoolUsdtAbi from "./abis/PoolUsdt.json"

enum CONTRACT_ENUM {
  ROUTER_CONTRACT = "ROUTER_CONTRACT",
  ETH_ROUTER_2 = "ETH_ROUTER_2",
  WIDGET_SWAP = "WIDGET_SWAP",
  POOL_NATIVE = "POOL_NATIVE",
  POOL_USDC = "POOL_USDC",
  POOL_USDT = "POOL_USDT",
  POOL_METH = "POOL_METH",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER_CONTRACT]: {
    interface: new ethers.Interface(RouterAbi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x8731d54E9D02c286767d56ac03e8037C07e01e98",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x8731d54E9D02c286767d56ac03e8037C07e01e98",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd",
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
      [CHAIN_ID.BASE]: {
        address: "0x45f1A95A4D3f3836523F5c83673c797f4d4d263B",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.KAVA]: {
        address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },

    events: {},
  },
  [CONTRACT_ENUM.ETH_ROUTER_2]: {
    interface: new ethers.Interface(EthRouter2Abi),
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
  [CONTRACT_ENUM.WIDGET_SWAP]: {
    interface: new ethers.Interface(WidgetSwapAbi),
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
      [CHAIN_ID.KAVA]: {
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
  [CONTRACT_ENUM.POOL_NATIVE]: {
    interface: new ethers.Interface(PoolNativeAbi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x77b2043768d28E9C9aB44E1aBfC95944bcE57931",
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
      [CHAIN_ID.KAVA]: {
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
  [CONTRACT_ENUM.POOL_USDC]: {
    interface: new ethers.Interface(PoolUsdcAbi),
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
      [CHAIN_ID.KAVA]: {
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
  [CONTRACT_ENUM.POOL_USDT]: {
    interface: new ethers.Interface(PoolUsdtAbi),
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
      [CHAIN_ID.KAVA]: {
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
  [CONTRACT_ENUM.POOL_METH]: {
    interface: new ethers.Interface(PoolmEthAbi),
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
      [CHAIN_ID.KAVA]: {
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

export { CONTRACT_ENUM, contracts };
