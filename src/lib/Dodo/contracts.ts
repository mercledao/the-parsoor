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
      [CHAIN_ID.AURORA]: {
        address: "0xd9deC7c3C06e62a4c1BeEB07CadF568f496b14c2",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x88CBf433471A0CD8240D2a12354362988b4593E5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x2cD18557E14aF72DAA8090BcAA95b231ffC9ea26",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x4CAD0052524648A7Fa2cfE279997b00239295F33",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xa356867fDCEa8e71AEaF87805808803806231FdC",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BOBA]: {
        address: "0x55793C2c8A796cCE00EF2D1a86CCA2E0399BF285",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x4CAD0052524648A7Fa2cfE279997b00239295F33",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0xe49781e6186214d88aACFd9eBc8cE40E3CDc066D",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0xe7979E2F3e77196Bb2AB206eaa67Ea278A3E33A2",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTA]: {
        address: "0x2F86652dAEF5f1728c54191C955F065Ec3C188c7",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MOONRIVER]: {
        address: "0xd9deC7c3C06e62a4c1BeEB07CadF568f496b14c2",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x45894C062E6f4E58B257e0826675355305dfef0d",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xfD9D2827AD469B72B69329dAA325ba7AfbDb3C98",
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
      [CHAIN_ID.AURORA]: {
        address: "0x0125Cd41312F72a0774112Ca639D65A2C02e3627",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x3B6067D4CAa8A14c63fdBE6318F27A0bBc9F9237",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x409E377A7AfFB1FD3369cfc24880aD58895D1dD9",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BOBA]: {
        address: "0x0fe261aeE0d1C4DFdDee4102E82Dd425999065F4",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xa2398842F37465f89540430bDC00219fA9E4D28a",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x6B3D817814eABc984d51896b1015C0b89E9737Ca",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MOONRIVER]: {
        address: "0x0125Cd41312F72a0774112Ca639D65A2C02e3627",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x53eE28b9F0A6416857C1e7503032E27e80F52DA0",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x7950dC01542eFE1c03aea610472e3b565B53f64a",
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
      [CHAIN_ID.AURORA]: {
        address: "0x0218E24dd47f9a1D05418eAa5B9cEDB13Ca48492",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x056FcE6B76AF3050F54B71Fc9B5fcb7C387BfC1A",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x8b09DB11ea380d6454D2592D334FFC319ce6EF3E",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x3A7Bc5F9E41356728f037f17D88c642EE46d1Aaa",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BOBA]: {
        address: "0xfcA520C94078b65F8237d4F566c438a9468917A1",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x5977F12664b4E634dFbAAD0ad4a6a81057254dA8",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x701Ac6fAD7850956f966a85655348ac1B7c93368",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x70B9C57E1fF24761C1C3ced57Ddae9A3F3570698",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTA]: {
        address: "0x200D866Edf41070DE251Ef92715a6Ea825A5Eb80",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0xB4E598688eC724DD00a8944E7c7b259BbB992c61",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MOONRIVER]: {
        address: "0x2144BF2003bFd9Aa0950716333fBb5B7A1Caeda4",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x8b09DB11ea380d6454D2592D334FFC319ce6EF3E",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x3a64Ec3606FF7310E8fAd6FcC008e39705fB496d",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0xf0512872fEc0173d1d99c2dd8CDCb770054b675b",
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
      [CHAIN_ID.AURORA]: {
        address: "0x7449Cd63C2b1A06C36945eD83f0626D303781B6E",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x69716E51E3F8Bec9c3D4E1bB46396384AE11C594",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x8b09DB11ea380d6454D2592D334FFC319ce6EF3E",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BOBA]: {
        address: "0x64842A3EbC09bB69429c1a34ae181375fea5f17F",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xFe837A3530dD566401d35beFCd55582AF7c4dfFC",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x3a64Ec3606FF7310E8fAd6FcC008e39705fB496d",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x46AFE01D758a46d64c7d8E0791314D5db3E2e683",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x0343C5757Fb98aD9eF39824e08B852aF61C71c64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x03e89fC55A5ad0531576E5a502c4CA52c8bf391B",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTA]: {
        address: "0x2933c0374089D7D98BA0C71c5E02E1A0e09deBEE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0x70B9C57E1fF24761C1C3ced57Ddae9A3F3570698",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MOONRIVER]: {
        address: "0x003B18357460e789e711849749A793c430d14f97",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x3a64Ec3606FF7310E8fAd6FcC008e39705fB496d",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0x4e998615aD430C1cA46A69d813edE6EB3EC55eDb",
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
