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
          sender: "0x6fE3314087acE6B2b54021980a690c02ACdd0098",
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
          sender: "0x1405F9bEAE7B74EcE74F6734D1a1302E1873211C",
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
          sender: "0x402904E954aebEE2E78b7B09595393cf05571333",
          recipient: "0x402904E954aebEE2E78b7B09595393cf05571333"
        },
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xC4441c2BE5d8fA8126822B9929CA0b81Ea0DE38E",
          toToken: "0x06B964d96f5dCF7Eae9d7C559B09EDCe244d4B8E",
          fromAmount: "96265819800000000000000",
          toAmount: "77158511153969856923320",
          sender: "0x26b415e0ac2b9C2ae7Dd49dbB38aef2D6EEcc8b5",
          recipient: "0x26b415e0ac2b9C2ae7Dd49dbB38aef2D6EEcc8b5"
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
          sender: "0x9bd702E05B9c97E4A4a3E47Df1e0fe7A0C26d2F1",
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
          sender: "0x40A50cf069e992AA4536211B23F286eF88752187",
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
          sender: "0xF9Fa05eE5D7C9E9eeA2e73e6767e6b59563fdF5d",
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
          sender: "0xF4DC338B1b1184F84a461f0bb2f974fC90A81456",
          recipient: "0xF4DC338B1b1184F84a461f0bb2f974fC90A81456"
        },
      ],
    },
    {
      txnHash:
        "0x67b9ee6d6d6a96c56ae689c71a588dd1739d98ed4b542b513b7f8896916fd6ee",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          fromAmount: "90299255208252743987352003",
          toAmount: "90299165782583",
          sender: "0x964d9D1A532B5a5DaeacBAc71d46320DE313AE9C",
          recipient: "0x964d9D1A532B5a5DaeacBAc71d46320DE313AE9C"
        },
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          toToken: "0x903bEF1736CDdf2A537176cf3C64579C3867A881",
          fromAmount: "248768000000",
          toAmount: "3488319521144",
          sender: "0x70d08Aec714948855fbeE7C61b709361be7144B6",
          recipient: "0x70d08Aec714948855fbeE7C61b709361be7144B6"
        },
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xCFEAead4947f0705A14ec42aC3D44129E1Ef3eD5",
          toToken: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          fromAmount: "268717652944",
          toAmount: "3500000000000000000000",
          sender: "0xB226279c160D97929c160074c0db3fA1C9802964",
          recipient: "0xB226279c160D97929c160074c0db3fA1C9802964"
        },
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          toToken: "0x0d438F3b5175Bebc262bF23753C1E53d03432bDE",
          fromAmount: "7132000000",
          toAmount: "212226173435030019337",
          sender: "0x2917ED3b95995Ad05e46adF0204E8b51DC1026fD",
          recipient: "0x2917ED3b95995Ad05e46adF0204E8b51DC1026fD"
        },
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
          toToken: "0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6",
          fromAmount: "2999999999999999999999",
          toAmount: "16951496901799509781563",
          sender: "0x6A8941F08160833c1e39caDa512ea7ebE2e77469",
          recipient: "0x6A8941F08160833c1e39caDa512ea7ebE2e77469"
        },
      ],
    }
  ],
};
