import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum DODO_VERSIONS {
  V2 = "v2",
}

export const dodoData: IProtocolTestingData = {
  [DODO_VERSIONS.V2]: [
    {
      txnHash:
        "0xeca831115527c13c0980522a315abe14152dc438b86bc3d7deca1f80ab670491",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          toToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          fromAmount: "1853590000000",
          toAmount: "1853381741147",
          sender: "0x0D080A3c3290C98E755d8123908498BcE2C5620d",
          recipient: "0x0D080A3c3290C98E755d8123908498BcE2C5620d"
        },
      ],
    },
    {
      txnHash:
        "0x01a1635ac7c8bc71eaf033de1a0423a466fa0c2e6f79fe0bc75ffdf5948f6198",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x69Eb4FA4a2fbd498C257C57Ea8b7655a2559A581",
          fromAmount: "10000000000000000",
          toAmount: "128834477028766761182",
          sender: "0x5423e28219D6d568dCF62a8134D623e6F4a1C2Df",
          recipient: "0x5423e28219D6d568dCF62a8134D623e6F4a1C2Df"
        },
      ],
    },
    {
      txnHash:
        "0xf38458b5834531b5b8972f40d3fb9b88df95bce3e019bebca51a49ace473afe2",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
          toToken: "0x69Eb4FA4a2fbd498C257C57Ea8b7655a2559A581",
          fromAmount: "150000000",
          toAmount: "828102964621265397094",
          sender: "0xc7742c0eD6B7c236c6D90967257c8aAEc4aC1d13",
          recipient: "0xc7742c0eD6B7c236c6D90967257c8aAEc4aC1d13"
        },
      ],
    },
    {
      txnHash:
        "0x8494cc848128e0173309b3518e55a760f4457b51da6bf59f6b5219b34043bb2a",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          fromAmount: "10000000000000",
          toAmount: "18862",
          sender: "0x97C1696A2F798b05296150EdB2986ABf7CF9FEa1",
          recipient: "0x97C1696A2F798b05296150EdB2986ABf7CF9FEa1"
        },
      ],
    },
    {
      txnHash:
        "0x2e5a022396ec95e2ac59d734618411f4e6d3b0c8b59071469b2f502466d6c987",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd",
          toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          fromAmount: "598119270582839792150",
          toAmount: "324028352588115361",
          sender: "0x90B99153B2AE260486435B9d4FaF0Bf88DA3B5f2",
          recipient: "0x90B99153B2AE260486435B9d4FaF0Bf88DA3B5f2"
        },
      ],
    },
    {
      txnHash:
        "0x852e98e45dabc1a9568259e6ce2077112b9542ce94d1233beb1ab431866bb9a2",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x155f0DD04424939368972f4e1838687d6a831151",
          fromAmount: "1790000000000",
          toAmount: "158048730445379797757773",
          sender: "0xe62907f77CDA6F23DeE29Ac86479739EF9917D65",
          recipient: "0xe62907f77CDA6F23DeE29Ac86479739EF9917D65"
        },
      ],
    },
    {
      txnHash:
        "0xe09edff01b9c8f9f4684f45cb61cc9bf0401d6b6d58b6f4ec4b0c0f4143ade91",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          fromAmount: "10000000000000",
          toAmount: "18829",
          sender: "0x2F4b2e33a1102e6a541DAb120FB89A7615163428",
          recipient: "0x2F4b2e33a1102e6a541DAb120FB89A7615163428"
        },
      ],
    },
    {
      txnHash:
        "0x82f4b4211b622b7ab93d5ed96bced77d1da05fe641207efe26e5b60fdaf47975",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x346c574C56e1A4aAa8dc88Cda8F7EB12b39947aB",
          fromAmount: "4750000000000000",
          toAmount: "167106446445996",
          sender: "0x811A99C5A695538E26FB0A3786bcA6C65c6c35cA",
          recipient: "0x811A99C5A695538E26FB0A3786bcA6C65c6c35cA"
        },
      ],
    },
    {
      txnHash:
        "0x9e9c6d4d23aacc2875ec1d160f1fc6e9d8a5a037e874f325c8453745ecc572af",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
          toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          fromAmount: "5221640",
          toAmount: "1962660908612943",
          sender: "0x96E193956178c9BEB3a63af118c99cc397888112",
          recipient: "0x96E193956178c9BEB3a63af118c99cc397888112"
        },
      ],
    },
    {
      txnHash:
        "0x3c28ff4b108312af084dabd7799514de1a4538f8f9e32956221c727f74d45c3b",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
          toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          fromAmount: "260754404238882",
          toAmount: "285462332050865",
          sender: "0x5e57B765ee0ff8311531D969400B8a507A80bc05",
          recipient: "0x5e57B765ee0ff8311531D969400B8a507A80bc05"
        },
      ],
    },
    {
      txnHash:
        "0xbacd36d19ba23e1ce8199a0379a95a1a33f6ed16a6ebad6d0cc6ee0569acaac0",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x912CE59144191C1204E64559FE8253a0e49E6548",
          fromAmount: "300000000000000",
          toAmount: "1740187397105323245",
          sender: "0x0fD3d2746E3114fa30C5C3380D3eCB978955E3ED",
          recipient: "0x0fD3d2746E3114fa30C5C3380D3eCB978955E3ED"
        },
      ],
    } 
  ],
};
