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
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          toToken: "0x9Ce84F6A69986a83d92C324df10bC8E64771030f",
          fromAmount: "20000000000",
          toAmount: "42310150156594486438480",
          sender: "0x34717040928d7fd8154d4612f3228eff14521023",
          recipient: "0x6fE3314087acE6B2b54021980a690c02ACdd0098"
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
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          toToken: "0x44108f0223A3C3028F5Fe7AEC7f9bb2E66beF82F",
          fromAmount: "8299499821",
          toAmount: "20000000000000000000000",
          sender: "0x00806daa2cfe49715ea05243ff259deb195760fc",
          recipient: "0x1405F9bEAE7B74EcE74F6734D1a1302E1873211C"
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
          fromToken: "0x808507121B80c02388fAd14726482e061B8da827",
          toToken: "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
          fromAmount: "236830943687003687961",
          toAmount: "804205943233010446709",
          sender: "0x8f70a86c1309d8b1f5befc58948e7386fd495875",
          recipient: "0x402904E954aebEE2E78b7B09595393cf05571333"
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
          fromToken: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
          toToken: "0xDEf1CA1fb7FBcDC777520aa7f396b4E015F497aB",
          fromAmount: "244783248237207583",
          toAmount: "1660276181802241186294",
          sender: "0x00806daa2cfe49715ea05243ff259deb195760fc",
          recipient: "0x9bd702E05B9c97E4A4a3E47Df1e0fe7A0C26d2F1"
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
          fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          toToken: "0x0000000000c5dc95539589fbD24BE07c6C14eCa4",
          fromAmount: "5000000000000000000",
          toAmount: "6576007078316234267229248",
          sender: "0x008300082c3000009e63680088f8c7f4d3ff2e87",
          recipient: "0x40A50cf069e992AA4536211B23F286eF88752187"
        },
      ],
    },
    {
      txnHash:
        "0xb4efb21514531ca5bf369a97a5854bb394d3f92d000cbe899e1db00cb4fd2e2a",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xaa6b1798A97505b36D9c4a3736C2Aa48674Aeb97",
          toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
          fromAmount: "18564027758822375816",
          toAmount: "2177656738445500",
          sender: "0x6bf97aFe2D2C790999cDEd2a8523009eB8a0823f",
          recipient: "0xF9Fa05eE5D7C9E9eeA2e73e6767e6b59563fdF5d"
        },
      ],
    },
    {
      txnHash:
        "0x839acebbd00ebea1eca464799cae88fccd522a10799803d2aa692b4258c93dd2",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          fromAmount: "83703525974",
          toAmount: "83753136176",
          sender: "0x6bf97aFe2D2C790999cDEd2a8523009eB8a0823f",
          recipient: "0xF4DC338B1b1184F84a461f0bb2f974fC90A81456"
        },
      ],
    }
  ],
};
