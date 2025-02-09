import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum MAVERICK_VERSIONS {
  V1 = "v1",
}

export const maverickData: IProtocolTestingData = {
  [MAVERICK_VERSIONS.V1]: [
    {
      txnHash:
        "0xb3c4935920181eae8528959368fb285cde8a11866711c984d713c0794a4b97f7",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          toToken: "0x66a1E37c9b0eAddca17d3662D6c05F4DECf3e110",
          fromAmount: "150000000",
          toAmount: "149952174996030360105",
          sender: "0x3E63E2f62aab0f4050109D4002742515b00aC8B1",
          recipient: "0x3E63E2f62aab0f4050109D4002742515b00aC8B1"
        },
      ],
    },
    {
      txnHash:
        "0x6e882b2ddb63dcd2c727f28478cff278469fd022041874e0561bde74bb42045e",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          toToken: "0x66a1E37c9b0eAddca17d3662D6c05F4DECf3e110",
          fromAmount: "150000000",
          toAmount: "149952174996030360105",
          sender: "0x3E63E2f62aab0f4050109D4002742515b00aC8B1",
          recipient: "0x3E63E2f62aab0f4050109D4002742515b00aC8B1"
        },
      ],
    }
  ],
};
