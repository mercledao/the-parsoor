import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import Proxy02V2Abi from "./abis/Proxy02V2.json"
import ProxyRouteAbi from "./abis/ProxyRoute.json"
import FeeRouteProxyWidgetAbi from "./abis/FeeRouteProxyWidget.json"
import FeeRouteProxyAbi from "./abis/FeeRouteProxyWidget.json"

enum CONTRACT_ENUM {
  PROXY_02_V2 = "PROXY_02_V2",
  PROXY_ROUTE = "PROXY_ROUTE",
  FEE_ROUTE_PROXY_WIDGET = "FEE_ROUTE_PROXY_WIDGET",
  FEE_ROUTE_PROXY = "FEE_ROUTE_PROXY"
}
enum EVENT_ENUM {
  ORDER_HISTORY = "0x92ceb067a9883c85aba061e46b9edf505a0d6e81927c4b966ebed543a5221787",
}
const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.PROXY_02_V2]: {
    interface: new ethers.Interface(Proxy02V2Abi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x4f37A9d177470499A2dD084621020b023fcffc1F",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x88CBf433471A0CD8240D2a12354362988b4593E5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xa356867fDCEa8e71AEaF87805808803806231FdC",
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
    events: {
      [EVENT_ENUM.ORDER_HISTORY]: {
        abi: new ethers.Interface([
          "event OrderHistory (address fromToken, address toToken, address sender, uint256 fromAmount, uint256 returnAmount)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.PROXY_ROUTE]: {
    interface: new ethers.Interface(ProxyRouteAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x4f37A9d177470499A2dD084621020b023fcffc1F",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x3B6067D4CAa8A14c63fdBE6318F27A0bBc9F9237",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x16C6521Dff6baB339122a0FE25a9116693265353",
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
      }
    },
    events: {
      [EVENT_ENUM.ORDER_HISTORY]: {
        abi: new ethers.Interface([
          "event OrderHistory (address fromToken, address toToken, address sender, uint256 fromAmount, uint256 returnAmount)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.FEE_ROUTE_PROXY_WIDGET]: {
    interface: new ethers.Interface(FeeRouteProxyWidgetAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x4f37A9d177470499A2dD084621020b023fcffc1F",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x056FcE6B76AF3050F54B71Fc9B5fcb7C387BfC1A",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x16C6521Dff6baB339122a0FE25a9116693265353",
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
      }
    },
    events: {
      [EVENT_ENUM.ORDER_HISTORY]: {
        abi: new ethers.Interface([
          "event OrderHistory (address fromToken, address toToken, address sender, uint256 fromAmount, uint256 returnAmount)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.FEE_ROUTE_PROXY]: {
    interface: new ethers.Interface(FeeRouteProxyAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x4f37A9d177470499A2dD084621020b023fcffc1F",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x69716E51E3F8Bec9c3D4E1bB46396384AE11C594",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x16C6521Dff6baB339122a0FE25a9116693265353",
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
      }
    },
    events: {
      [EVENT_ENUM.ORDER_HISTORY]: {
        abi: new ethers.Interface([
          "event OrderHistory (address fromToken, address toToken, address sender, uint256 fromAmount, uint256 returnAmount)",
        ]),
      },
    },
  }
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
