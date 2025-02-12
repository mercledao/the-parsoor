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
    {
      txnHash:
        "0x46462bc709a05514df5a27961ae197d81b6746c366b8e8ca62cdb0484ec63c34",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "61857166",
          toAmount: "23422977060887128",
          sender: "0x746E5d9e12FCd2257951d8B868Ed2a6f5979a3aD",
          recipient: "0x0000000000000000000000000000000000000002",
        }
      ],
    },
    {
        txnHash:
          "0x901f5c13db468b15cffb0c1d57c8c789d365d5eab463c0d0e6c1bf745a3e2ecd",
        chainId: CHAIN_ID.BASE,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x1dd2d631c92b1aCdFCDd51A0F7145A50130050C4",
            toToken: "0x4200000000000000000000000000000000000006",
            fromAmount: "8528298107879745249487",
            toAmount: "396777175887328928",
            sender: "0x39712b69c2b894F73857a4F6E7FACbEEFB008a35",
            recipient: "0x0000000000000000000000000000000000000002",
          }
        ],
      },
      {
        txnHash:
          "0xb697797666564b2b27fac2a3067fd19102db09c5a560021b24815615eb4d6fa1",
        chainId: CHAIN_ID.BASE,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
            toToken: "0x4200000000000000000000000000000000000006",
            fromAmount: "346190000000000000",
            toAmount: "130421533287868",
            sender: "0xD8bBA462C88D1b3545514b9b1da5EB722C28dda0",
            recipient: "0xD8bBA462C88D1b3545514b9b1da5EB722C28dda0",
          }
        ],
      },
  ],
};
