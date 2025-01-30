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
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          toToken: "0x9ce84f6a69986a83d92c324df10bc8e64771030f",
          fromAmount: "20000000000",
          toAmount: "42310150156594486438480",
          sender: "0x34717040928d7fd8154d4612f3228eff14521023",
          recipient: "0x34717040928d7fd8154d4612f3228eff14521023"
        },
      ],
    },
    {
      txnHash:
        "0x1619b2d1ca449f7b98abdb69a4e3389291120cd5ff930dbe3477f7992e710595",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          toToken: "0x44108f0223a3c3028f5fe7aec7f9bb2e66bef82f",
          fromAmount: "8299499821",
          toAmount: "20000000000000000000000",
          sender: "0x00806daa2cfe49715ea05243ff259deb195760fc",
          recipient: "0x00806daa2cfe49715ea05243ff259deb195760fc"
        },
      ],
    },
    {
      txnHash:
        "0x84f1e17d076f9f7e6ad964e6d23a26362b716f92686d8e641eb0b306575f9b8b",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x808507121b80c02388fad14726482e061b8da827",
          toToken: "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e",
          fromAmount: "236830943687003687961",
          toAmount: "804205943233010446709",
          sender: "0x8f70a86c1309d8b1f5befc58948e7386fd495875",
          recipient: "0x8f70a86c1309d8b1f5befc58948e7386fd495875"
        },
      ],
    },
    {
      txnHash:
        "0x37548d13aa41fc4ba410ff54735a6534e00e87da4552ae2f973755b34e8e2556",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
          toToken: "0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab",
          fromAmount: "244783248237207583",
          toAmount: "1660276181802241186294",
          sender: "0x00806daa2cfe49715ea05243ff259deb195760fc",
          recipient: "0x00806daa2cfe49715ea05243ff259deb195760fc"
        },
      ],
    },
    {
      txnHash:
        "0x3603aba3537f3ec185c8c3bd4151a8fae20a04cc6c22c1a0ec398116edcdb8fd",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          toToken: "0x0000000000c5dc95539589fbd24be07c6c14eca4",
          fromAmount: "5000000000000000000",
          toAmount: "6576007078316234267229248",
          sender: "0x008300082c3000009e63680088f8c7f4d3ff2e87",
          recipient: "0x008300082c3000009e63680088f8c7f4d3ff2e87"
        },
      ],
    }
  ],
};
