import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum VELODROME_VERSIONS {
  V1 = "v1",
  V2 = "v2",
}

export const velodromeData: IProtocolTestingData = {
  [VELODROME_VERSIONS.V2]: [
    {
      txnHash:
        "0x9c7b8f56ed82ae6eeb3d09380001eb5a0a03cbd3db3ac3b16809b7d8c559367c",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: CHAIN_ID.BASE.toString(),
          toChain: CHAIN_ID.ARBITRUM,
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
          fromAmount: "30085448776876509",
          toAmount: "29926828012176636",
          sender: "0xbA7Cb627C63Bb369f767f032eF5b44183970C771",
          recipient: "0xbA7Cb627C63Bb369f767f032eF5b44183970C771",
        },
      ],
    }
  ],
};
