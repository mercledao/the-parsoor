import { ethers } from "ethers";
import { ACTION_ENUM, CHAIN_ID, IProtocolTestingData } from "../../../src";

export enum ALLBRIDGE_VERSIONS {
  V1 = "v1",
}

export const AllBridgeData: IProtocolTestingData = {
  [ALLBRIDGE_VERSIONS.V1]: [
    // {
    //   txnHash:
    //     "0x8ee0ac9a27cc52914242ba5d54b6d77b47b77fe938cfa0a930f342c55138766d",
    //   chainId: CHAIN_ID.ARBITRUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_OUT,
    //       fromChain: CHAIN_ID.ARBITRUM,
    //       toChain: CHAIN_ID.SUI,
    //       fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    //       toToken:
    //         "DBA34672E30CB065B1F93E3AB55318768FD6FEF66C15942C9F7CB846E2F900E7",
    //       fromAmount: "1005977540",
    //       toAmount: "1005628",
    //       sender: "0x83FaD94eAa0FA69df6A9F13f7c3577Be6180b3BB",
    //       recipient:
    //         "AC37A67872665F67F180C23A699C85CF82E6236140DA220354FFF1303A9598AB",
    //     },
    //   ],
    // },
    // {
    //   txnHash:
    //     "0xce901d641afb4608eabc5f84dfa3ed2a39e9d1f2089d2dff6ac317bd8e87fa5c",
    //   chainId: CHAIN_ID.ARBITRUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_IN,
    //       fromChain: CHAIN_ID.SOLANA,
    //       toChain: CHAIN_ID.ARBITRUM,
    //       fromToken: null,
    //       toToken:
    //         "0x000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e5831",
    //       fromAmount: null,
    //       toAmount: "5102",
    //       sender: null,
    //       recipient:
    //         "0x000000000000000000000000322dd84528e33591102202b0017c42ed4f8df732",
    //     },
    //   ],
    // },
    // {
    //   txnHash:
    //     "0xbc8fb7436c5782c3ee4e5e0455e7dfcdc182e4f863f9193cbed4e416190129d7",
    //   chainId: CHAIN_ID.ARBITRUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_IN,
    //       fromChain: CHAIN_ID.SOLANA,
    //       toChain: CHAIN_ID.ARBITRUM,
    //       fromToken: null,
    //       toToken:
    //         "0x000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e5831",
    //       fromAmount: null,
    //       toAmount: "4674766",
    //       sender: null,
    //       recipient:
    //         "0x0000000000000000000000007a639f6dc5361a3e8c998c9d0aac55e33d34d2ff",
    //     },
    //   ],
    // },
    // {
    //   txnHash:
    //     "0xa925a73cd6cb588be09340e9a2a59a6af819b481ec0fa35f4e5c14e6732f5fac",
    //   chainId: CHAIN_ID.ARBITRUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_OUT,
    //       fromChain: CHAIN_ID.ARBITRUM,
    //       toChain: CHAIN_ID.AVALANCHE,
    //       fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    //       toToken:
    //         "000000000000000000000000B97EF9EF8734C71904D8002F8B6BC66DD9C48A6E",
    //       fromAmount: "35000000",
    //       toAmount: "34975",
    //       sender: "0xb2474c9Cae8443aF7a3A13Ee29d486750509f4E2",
    //       recipient:
    //         "000000000000000000000000B2474C9CAE8443AF7A3A13EE29D486750509F4E2",
    //     },
    //   ],
    // },
    // {
    //   txnHash:
    //     "0x1e67b280fba0e7dfac765b934b73dcffcf3743a700f81ccd4e794e24e4946a21",
    //   chainId: CHAIN_ID.ETHEREUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_OUT,
    //       fromChain: CHAIN_ID.ETHEREUM,
    //       toChain: CHAIN_ID.TRON,
    //       fromToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    //       toToken:
    //         "000000000000000000000000A614F803B6FD780986A42C78EC9C7F77E6DED13C",
    //       fromAmount: "423612743",
    //       toAmount: "422397",
    //       sender: "0xad268a68DC09638b44eC458B53a21F54b8Dbc712",
    //       recipient:
    //         "00000000000000000000000026F45A3AB387884E6BD5CBDADB37B23E9414DD65",
    //     },
    //   ],
    // },
    // {
    //   txnHash:
    //     "0x9fa8f6c1140631923126412e6974cf9456582fb14e4d8d59a88340e5b60c73b3",
    //   chainId: CHAIN_ID.ETHEREUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_OUT,
    //       fromChain: CHAIN_ID.ETHEREUM,
    //       toChain: CHAIN_ID.SOLANA,
    //       fromToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    //       toToken:
    //         "CE010E60AFEDB22717BD63192F54145A3F965A33BB82D2C7029EB2CE1E208264",
    //       fromAmount: "2000000000",
    //       toAmount: "1998187",
    //       sender: "0x26E7b266260D0Cb8C4eF7727D5Cb48d4AF2641fd",
    //       recipient:
    //         "A5C5C0EE97FB1E00E56B005D7E80ED385B09B1DFEB7DE5041FB273F100AECAB5",
    //     },
    //   ],
    // },
    // {
    //   txnHash:
    //     "0xa533b8b5a0828c30334cf5a7185f0dde90daefedff9b1f1df5ccd3abe776b1bd",
    //   chainId: CHAIN_ID.ETHEREUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_IN,
    //       fromChain: CHAIN_ID.TRON,
    //       toChain: CHAIN_ID.ETHEREUM,
    //       fromToken: null,
    //       toToken:
    //         "0x000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    //       fromAmount: null,
    //       toAmount: "9475937",
    //       sender: null,
    //       recipient:
    //         "0x0000000000000000000000008db46cfa174413c4dc25a34e5a8a05d603eaec66",
    //     },
    //   ],
    // },
    {
      txnHash:
        "0x4b2fe6a4d02f1ae4d469b9ae6f070f2b2cf637c636f821328b75a5994c5508ea",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "000000000000000000000000DAC17F958D2EE523A2206206994597C13D831EC7",
          toToken: "000000000000000000000000A0B86991C6218B36C1D19D4A2E9EB0CE3606EB48",
          fromAmount: "8144919516",
          toAmount: "8117696164",
          sender: "0xB4b01dD276D394262370277b5141ce9227AFd775",
          recipient: "0xB4b01dD276D394262370277b5141ce9227AFd775",
        },
      ],
    },
    {
        txnHash:
          "0x190b472f30bd8c79c5167ac67da2ef89cdaf7214acd3031e110c8e5788047bdc",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "000000000000000000000000A0B86991C6218B36C1D19D4A2E9EB0CE3606EB48",
            toToken: "000000000000000000000000DAC17F958D2EE523A2206206994597C13D831EC7",
            fromAmount: "19146138885",
            toAmount: "19074107857",
            sender: "0x299F923aF7eEf619F58c7A564A8a7AEa151b4dF4",
            recipient: "0x9aFb9E3A636B340F4f5e89CebA5E2D779daDEEF4",
          },
        ],
    },
    {
        txnHash:
          "0xc64c74bec0467abe56ccec37b8e976453de2d537396fd230c5bd7824e78271bf",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "000000000000000000000000AF88D065E77C8CC2239327C5EDB3A432268E5831",
            toToken: "000000000000000000000000FD086BC7CD5C481DCC9C85EBE478A1C0B69FCBB9",
            fromAmount: "620000000",
            toAmount: "618963161",
            sender: "0xBc82C721e094d3a4C23bF0cF70c86c67Dd94E1AF",
            recipient: "0xBc82C721e094d3a4C23bF0cF70c86c67Dd94E1AF",
          },
        ],
    },
  ],
};
