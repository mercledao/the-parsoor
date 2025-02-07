import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum VELODROME_VERSIONS {
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
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97",
          toToken: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
          fromAmount: "378000000000000000000",
          toAmount: "100534390",
          recipient: "0x441D10D3375bC58adF846f350EdF68595828A74D",
        },
      ],
    },
    {
      txnHash:
        "0xa1ba425172292aa55f7122d4b34db3bc645b6854f07b1fb315f353c6b67a137d",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97",
          toToken: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
          fromAmount: "1000000000000000000000",
          toAmount: "265780129",
          recipient: "0xC5abbab4DE3C3E1efF37Ac27A9c536e4cc4E1851",
        },
      ],
    },
    {
      txnHash:
        "0x048c4bfdb34eca6bf1a47fd77639a77c3f1c0cdb704b1bfc42ad017b54076317",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x4200000000000000000000000000000000000042",
          fromAmount: "100000000000000",
          toAmount: "181390539368230011",
          recipient: "0xdc2059cDCF5F6f70c805d6EFB5Bb0cE6144200c2",
        },
      ],
    },
    {
      txnHash:
        "0x12a617a555c53d8d16ab2e955d2d1938ee1ecbc11b783e72326cd5ab0ebf9cd2",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
          fromAmount: "100000000000000",
          toAmount: "269267",
          recipient: "0xe95E02549744916b85D8336fBdA3c771daD23e84",
        },
      ],
    },
    {
      txnHash:
        "0xe222f2da3e773b3d05b19b37de77ca4a876947db2c65353d49a46746d9c83ca6",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db",
          toToken: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
          fromAmount: "858374823474774797646",
          toAmount: "115029468",
          recipient: "0x02a203EbeF940E0F58485d30942B6B6acB0057A2",
        },
      ],
    },
    {
      txnHash:
        "0x1f28ddde7d474a2356de0a5aea36aff9f7873c35994579d2f3d0d4e01c4b1595",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db",
          toToken: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
          fromAmount: "18330010401795124726",
          toAmount: "3048010",
          recipient: "0x7eeC817616Db347f1A2df574d40BA231E6CA3Aa7",
        },
      ],
    },
    {
      txnHash:
        "0x1f28ddde7d474a2356de0a5aea36aff9f7873c35994579d2f3d0d4e01c4b1595",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db",
          toToken: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
          fromAmount: "18330010401795124726",
          toAmount: "3048010",
          recipient: "0x7eeC817616Db347f1A2df574d40BA231E6CA3Aa7",
        },
      ],
    },
    {
        txnHash:
          "0x1f26052fa6b15ad0bcacf49e75bbd508461422fe0ac84733d1468892165110c1",
        chainId: CHAIN_ID.OPTIMISM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db",
            toToken: "0x74ccbe53F77b08632ce0CB91D3A545bF6B8E0979",
            fromAmount: "5450023251475144118249",
            toAmount: "11703669435448881702500",
            recipient: "0x4EFE127e2975cf2703d74261298C72b6193A8270",
          },
        ],
      },
  ],
};
