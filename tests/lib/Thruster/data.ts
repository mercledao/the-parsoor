import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum THRUSTER_VERSIONS {
  V2 = "v2",
  V3 = "v3",
}

export const thrusterData: IProtocolTestingData = {
  [THRUSTER_VERSIONS.V2]: [
    {
      txnHash:
        "0x6ba354cc59df64786663f8a02ca992d7edb61980e5f2ac9deb52f59ed6a052be",
      chainId: CHAIN_ID.BLAST,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x4300000000000000000000000000000000000004",
          toToken: "0x59c159e5a4F4d1C86F7aBDC94B7907B7473477F6",
          fromAmount: "10567327064049699",
          toAmount: "12548483980803371000000",
          sender: "0xB80D90fcf2Ed0e4FeBE02d2a209109Bf1F62DF95",
          recipient: "0xa8d7D181C41abBD17f43d46211573A0c2Bbb08D0",
        },
      ],
    },
    {
      txnHash:
        "0x64af2693a6eec2aee4e0a50e3fd42d5f4e8d8787dd8936ca72e7f2d660fcc44c",
      chainId: CHAIN_ID.BLAST,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x4300000000000000000000000000000000000004",
          toToken: "0xb1a5700fa2358173fe465e6ea4ff52e36e88e2ad",
          fromAmount: "250908000000000000",
          toAmount: "163770829270215613544488",
          sender: "0x9E942feD9F9aCc6A2C333d979B45e6d2f5B8f25A",
          recipient: "0x9E942feD9F9aCc6A2C333d979B45e6d2f5B8f25A",
        },
      ],
    },
    {
      txnHash:
        "0x2b680b667119272c7fb9e074290a33cdca2758fa8011a184bc9336a6167f3103",
      chainId: CHAIN_ID.BLAST,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xd43D8aDAC6A4C7d9Aeece7c3151FcA8f23752cf8",
          toToken: "0x4300000000000000000000000000000000000004",
          fromAmount: "6000000000000",
          toAmount: "35308075431506426",
          sender: "0x1ABC8dD6A82f9ad1cB7cd11338D2F9Df004bb4aB",
          recipient: "0x1ABC8dD6A82f9ad1cB7cd11338D2F9Df004bb4aB",
        },
      ],
    },
  ]
};
