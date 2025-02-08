import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum SUSHISWAP_VERSIONS {
  V5 = "v5",
}

export const sushiswapData: IProtocolTestingData = {
  [SUSHISWAP_VERSIONS.V5]: [
    {
      txnHash:
        "0xb327dd06c2820c8b07fd0a0ad46635523ac602a9e090d59b1c494856fe064be6",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0xf94e7d0710709388bCe3161C32B4eEA56d3f91CC",
          fromAmount: "3300000000000000",
          toAmount: "34371166284090943809",
          sender: "0xB4765Bee75A0fa0a2f66Bf68CE1796c55854c154",
          recipient: "0xB4765Bee75A0fa0a2f66Bf68CE1796c55854c154",
        },
      ],
    },
    {
      txnHash:
        "0x65d5737a428a4348fea2cfcb606bf20ac42020af9a03e4b320b2bdb6b636a7b2",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x6E79B51959CF968d87826592f46f819F92466615",
          fromAmount: "50000000000000",
          toAmount: "2318746351060",
          sender: "0xB4765Bee75A0fa0a2f66Bf68CE1796c55854c154",
          recipient: "0x4914C684ddDEB55AA205EA380667a4c0f3531717",
        },
      ],
    },
    {
      txnHash:
        "0xc016c6b95129f6c267724ffed608c267e9f898eb4e34849d7c5b1b85d46ad0e2",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xE16e2548A576ad448FB014bBE85284D7f3542dF5",
          toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          fromAmount: "2000000000000000000000",
          toAmount: "15672548898544994",
          sender: "0x174fe9C3DEB341329484fa5cEAf4F2b4Dff620d5",
          recipient: "0x174fe9C3DEB341329484fa5cEAf4F2b4Dff620d5",
        },
      ],
    },
    {
      txnHash:
        "0xc65c97d6c80d8ab1a0c02b6e688596d646a321579f7df6ce84b3ab9b84ad1fef",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
          toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          fromAmount: "200000",
          toAmount: "62634583529882",
          sender: "0x71cC96829ed93371b5b8f8d760c83290119F66cf",
          recipient: "0x71cC96829ed93371b5b8f8d760c83290119F66cf",
        },
      ],
    },
    {
      txnHash:
        "0xb327dd06c2820c8b07fd0a0ad46635523ac602a9e090d59b1c494856fe064be6",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0xf94e7d0710709388bCe3161C32B4eEA56d3f91CC",
          fromAmount: "3300000000000000",
          toAmount: "34371166284090943809",
          sender: "0xB4765Bee75A0fa0a2f66Bf68CE1796c55854c154",
          recipient: "0xB4765Bee75A0fa0a2f66Bf68CE1796c55854c154",
        },
      ],
    },
    {
      txnHash:
        "0x26db144b5ac565dc321a8378bebac1876aa3fb57e536479919f8121179be68d8",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
          toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          fromAmount: "245185",
          toAmount: "89588035995809445",
          sender: "0x0d0a3c6DC8a7352A69b2B31E9DB99f05A4c779F1",
          recipient: "0x0d0a3c6DC8a7352A69b2B31E9DB99f05A4c779F1",
        },
      ],
    },
    {
      txnHash:
        "0x46239f13bc16a9344f0b37573edd535cee9cd79c7ef14f585dcc6f31e76212a0",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          fromAmount: "270830019",
          toAmount: "270748156",
          sender: "0x188c6FF67A50b965752ed4D906D39260F9cC97EC",
          recipient: "0x188c6FF67A50b965752ed4D906D39260F9cC97EC",
        },
      ],
    },
    {
      txnHash:
        "0xd79f74b9ba4ff7f05e5d44f201562ce5cad6bac72a730c91d5a69372902db72b",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: "0x6985884C4392D348587B19cb9eAAf157F13271cd",
          fromAmount: "116397988",
          toAmount: "43615333555846695133",
          sender: "0xdEf76dC86C5003a7382bb97900b4C6c475FDBfbA",
          recipient: "0xdEf76dC86C5003a7382bb97900b4C6c475FDBfbA",
        },
      ],
    }
  ],
};
