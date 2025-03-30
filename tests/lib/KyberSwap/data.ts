import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum KYBERSWAP_AGGREGATOR_VERSION {
  V1 = "v1",
}

export const kyberswapData: IProtocolTestingData = {
  [KYBERSWAP_AGGREGATOR_VERSION.V1]: [
    {
      txnHash:
        "0x01d3632d651e8fb4567119a3dfeb06b93d99dbe93b20240617b719ec9c5c9875",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x5979D7b546E38E414F7E9822514be443A4800529",
          toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          fromAmount: "25186617762577555",
          toAmount: "30173402569313033",
          sender: "0x8ef7cF87e8E8A09A65205B5A81D3F5fFEB580cA7",
          recipient: "0x8ef7cF87e8E8A09A65205B5A81D3F5fFEB580cA7",
        },
      ],
    },
    {
      txnHash:
        "0xf5f3f57ebb6e30b6be10dbfd929575864b76bac913fb2dea8ed249835f3a0836",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xB1C3960aeeAf4C255A877da04b06487BBa698386",
          toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          fromAmount: "3870000000000000000000",
          toAmount: "80354093540911970",
          sender: "0xF17E0ae21101779d1A68b219E74D9B2e0E2395C2",
          recipient: "0xF17E0ae21101779d1A68b219E74D9B2e0E2395C2",
        },
      ],
    },
    {
      txnHash:
        "0xae0111c2dec02f13c9c930928c0e38000acad700989583baa84d8c2362853da0",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          toToken: "0x0c880f6761F1af8d9Aa9C466984b80DAb9a8c9e8",
          fromAmount: "129259616",
          toAmount: "50542951057077532939",
          sender: "0x028962979DCbdd7bC38473390D9Be4B86d8e5c84",
          recipient: "0x028962979DCbdd7bC38473390D9Be4B86d8e5c84",
        },
      ],
    },
    {
      txnHash:
        "0xe4bcc5645d93a5cd82efd7401e68fcbda05d59a02bc1cc887cd42e023d50ce6f",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x5979D7b546E38E414F7E9822514be443A4800529",
          toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          fromAmount: "1992058842425721922",
          toAmount: "2386480991606163447",
          sender: "0x0543E8e6D2D373087af8e1847dAfee4C5E6F7bE1",
          recipient: "0x0543E8e6D2D373087af8e1847dAfee4C5E6F7bE1",
        },
      ],
    },
    {
      txnHash:
        "0x78e3d6bddf326c6d60e5b39df72a549cdc564de361448b8c37ca6edb3ab8f93c",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          toToken: "0x42Baf1f659D765C65ADE5BB7E08eb2C680360d9d",
          fromAmount: "400000000000000000",
          toAmount: "50064966525996645117569",
          sender: "0xC70882FD04799DFA6b72c7bDA3068bfd9E11be66",
          recipient: "0xC70882FD04799DFA6b72c7bDA3068bfd9E11be66",
        },
      ],
    },
    {
      txnHash:
        "0x4a33097bb1bd4c884203dedf46451fafbd7899a9fabcc7157e809cd201042f35",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xDb82c0d91E057E05600C8F8dc836bEb41da6df14",
          toToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          fromAmount: "3009698364515335744179",
          toAmount: "194110285",
          sender: "0x6E06d8ed6Cd2747F560a1f20826649d5Bc7c8A55",
          recipient: "0x6E06d8ed6Cd2747F560a1f20826649d5Bc7c8A55",
        },
      ],
    },
    {
      txnHash:
        "0x302684e17d761d72a6bc79189e4d4b5306004d22fa37b65ece7b254d7382cae1",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x91c65C2A9a3AdFe2424ecC4A4890B8334c3A8212",
          fromAmount: "2000000000000000000",
          toAmount: "25779285805370844600",
          sender: "0x527aAA1e58c6Ca37696Fd88f709A2a892aFbC9d5",
          recipient: "0x527aAA1e58c6Ca37696Fd88f709A2a892aFbC9d5",
        },
      ],
    },
    {
      txnHash:
        "0x197c14dc78b4335dc1ab494ed6ad350bb1cebdf8ad403e9c3c4cad80fecb2eab",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x43C5034469bCe262d32F64C5e7f9F359f5B1495F",
          toToken: "0xd67e18eD798A9667e84595bf88C25Ae163Af7e0a",
          fromAmount: "28876198680856161",
          toAmount: "118748622140019264",
          sender: "0xaF54488F5138DaA84D00d535168016B2a054ec4c",
          recipient: "0xaF54488F5138DaA84D00d535168016B2a054ec4c",
        },
      ],
    },

    {
      txnHash:
        "0x1249c7b8025d47f195ce10ba0c4ebad7a9c657940ec4c0b7a9c53f699909ddc6",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          toToken: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
          fromAmount: "90419760843973694",
          toAmount: "124242198020914074",
          sender: "0x63b0a0d33FE906C668b1DE4875Bfaf562A9D8c5b",
          recipient: "0x63b0a0d33FE906C668b1DE4875Bfaf562A9D8c5b",
        },
      ],
    },
    {
      txnHash:
        "0xc0851858ba1443a7cd7bcaec6421914eb1aa429bf65d32ea55052fcbb12855c8",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          fromAmount: "196415560",
          toAmount: "94624903277810571",
          sender: "0x63b0a0d33FE906C668b1DE4875Bfaf562A9D8c5b",
          recipient: "0x63b0a0d33FE906C668b1DE4875Bfaf562A9D8c5b",
        },
      ],
    },
    {
      txnHash:
        "0x3371f2c484ad4a5b8c8757b60f7aaf3f09f75bafb2c14e4814946c24e76cf88c",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          toToken: "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          fromAmount: "2471904332",
          toAmount: "2471442883697144374161",
          sender: "0x63b0a0d33FE906C668b1DE4875Bfaf562A9D8c5b",
          recipient: "0x63b0a0d33FE906C668b1DE4875Bfaf562A9D8c5b",
        },
      ],
    },
  ],
};
