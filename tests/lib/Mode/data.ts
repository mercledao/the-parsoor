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
    }
  ],
};
