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
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: CHAIN_ID.BASE,
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1".toLowerCase(),
          fromAmount: "30085448776876509",
          toAmount: "29926828012176636",
          sender: "0x18105A39dB36EB6f865704Be858bcC7954c66467".toLowerCase(),
          recipient: "0xbA7Cb627C63Bb369f767f032eF5b44183970C771".toLowerCase(),
        },
      ],
    },
  ],
};
