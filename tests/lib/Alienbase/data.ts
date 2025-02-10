import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum ALIENBASE_VERSIONS {
  V2 = "v2",
}

export const alienBaseData: IProtocolTestingData = {
  [ALIENBASE_VERSIONS.V2]: [
    {
      txnHash:
        "0x4a67ebb3bf4bcddae45aa2d9d2c3330c835d82849c154feb4172abe93e130361",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          fromAmount: "445700285538006",
          toAmount: "1172123",
          sender: "0x21b2671e160Ac5D05a035de0a858F87AB304DCE6",
          recipient: "0x21b2671e160Ac5D05a035de0a858F87AB304DCE6",
        },
      ],
    },
    {
      txnHash:
        "0xe699033a0baec2009d78df6b2dd924ed4aacb7f9d7ff6c8ad7fc3c6ba06cec20",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          toToken: "0x1dd2d631c92b1aCdFCDd51A0F7145A50130050C4",
          fromAmount: "100000000",
          toAmount: "809665172935007512484",
          sender: "0xE579AAd67158DEC6D01617d07131412D04134854",
          recipient: "0xE579AAd67158DEC6D01617d07131412D04134854",
        },
      ],
    },
  ],
};
