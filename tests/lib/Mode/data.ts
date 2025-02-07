import { ZeroAddress } from "ethers";
import { ACTION_ENUM, CHAIN_ID, chainConfig } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum MODE_VERSIONS {
  V1 = "v1",
}

export const ModeL1BridgeData: IProtocolTestingData = {
  [MODE_VERSIONS.V1]: [
    {
      txnHash:
        "0x6fb974f1e2d618561a9eb2974662f564adc6eb92bc9e8dffc7c6ffc2108daa9d",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: null,
          fromToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          toToken:
            "0xf0F161fDA2712DB8b566946122a5af183995e2eD",
          fromAmount: "49727010000",
          toAmount: null,
          sender: "0x70FF197c32E922700d3ff2483D250c645979855d",
          recipient:
            "0x70FF197c32E922700d3ff2483D250c645979855d",
        },
      ],
    },
    {
      txnHash:
        "0x6ab265e70fde6b7587b24c1371ea86bd3b7aa59f8b7562b02259b79015707837",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: null,
          fromToken: ZeroAddress,
          toToken: null,
          fromAmount: "5000000000000000",
          toAmount: null,
          sender: "0x49da32b022bAB8C18a988640C34CbBd738F8F593",
          recipient:
            "0x49da32b022bAB8C18a988640C34CbBd738F8F593",
        },
      ],
    },
    {
      txnHash:
        "0x13cd5fed37cf8036ba6ecde2ecdb626c8799f3ce6dff4ffec207169af618a612",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: null,
          fromToken: ZeroAddress,
          toToken: null,
          fromAmount: "1000000000000000",
          toAmount: null,
          sender: "0xAa19A18e60B52ba4Bb09BfB406EEDafD78B127E3",
          recipient:
            "0xAa19A18e60B52ba4Bb09BfB406EEDafD78B127E3",
        },
      ],
    },
    {
      txnHash:
        "0x6119036ce2fac8f5979f20ba53e4beccc712440e27fb02af40110e7fc522997f",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: null,
          fromToken: ZeroAddress,
          toToken: null,
          fromAmount: "1000000000000000",
          toAmount: null,
          sender: "0xab9461f04AfcEB9F7710b97da8c4654B772a5868",
          recipient:
            "0xab9461f04AfcEB9F7710b97da8c4654B772a5868",
        },
      ],
    },
    {
      txnHash:
        "0x2b3874f1a049d2dcba243bef93a5ece1d120bf41dc257c4544a3ed70bfe706b4",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: null,
          fromToken: ZeroAddress,
          toToken: null,
          fromAmount: "20000000000000000",
          toAmount: null,
          sender: "0x10500d5236a748F18723252A5faCD986dD33f285",
          recipient:
            "0x10500d5236a748F18723252A5faCD986dD33f285",
        },
      ],
    }
  ],
};
