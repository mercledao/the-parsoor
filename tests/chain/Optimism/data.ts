import { ZeroAddress } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum OPTIMISM_VERSIONS {
  V1 = "v1",
}

export const optimismBridgeData: IProtocolTestingData = {
  [OPTIMISM_VERSIONS.V1]: [
    {
      txnHash:
        "0xbfef70efc2a2d7e9a3e4f4594dee94f0e5c1866929c7a24639f4ac27a18fa67b",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.OPTIMISM,
          toChain: CHAIN_ID.ETHEREUM,
          fromToken: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
          toToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          fromAmount: "65000000000000",
          toAmount: null,
          sender: "0xE69f81b825d7Dc31ee9becef4DbEab5cf30e3Abb",
          recipient: "0xE69f81b825d7Dc31ee9becef4DbEab5cf30e3Abb",
        },
      ],
    },
    {
      txnHash:
        "0x8847062ad9bf030f4eb40e9fd7b3b68f64a6e23dd1ac06955e56de67abe5224e",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.OPTIMISM,
          toChain: CHAIN_ID.ETHEREUM,
          fromToken: "0x7a1263eC3Bf0a19e25C553B8A2C312e903262C5E",
          toToken: "0xd8F1460044925d2D5c723C7054cd9247027415B7",
          fromAmount: "309181000000000000000000",
          toAmount: null,
          sender: "0xFacbDEcF714f55d65ABF5be2054a8127880405c7",
          recipient: "0xFacbDEcF714f55d65ABF5be2054a8127880405c7",
        },
      ],
    },
    {
      txnHash:
        "0xafcac9439dd67d2559483a74870736c27236cbb3f99d4f1d34e0071632c875f6",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.OPTIMISM,
          toChain: CHAIN_ID.ETHEREUM,
          fromToken: ZeroAddress,
          toToken: ZeroAddress,
          fromAmount: "8162294745512708550",
          toAmount: null,
          sender: "0x3636bDDC7bA0DfE6F4269f2F5B15dEB112804361",
          recipient: "0x3636bDDC7bA0DfE6F4269f2F5B15dEB112804361",
        },
      ],
    },
    {
      txnHash:
        "0xb7cce89a2c2ab929613aff3c60384c8651d8086ecd0582a6560af6c499dc12f1",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.OPTIMISM,
          toChain: CHAIN_ID.ETHEREUM,
          fromToken: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
          toToken: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          fromAmount: "54803299",
          toAmount: null,
          sender: "0x272C39C82CA9F10e5338A6eE75927cFe00C82e2c",
          recipient: "0x272C39C82CA9F10e5338A6eE75927cFe00C82e2c",
        },
      ],
    },
    {
      txnHash:
        "0x055b3e120dcee4bb66e99b358a7eb1e299d0e67784490014d7249f9ccd69bce3",
      chainId: CHAIN_ID.ZORA,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ZORA,
          toChain: CHAIN_ID.ETHEREUM,
          fromToken: "0x0000000000000000000000000000000000000000",
          toToken: "0x0000000000000000000000000000000000000000",
          fromAmount: "4500000000000000",
          toAmount: null,
          sender: "0x1Ce8d8Dc797a55ef4a50A2929e374AF00326607D",
          recipient: "0x1Ce8d8Dc797a55ef4a50A2929e374AF00326607D",
        },
      ],
    }
  ],
};
