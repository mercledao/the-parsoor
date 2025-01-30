import { ZeroAddress } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum PARASWAP_VERSIONS {
  V5 = "v5",
}

export const paraswapSimpleSwappedData: IProtocolTestingData = {
  [PARASWAP_VERSIONS.V5]: [
    {
      txnHash:
        "0xf5d5406179059d2ab5b5f8b9e480291ad4963d2a772677f6b52c57b28cc846c7",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            toToken: "0x3593D125a4f7849a1B059E64F4517A86Dd60c95d",
            fromAmount: "70000000000000000",
            toAmount: "39275112292035519014",
            sender: "0xA04FFF5e90B35a38bfa09d2a0857474790827090",
            recipient: "0xA04FFF5e90B35a38bfa09d2a0857474790827090",
          },
      ],
    },
    {
        txnHash:
          "0xc13772b9152fd337283e8918a83f675cac77af0aab24ea70a6ed49daa3bdecbf",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
              type: ACTION_ENUM.SINGLE_SWAP,
              fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
              toToken: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
              fromAmount: "5000000000000000000",
              toAmount: "15435854",
              sender: "0xcA74F404E0C7bfA35B13B511097df966D5a65597",
              recipient: "0xcA74F404E0C7bfA35B13B511097df966D5a65597",
            },
        ],
      }
  ],
};
