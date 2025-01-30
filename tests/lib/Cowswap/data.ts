import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum COWSWAP_VERSIONS {
  V2 = "v2",
}

export const cowswapSwapData: IProtocolTestingData = {
  [COWSWAP_VERSIONS.V2]: [
    {
      txnHash:
        "0x5f22915f8bd90dd55e63f2a4cafc5688501649cad090502cf663b97873567e1f",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.MULTI_SWAP,
          fromTokens: [
            "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
          ],
          toTokens: ["0x0000000000000000000000000000000000000000"],
          fromAmounts: ["50000000", "120000000"],
          toAmounts: ["53914557838929884"],
          sender: "0xAca3039EA237ab5DE26264EA282a592d0829228b",
        },
      ],
    }
  ],
};
