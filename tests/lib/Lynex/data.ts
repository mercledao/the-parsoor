import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum LYNEX_VERSIONS {
  V2 = "v2",
}

export const lynexData: IProtocolTestingData = {
  [LYNEX_VERSIONS.V2]: [
    {
      txnHash:
        "0x6f7661b2f997ba9d8c8d0a3fc9213355acb91469919838ecd25e125940e85a1d",
      chainId: CHAIN_ID.LINEA,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
          toToken: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
          fromAmount: "207968",
          toAmount: "7066565790122187499",
          sender: "0x0fD3d2746E3114fa30C5C3380D3eCB978955E3ED",
          recipient: "0x0fD3d2746E3114fa30C5C3380D3eCB978955E3ED"
        },
      ],
    },
    {
        txnHash:
          "0xebd7b327e59f963fb8b55671251314cbe8c275fc4c719358af5342f4be2e97c4",
        chainId: CHAIN_ID.LINEA,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
            toToken: "0xEb1fD1dBB8aDDA4fa2b5A5C4bcE34F6F20d125D2",
            fromAmount: "80000000000000",
            toAmount: "160305596338123978697",
            sender: "0x94D6907f6e69f6Ed39fDfcEe2dBAAcB96492E5a7",
            recipient: "0x94D6907f6e69f6Ed39fDfcEe2dBAAcB96492E5a7"
          },
        ],
      },
      {
        txnHash:
          "0x6ad99bc859f803b6ba85af263108c238493a7611cbcee9fedc5f56c1918687d2",
        chainId: CHAIN_ID.LINEA,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
            toToken: "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af",
            fromAmount: "144970",
            toAmount: "4702153955042436601248",
            sender: "0xed684CAf7aCe61fbe81dD44597dcf7651EdDD114",
            recipient: "0xed684CAf7aCe61fbe81dD44597dcf7651EdDD114"
          },
        ],
      },
      {
        txnHash:
          "0xc84454bc8d82029de6dce37b677d777d3aa6173c6d53557e98398ddff4cc54f8",
        chainId: CHAIN_ID.LINEA,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x2416092f143378750bb29b79eD961ab195CcEea5",
            toToken: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
            fromAmount: "277270957123831763",
            toAmount: "287295941286602253",
            sender: "0xcCfF1685f6c4B327fa45C02f5947eAcB343d9eDA",
            recipient: "0x0000000000000000000000000000000000000000"
          },
        ],
      },
      {
        txnHash:
          "0x7cc59e40f8b66086bd44aebf441dd6f6b2faf1347f336aa0ecb256dc1fe051e0",
        chainId: CHAIN_ID.LINEA,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
            toToken: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
            fromAmount: "1495949549",
            toAmount: "548000000000000000",
            sender: "0xd82DeF4400793894Fb175F3b1bA6E4402C92c98c",
            recipient: "0xd82DeF4400793894Fb175F3b1bA6E4402C92c98c"
          },
        ],
      }
  ],
};
