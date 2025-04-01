import { ethers } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum RANGO_VERSIONS {
  V1 = "v1",
}

export const rangoData: IProtocolTestingData = {
  [RANGO_VERSIONS.V1]: [
    {
      txnHash:
        "0x1cf1273640141d55a708322a582520efe636572771dc9c53cec1743ccbbd2219",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: ethers.ZeroAddress,
          toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
          fromAmount: "2681090000000000",
          toAmount: "0",
          sender: "0xc86B2949a268cC5Ad889a44a86a6b2eE0feE6107",
          recipient: "0xc86B2949a268cC5Ad889a44a86a6b2eE0feE6107",
        },
      ],
    },
    {
      txnHash:
        "0x8ceabc766d7666205934f59abe56d666b3b54f67e6ff05b82bebcaf99fd7cb15",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          fromAmount: "28670888",
          toAmount: "0",
          sender: "0xc34d9D2b45A193711FcC144D0BdbfB78A379DAd7",
          recipient: "0xc34d9D2b45A193711FcC144D0BdbfB78A379DAd7",
        },
      ],
    },
    {
      txnHash:
        "0x5855fac657edc1f612450ee4c0332ca19b71cfdf6bb158364f9e3d41fc06d04b",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          toToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          fromAmount: "9930000",
          toAmount: "0",
          sender: "0x8fB272FBdF66D6EF74B14ae91EA10007F052123B",
          recipient: "0x8fB272FBdF66D6EF74B14ae91EA10007F052123B",
        },
      ],
    },
    {
      txnHash:
        "0xddde61f7f4c4c95baa5af6d7600a1d64c60cf3946fba9494d69f9d77c676b8c8",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: "8453",
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          fromAmount: "28152443",
          toAmount: "28152443",
          sender: "0x4A6370Dc13a9a5E63bd4edaA15bbfbf3438f82A5",
          recipient: "0x4A6370Dc13a9a5E63bd4edaA15bbfbf3438f82A5",
        },
      ],
    },
    {
      txnHash:
        "0x65d192351f349a343a11405b8d899176a3ad9c2fdb990e77b731376eba471d76",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: "534352",
          fromToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
          toToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
          fromAmount: "36789444",
          toAmount: "36789444",
          sender: "0xab207e74B06F85164CCB4b8747D7fBf6d723F368",
          recipient: "0xab207e74B06F85164CCB4b8747D7fBf6d723F368",
        },
      ],
    },
    {
      txnHash:
        "0xdca0a4001afe1b87b3afe50278fb06089709cb842c30599416695a52854410d9",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
          toToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          fromAmount: "7099950",
          toAmount: "7097702",
          sender: "0x0000000000000000000000000000000000000000",
          recipient: "0x0000000000000000000000000000000000000000",
        },
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: "56",
          fromToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          toToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          fromAmount: "7097702",
          toAmount: "7097702",
          sender: "0xbaD3368f039Ac37b5956f9365E75A0D6783b854D",
          recipient: "0xbaD3368f039Ac37b5956f9365E75A0D6783b854D",
        },
      ],
    },
    {
      txnHash:
        "0xfe6d5af0cfa3bf2e5a33875428737bf0fc9f0d9500aea678dae50c24d58aae0d",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x912CE59144191C1204E64559FE8253a0e49E6548",
          toToken: "0x912CE59144191C1204E64559FE8253a0e49E6548",
          fromAmount: "20543267673913398612",
          toAmount: "0",
          sender: "0x177213c8e5443EC38c4aCf356deDe6211142B4BB",
          recipient: "0x177213c8e5443EC38c4aCf356deDe6211142B4BB",
        },
      ],
    },
    {
      txnHash:
        "0x29166a956557b6aeab8ec8166860772520ecba7c31a91dc8f9b642f23624b2ff",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: "8453",
          fromToken: ethers.ZeroAddress,
          toToken: ethers.ZeroAddress,
          fromAmount: "12967500000000000",
          toAmount: "12967500000000000",
          sender: "0x3cd81b539d4E9b0e49106a9B0237aBb8B449Bf48",
          recipient: "0x3cd81b539d4E9b0e49106a9B0237aBb8B449Bf48",
        },
      ],
    },
    {
      txnHash:
        "0xf51284fdeb69389fe4ceb55b5dba372a8911dfadd103c47f0461957d80ca9fa0",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: "56",
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          fromAmount: "1135570345",
          toAmount: "1135570345",
          sender: "0x13C7d47B8201cEC4C68b1Ea6D522DB3b65a2Dd8f",
          recipient: "0x13C7d47B8201cEC4C68b1Ea6D522DB3b65a2Dd8f",
        },
      ],
    },
    {
      txnHash:
        "0xd4a7689c2e720555aee3d9414221e04e8970c62bd7ab9534719a0d46646ed6df",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: "56",
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          fromAmount: "1037996306",
          toAmount: "1037996306",
          sender: "0x6D34700771004ce94de054ff5a48e7ba28255758",
          recipient: "0x6D34700771004ce94de054ff5a48e7ba28255758",
        },
      ],
    },
    {
      txnHash:
        "0x9669f87ac42f2920b22a3643944db98c14092bc2cb1c4d796dc45c87cbf42d32",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: "56",
          fromToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          toToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          fromAmount: "97737381",
          toAmount: "97737381",
          sender: "0x2E63DC327De1d13537BCa580d663D48a609dbfA1",
          recipient: "0x2E63DC327De1d13537BCa580d663D48a609dbfA1",
        },
      ],
    },
    {
      txnHash:
        "0x914771bb861fa13ed26c63af9f8f8caf6bb07ca1e67f276e3d2385a6743bf0da",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: ethers.ZeroAddress,
          toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          fromAmount: "306831089322311623",
          toAmount: "635375055",
          sender: "0x0000000000000000000000000000000000000000",
          recipient: "0x0000000000000000000000000000000000000000",
        },
        {
            type: ACTION_ENUM.BRIDGE_OUT,
            fromChain: CHAIN_ID.ETHEREUM,
            toChain: "137",
            fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            fromAmount: "635375055",
            toAmount: "635375055",
            sender: "0xfaDf9Bd17934F4bdEb09372d408b908480ED539a",
            recipient: "0xfaDf9Bd17934F4bdEb09372d408b908480ED539a",
          },
      ],
    },
    {
      txnHash:
        "0x5ff7aa4ca7619cfc0b2a41526c5a253d4fe9d1acaf384e004f2ea53f1e64cca7",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          toToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          fromAmount: "136041000",
          toAmount: "0",
          sender: "0xe3edA8EF95e9C7a5268eBE3A965db550C8299a2F",
          recipient: "0xe3edA8EF95e9C7a5268eBE3A965db550C8299a2F",
        },
      ],
    },
    {
      txnHash:
        "0xae4c1d23d4c17ef477d29385bf907ea8d84d4deb80c1a40b614d065fd6403823",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: ethers.ZeroAddress,
          toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          fromAmount: "66531000000000000",
          toAmount: "0",
          sender: "0x7592512f11f87dfe68e0717dd68f364AA6654dC2",
          recipient: "0x7592512f11f87dfe68e0717dd68f364AA6654dC2",
        },
      ],
    },
    {
      txnHash:
        "0x683cdf83366fe8942020ea6d1700bf38c90ab79dde2e1c96968f941fb8d0caba",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: ethers.ZeroAddress,
          toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          fromAmount: "2005860000000000",
          toAmount: "0",
          sender: "0x0FAbA6B616b06fE17944349429cc8EBe44A8b68b",
          recipient: "0x0FAbA6B616b06fE17944349429cc8EBe44A8b68b",
        },
      ],
    },
  ],
};
