import { ethers } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum ACROSS_VERSIONS {
  V3 = "v3",
}

export const acrossFilledDepositData: IProtocolTestingData = {
  [ACROSS_VERSIONS.V3]: [
    {
      txnHash:
        "0x569fb9fa551abb141766268828b8badf9114c79f9c8d61f01aaabaf086f3f4f0",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: CHAIN_ID.BASE.toString(),
          toChain: CHAIN_ID.ARBITRUM,
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
          fromAmount: "30085448776876509",
          toAmount: "29926828012176636",
          sender: "0x18105A39dB36EB6f865704Be858bcC7954c66467",
          recipient: "0xbA7Cb627C63Bb369f767f032eF5b44183970C771",
        },
      ],
    },
    {
      txnHash:
        "0xdea409f9c8bebc0b95f80d5673890b7d7605527147f788f0d36103754ebaacf3",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: "7777777",
          toChain: CHAIN_ID.OPTIMISM,
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "78000000000000000",
          toAmount: "77948542083744230",
          sender: "0xCad97616f91872C02BA3553dB315Db4015cBE850",
          recipient: "0xE2c14A66Dd4cdbA65428244d99791FA498428CBE",
        },
      ],
    },
    {
      txnHash:
        "0xb4a4c4fae73433128164cf26d3679fd2c2eb9dd1b360b550e04dbd5de169323f",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.OPTIMISM,
          toChain: CHAIN_ID.BASE.toString(),
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "110000000000000000",
          toAmount: "109974609061483935",
          sender: "0x27CDcD479c713da07072959F3bA5055D23d384Bb",
          recipient: "0x27CDcD479c713da07072959F3bA5055D23d384Bb",
        },
      ],
    },
    {
      txnHash:
        "0xdea409f9c8bebc0b95f80d5673890b7d7605527147f788f0d36103754ebaacf3",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: "7777777",
          toChain: CHAIN_ID.OPTIMISM,
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "78000000000000000",
          toAmount: "77948542083744230",
          sender: "0xCad97616f91872C02BA3553dB315Db4015cBE850",
          recipient: "0xE2c14A66Dd4cdbA65428244d99791FA498428CBE",
        },
      ],
    },
    {
      txnHash:
        "0x20a329d2eab4ae1246c6ecebd3c5b0317f4ae0797e2c1a6070a805840007a32d",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.OPTIMISM,
          toChain: CHAIN_ID.BASE.toString(),
          fromToken: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
          toToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          fromAmount: "1007637",
          toAmount: "968258",
          sender: "0x5a59aDb668d4E714c18654a1Dfa7A0c1257fE33C",
          recipient: "0x5a59aDb668d4E714c18654a1Dfa7A0c1257fE33C",
        },
      ],
    },
    {
      txnHash:
        "0xed0aac0c6fe671fdf9c556f88abad54fdfb38d3c2fbd8cff9b96016f534bb7f6",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.OPTIMISM,
          toChain: CHAIN_ID.BASE.toString(),
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "1400000000000000",
          toAmount: "1391062143320277",
          sender: "0xBbD59ed30c11d7ac507da89D216b07003FDD12C3",
          recipient: "0xBbD59ed30c11d7ac507da89D216b07003FDD12C3",
        },
      ],
    },
  ],
};
