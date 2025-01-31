import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum ONEINCH_VERSIONS {
  V5 = "v5",
}

export const oneinchAggregationRouterData: IProtocolTestingData = {
  [ONEINCH_VERSIONS.V5]: [
    {
      txnHash:
        "0xb73a536767fb9325aabee1551cf8dd2f35317090a07664a82298360f40af8638",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
          fromAmount: "11275880313757800",
          toAmount: null,
          sender: "0x510cDA854EfD96C180C0b678947fDcC64181279e",
          recipient: "0x510cDA854EfD96C180C0b678947fDcC64181279e",
        },
      ],
    },
  ],
};
