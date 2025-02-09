import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum CURVE_VERSIONS {
  V1 = "v1",
}

export const curveData: IProtocolTestingData = {
  [CURVE_VERSIONS.V1]: [
    {
      txnHash:
        "0x67bd9a45f99f4d00566b171f2e34e12210ae77d9b66fcf2f8ab605d393cc3e0e",
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
        "0xe5898ab5eb1318830159983c330e0ad5a44329f762c21596c167f6912d7f9c58",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
          fromAmount: "4000000000000000",
          toAmount: "10637363",
          sender: "0x798685379474625225A5bE92287829eac9FF03D5",
          recipient: "0x798685379474625225A5bE92287829eac9FF03D5"
        },
      ],
    },
    {
      txnHash:
        "0x5d0029dc5635aa1018e0140c21cc40f26902fa49b7ad9c390842bdac3af33d07",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb",
          fromAmount: "1000000000000000",
          toAmount: "839396464774819",
          sender: "0xab51f2a73Aec0BEc2b194ed4F89604c83a14bA61",
          recipient: "0xab51f2a73Aec0BEc2b194ed4F89604c83a14bA61"
        },
      ],
    },
    {
      txnHash:
        "0x38aea6005d97ce850dccb7fd7b5504d7ee5e3753c8198693ceab4f6c105d1403",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x5979D7b546E38E414F7E9822514be443A4800529",
          fromAmount: "10000000000000",
          toAmount: "8390189925928",
          sender: "0x0fD3d2746E3114fa30C5C3380D3eCB978955E3ED",
          recipient: "0x0fD3d2746E3114fa30C5C3380D3eCB978955E3ED"
        },
      ],
    },
    {
      txnHash:
        "0xbf2b8f56fe171b03ddd552ac4689a4e9685ef5725619ac2f5b591d369bcb163c",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          toToken: "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978",
          fromAmount: "62832189",
          toAmount: "121718068707651456610",
          sender: "0xA6CFbbAC23B2AAA5a9C6cC947e265F61CA87BACD",
          recipient: "0xA6CFbbAC23B2AAA5a9C6cC947e265F61CA87BACD"
        },
      ],
    },
    {
      txnHash:
        "0x02a3560847416328a2d40ff7f22f75c51a8d8b797f67b0c1c7f1535956d7f5b9",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x75289388d50364c3013583d97bd70cED0e183e32",
          fromAmount: "90054706987302270",
          toAmount: "420482077542578962244",
          sender: "0x8700e6D8BFa0900FeBbFFdAC99569A09D2637eAA",
          recipient: "0x8700e6D8BFa0900FeBbFFdAC99569A09D2637eAA"
        },
      ],
    }
  ],
};
