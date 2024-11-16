import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import LimitOrderRouterAbi from "./abis/LimitOrderRouter.json";
import OdosRouterV1Abi from "./abis/V1Router.json";
import OdosRouterV2Abi from "./abis/V2Router.json";

enum CONTRACT_ENUM {
  V2_ROUTER = "OdosRouterV2",

  V1_ROUTER = "OdosRouterV1",

  LIMIT_ORDER_ROUTER = "OdosLimitOrderRouter",
}

enum EVENT_ENUM {
  V2_SINGLE_SWAP = "0x823eaf01002d7353fbcadb2ea3305cc46fa35d799cb0914846d185ac06f8ad05",
  V2_MULTI_SWAP = "0x7d7fb03518253ae01913536628b78d6d82e63e19b943aab5f4948356021259be",

  V1_SWAP = "0xe87568fe5934cb7524b96e16b225ee2e7e738ccbb706c7bee52ce07bf0360e69",

  LIMIT_ORDER_FILL = "0x81af66102905420f059278ff929ed6b30795eb7e25505c3418616dd28e1b4da6",
  MULTI_LIMIT_ORDER_FILL = "0xcbd6837778f636c87f1092746d97e700ff35f92362632ca761cfbbef7f5a4d2b",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.V2_ROUTER]: {
    interface: new ethers.Interface(OdosRouterV2Abi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0xCf5540fFFCdC3d510B18bFcA6d2b9987b0772559",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0xa669e7A0d4b3e4Fa48af2dE86BD4CD7126Be4e13",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x19cEeAd7105607Cd444F5ad10dd51356436095a1",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xCa423977156BB05b13A2BA3b76Bc5419E2fE9680",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x2d8879046f1559E53eb052E949e9544bCB72f414",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0xbFe03C9E20a9Fc0b37de01A172F207004935E0b1",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0xD9F4e85489aDCD0bAF0Cd63b4231c6af58c26745",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x4bBa932E9792A2b917D47830C93a9BC79320E4f7",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MODE]: {
        address: "0x7E15EB462cdc67Cf92Af1f7102465a8F8c784874",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x4E3288c9ca110bCC82bf38F09A7b425c095d92Bf ",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x88de50B233052e4Fb783d4F6db78Cc34fEa3e9FC",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x89b8AA89FDd0507a99d334CBe3C808fAFC7d850E ",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0xD0c22A5435F4E8E5770C1fAFb5374015FC12F7cD",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.V2_SINGLE_SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address sender,uint256 inputAmount,address inputToken,uint256 amountOut,address outputToken,int256 slippage,uint32 referralCode)",
        ]),
      },
      [EVENT_ENUM.V2_MULTI_SWAP]: {
        abi: new ethers.Interface([
          "event SwapMulti(address sender,uint256[] amountsIn,address[] tokensIn,uint256[] amountsOut,address[] tokensOut,uint32 referralCode)",
        ]),
      },
    },
  },

  [CONTRACT_ENUM.V1_ROUTER]: {
    interface: new ethers.Interface(OdosRouterV1Abi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x76f4eeD9fE41262669D0250b2A97db79712aD855",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0xdd94018F54e565dbfc939F7C44a16e163FaAb331",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x69Dd38645f7457be13571a847FfD905f9acbaF6d",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0xa32EE1C40594249eb3183c10792BcF573D4Da47C",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0xfE7Ce93ac0F78826CD81D506B07Fe9f459c00214",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x9f138be5aA5cC442Ea7cC7D18cD9E30593ED90b9",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x061dc8e41C05207BedD6242eA4b342ef294BE359",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0xA269031037B4D5fa3F771c401D19E57def6Cb491",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.V1_SWAP]: {
        abi: new ethers.Interface([
          "event Swapped(address sender,uint256[] amountsIn,address[] tokensIn,uint256[] amountsOut,address[] outputs,uint256 valueOutQuote)",
        ]),
      },
    },
  },

  [CONTRACT_ENUM.LIMIT_ORDER_ROUTER]: {
    interface: new ethers.Interface(LimitOrderRouterAbi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x0F26B03961eb5D625BD6001278F0DB13f3e583d8",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xafF142fBc8FA5B1885FE54E4C889985F8a579b24",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xFA198dF5167dc5fb7DDA2Ad413310Be67394bF3d",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0xBefe4BC7f39771CF7C2CcCE6E4e7Ef393deb6704",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x275278CEA8d36b879917B51d250F04Be95F905Ed",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0xa688F1d16b44b9A3110C3b4413b6081F271A643B",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0x51Ea3db8b67462b0A66b3F1fF50cA87C076Acc7a",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x8c8c3E8465B911186aDeC83a53C7De8c587eDDaB",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MODE]: {
        address: "0x65005f4Bea4005D48eE9Bdaae960832c6CECC557",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x83564b903c0311877accEE8f99e6BEb712AD8E43",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0xD10634297961fEa132ac7b6e7451BC4E5B17359b",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x5Ab73021e0648f46Da303cE7f5a0F2F15a3944c6",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0x014F335e0161B4EdDf3fF5b297BA6A31004Ca528",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.LIMIT_ORDER_FILL]: {
        abi: new ethers.Interface([
          "event LimitOrderFilled(bytes32 indexed orderHash,address indexed orderOwner,address inputToken,address outputToken,uint256 orderInputAmount,uint256 orderOutputAmount,uint256 filledInputAmount,uint256 filledOutputAmount,uint256 surplus,uint32 referralCode,uint256 orderType)",
        ]),
      },
      [EVENT_ENUM.MULTI_LIMIT_ORDER_FILL]: {
        abi: new ethers.Interface([
          "event MultiLimitOrderFilled(bytes32 indexed orderHash,address indexed orderOwner,address[] inputTokens,address[] outputTokens,uint256[] orderInputAmounts,uint256[] orderOutputAmounts,uint256[] filledInputAmounts,uint256[] filledOutputAmounts,uint256[] surplus,uint32 referralCode,uint256 orderType)",
        ]),
      },
    },
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
