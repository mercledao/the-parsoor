import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum AMBIENT_VERSIONS {
  V1 = "v1",
}

export const ambientData: IProtocolTestingData = {
  [AMBIENT_VERSIONS.V1]: [
    {
      txnHash:
        "0xfa18920886793adbc157a856e84884b33ea6010fce6b8117fbf37e42c4b11466",
      chainId: CHAIN_ID.SCROLL,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
          toToken: "0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df",
          fromAmount: "389612450",
          toAmount: "389612450",
          sender: "0x66a4A279912e74A36f504d6221F75d1e122d375c",
          recipient: "0x66a4A279912e74A36f504d6221F75d1e122d375c"
        },
      ],
    },
    {
      txnHash:
        "0x1d60c7d78c1ac6a9103ec4990b3c27c4214d4146325d67e49eaf5b8a3935b7b6",
      chainId: CHAIN_ID.SCROLL,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
          toToken: "0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df",
          fromAmount: "144984675",
          toAmount: "144984675",
          sender: "0xba394f8111Dc28F14087E09F16f33678492c6365",
          recipient: "0xba394f8111Dc28F14087E09F16f33678492c6365"
        },
      ],
    },
    {
      txnHash:
        "0xf6c164e575fa372c972cf35cad7dc55df79d1f8d59a2eb4c881166d6984a70d5",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x0000000000000000000000000000000000000000",
          toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          fromAmount: "850000000000000000",
          toAmount: "2698700384",
          sender: "0xe5964fD10170C8291CF97552284D995a006E67aE",
          recipient: "0xe5964fD10170C8291CF97552284D995a006E67aE"
        },
      ],
    },
  ],
};
