import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import AggregationRouterV5Abi from "./abis/AggregationRouterV5.json";
import LimitOrderV4 from "./abis/LimitOrderV4.json";
import LimitOrderV2 from "./abis/LimitOrderV2.json";


enum CONTRACT_ENUM {
  AGGREGATION_ROUTER_V5_CONTRACT = "AGGREGATION_ROUTER_V5",
  LIMIT_ORDER_V4 = "LIMIT_ORDER_V4",
  LIMIT_ORDER_V2 = "LIMIT_ORDER_V2",
}

enum EVENT_ENUM {
  FILLED_ORDER = "0xb9ed0243fdf00f0545c63a0af8850c090d86bb46682baec4bf3c496814fe4f02",
  WETH_DEPOSIT = "0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c",
  WETH_WITHDRAWAL = "0x7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65"
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
      [CHAIN_ID.BASE]: {
        address: "0x1111111254EEB25477B68fb85Ed929f73A960582",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x1111111254EEB25477B68fb85Ed929f73A960582",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x1111111254EEB25477B68fb85Ed929f73A960582",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0x1111111254EEB25477B68fb85Ed929f73A960582",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x1111111254EEB25477B68fb85Ed929f73A960582",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0x1111111254EEB25477B68fb85Ed929f73A960582",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.METIS]: {
        address: "0x1111111254EEB25477B68fb85Ed929f73A960582",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZORA]: {
        address: "0x1111111254EEB25477B68fb85Ed929f73A960582",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BOBA]: {
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
      [EVENT_ENUM.WETH_DEPOSIT]: {
        abi: new ethers.Interface([
          "event Deposit (address indexed dst, uint256 wad)",
        ]),
      },
      [EVENT_ENUM.WETH_WITHDRAWAL]: {
        abi: new ethers.Interface([
          "event Withdrawal (address indexed src, uint256 wad)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.LIMIT_ORDER_V4]: {
    interface: new ethers.Interface(LimitOrderV4),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0x7F069df72b7A39bCE9806e3AfaF579E54D8CF2b9",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x119c71D3BbAC22029622cbaEc24854d3D32D2828",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x1e38Eff998DF9d3669E32f4ff400031385Bf6362",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x94Bc2a1C732BcAd7343B25af48385Fe76E08734f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x11431a89893025D2a48dCA4EddC396f8C8117187",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0x54431918cEC22932fCF97E54769F4E00f646690F",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x0F85A912448279111694F4Ba4F85dC641c54b594",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x11DEE30E710B8d4a8630392781Cc3c0046365d4c",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.METIS]: {
        address: "0x119c71D3BbAC22029622cbaEc24854d3D32D2828",
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
  [CONTRACT_ENUM.LIMIT_ORDER_V2]: {
    interface: new ethers.Interface(LimitOrderV2),
    deployments: {
      [CHAIN_ID.BSC]: {
        address: "0xe3456f4Ee65E745A44EC3bcB83D0f2529D1b84Eb",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x3ef51736315F52d568D6D2cf289419b9CfffE782",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0xb707d89D29c189421163515c59E42147371D6857",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x3ef51736315F52d568D6D2cf289419b9CfffE782",
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
