import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum AERODROME_VERSIONS {
  V1 = "v1",
}

export const aerodromeData: IProtocolTestingData = {
  [AERODROME_VERSIONS.V1]: [
    {
      txnHash:
        "0xaaca8d00bbaa08e7115135f6f626da9bb07320df51cf1c7ab618dc713cea1ac1",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x02D4f76656C2B4f58430e91f8ac74896c9281Cb9",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "3972194774677555523824",
          toAmount: "26889988447440968",
          sender: "0x71B4Af0CC9459Ba7349077e668cb8b2A6b2b532F",
          recipient: "0x71B4Af0CC9459Ba7349077e668cb8b2A6b2b532F",
        },
      ],
    },
    {
      txnHash:
        "0xd160dcea2f886e824eaeb4f219c2a2424b032c4a9a3d67a74393155275586550",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xdbe125089D0752EF458C0685436ACE93A7f1F8cA",
          toToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          fromAmount: "2495223108913116400000",
          toAmount: "22195234",
          sender: "0xe14Aba220A30D8A28A37C4047582B610E4C381Ff",
          recipient: "0xe14Aba220A30D8A28A37C4047582B610E4C381Ff",
        },
      ],
    },
    {
      txnHash:
        "0x657bc678906ee193700afed5bab20e848bde48113dc21dfe4a39a1edb9de5873",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          toToken: "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
          fromAmount: "3999744809",
          toAmount: "4380199999809496993090",
          sender: "0xFB1C505C975e229A7c9746141971ABdab71f46C4",
          recipient: "0x275b26162c69D08aF344d453f6891747f1023E3e",
        },
      ],
    },
    {
      txnHash:
        "0x4a3593ac39fa430f0f4ce5b1b0ed35c38a490d0d45fe6e1eeccec484c2e9f7fc",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x02D4f76656C2B4f58430e91f8ac74896c9281Cb9",
          fromAmount: "37842328920089436",
          toAmount: "5635988415945965297149",
          sender: "0xeFfb38e3fAb8E71712f81232B2017c74da2CF110",
          recipient: "0xeFfb38e3fAb8E71712f81232B2017c74da2CF110",
        },
      ],
    },
    {
      txnHash:
        "0xc181d86cd5f2861b43478bb2368ad8c76cb2660be8f4518a16c1f59dd3bdae02",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x02D4f76656C2B4f58430e91f8ac74896c9281Cb9",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "1566596664304663579402",
          toAmount: "10487327141667867",
          sender: "0x340b78C56faf0683B3aaA4019e6B0f90723e7277",
          recipient: "0x340b78C56faf0683B3aaA4019e6B0f90723e7277",
        },
      ],
    },
    {
      txnHash:
        "0x987bfb23618255d233f9f2bb367e5271fcd159a21396a1716bd0a84f7bb2739b",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          toToken: "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
          fromAmount: "900000000",
          toAmount: "981960078211650470993",
          sender: "0xB0Ba33566bd35BcB80738810B2868DC1dDd1f0E9",
          recipient: "0xB0Ba33566bd35BcB80738810B2868DC1dDd1f0E9",
        },
      ],
    },
    {
      txnHash:
        "0x30cf3a6940bbb4d648ac23124abc6a9bfa3ec4e848b897b13a275b6107f5093b",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xc27468b12ffa6d714b1b5fbc87ef403f38b82ad4",
          toToken: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
          fromAmount: "212300000000000000000",
          toAmount: "4006864314",
          recipient: "0x8cc1665ee965345e79B132adb124782baD8C78E0",
        },
      ],
    },
    {
      txnHash:
        "0xfa95780c3d3623c2fd145a4557ba359aebb708eb94a857a0a56ec1b98065c1e6",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "30707308",
          toAmount: "10606000000000000000",
          recipient: "0xa86bc571E9990C4c465bdBC53B196feeCB9a4761",
        },
      ],
    },
    {
      txnHash:
        "0x4cf196b0fe9cf5f56bfebd4fd67f7ae784ea7519620424763521e3ebd97915ed",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "500000000",
          toAmount: "175997093775881681",
          recipient: "0x6A00277E6F9E5b5773772BDE0f8F154f2875Dc26",
        },
      ],
    },
    {
      txnHash:
        "0xffdc06d888194ee1180610d2651e8df78fd48d11dcdeb27b49357d35d9be66c0",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x0b3e328455c4059eeb9e3f84b5543f74e24e7e1b",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "428483394137568000000",
          toAmount: "199536324189055922",
          recipient: "0x10fA4Bf4d2F352153B8FFc6743b858c8Fa81E88E",
        },
      ],
    },
  ],
};
