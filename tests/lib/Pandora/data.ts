import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestTransaction } from "../../../src/types/chunks/ITestingData";

export enum PANDORA_VERSIONS {
  V2 = "v2",
  V3 = "v3",
}

export const pandoraData: Record<PANDORA_VERSIONS, IProtocolTestTransaction[]> =
  {
    [PANDORA_VERSIONS.V2]: [
      // {
      //   txnHash:
      //     "0xf18579705a1004524ff7fb538085387b107f74a8902f28fb48b8db25fa54b483",
      //   chainId: CHAIN_ID.ABSTRACT,
      //   emittedActions: [
      //     {
      //       type: ACTION_ENUM.SINGLE_SWAP,
      //       fromToken: "0x3520fC294a76c119C8924072c37992e39a626f85",
      //       toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
      //       fromAmount: "40287901777572858000000",
      //       toAmount: "19930430356424029",
      //       recipient: "0x49e83e302bAE2883843Dc25651aa74628A251a9A",
      //       sender: "0x49e83e302bAE2883843Dc25651aa74628A251a9A",
      //     },
      //   ],
      // },
      // {
      //   txnHash:
      //     "0x203053698180e275b127c4671428c509ca2c257e104e43b0cc0edf3bca20753f",
      //   chainId: CHAIN_ID.ABSTRACT,
      //   emittedActions: [
      //     {
      //       type: ACTION_ENUM.SINGLE_SWAP,
      //       fromToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
      //       toToken: "0x60ED5CE0D66554AC63EDD35F4F91181f747Ae8C6",
      //       fromAmount: "229500000000000000",
      //       toAmount: "148093727297668572366817",
      //       recipient: "0x0eD07A108Ff1C66d483a194acbC12026f20F8949",
      //     },
      //   ],
      // },
      // {
      //   txnHash:
      //     "0xbaeea72b97cd67a625e21ae779f9884123565b15454bacd842cdcb4f83d094e9",
      //   chainId: CHAIN_ID.ABSTRACT,
      //   emittedActions: [
      //     {
      //       type: ACTION_ENUM.SINGLE_SWAP,
      //       fromToken: "0x60ED5CE0D66554AC63EDD35F4F91181f747Ae8C6",
      //       toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
      //       fromAmount: "97723817260815920000000",
      //       toAmount: "152399028843204625",
      //       recipient: "0x46BE16B349B84764a2f536D2EB39e0F2Ce62af61",
      //       sender: "0x46BE16B349B84764a2f536D2EB39e0F2Ce62af61",
      //     },
      //   ],
      // },
      // {
      //   txnHash:
      //     "0xd86bcb89296539ad6dfe10118e2fc0344318b0d0615276c17de31d2d36119309",
      //   chainId: CHAIN_ID.ABSTRACT,
      //   emittedActions: [
      //     {
      //       type: ACTION_ENUM.SINGLE_SWAP,
      //       fromToken: "0x3520fC294a76c119C8924072c37992e39a626f85",
      //       toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
      //       fromAmount: "69637818540267428000000",
      //       toAmount: "34184229498641995",
      //       recipient: "0xed0Ee37dD434ED57FF1a5Ccf1cd616A3184A12EC",
      //       sender: "0xed0Ee37dD434ED57FF1a5Ccf1cd616A3184A12EC",
      //     },
      //   ],
      // },
      // {
      //   txnHash:
      //     "0x5e21a9d89dcbffada770f327eb00867d300338e859d9f51aae9a9d42ccaef25b",
      //   chainId: CHAIN_ID.ABSTRACT,
      //   emittedActions: [
      //     {
      //       type: ACTION_ENUM.SINGLE_SWAP,
      //       fromToken: "0x3520fC294a76c119C8924072c37992e39a626f85",
      //       toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
      //       fromAmount: "78796684727106325000000",
      //       toAmount: "39097491489330221",
      //       recipient: "0x5a2de1F663062C5fAdc108F4dd17053a338502A6",
      //       sender: "0x5a2de1F663062C5fAdc108F4dd17053a338502A6",
      //     },
      //   ],
      // },
      // {
      //   txnHash:
      //     "0x88a9cfba21a73c3a42245e6d9fb5a4e255d1e01cceee9b42d544ed5fa807ddea",
      //   chainId: CHAIN_ID.ABSTRACT,
      //   emittedActions: [
      //     {
      //       type: ACTION_ENUM.SINGLE_SWAP,
      //       fromToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
      //       toToken: "0x60ED5CE0D66554AC63EDD35F4F91181f747Ae8C6",
      //       fromAmount: "82700000000000000",
      //       toAmount: "54835775512406124791309",
      //       recipient: "0xC02085e98c4BF9a74B5be00795D5D966A03F5dcC",
      //     },
      //   ],
      // },
      // {
      //   txnHash:
      //     "0x9a08124fa59e501929fe8996a34fc7dd413855d251ae1e5cba5e865734c87a7e",
      //   chainId: CHAIN_ID.ABSTRACT,
      //   emittedActions: [
      //     {
      //       type: ACTION_ENUM.SINGLE_SWAP,
      //       fromToken: "0x60ED5CE0D66554AC63EDD35F4F91181f747Ae8C6",
      //       toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
      //       fromAmount: "12421092108913666000000",
      //       toAmount: "18472452244688926",
      //       recipient: "0xa6a42C77851Af5e48cDF7b785b3cACa0bD9E8360",
      //       sender: "0xa6a42C77851Af5e48cDF7b785b3cACa0bD9E8360",
      //     },
      //   ],
      // },
      //   {
      //     txnHash:
      //       "0x0ee1cd9807f2fa4eb043e61ae67ee93317f3607d00c408b59b0efa39712a74ad",
      //     chainId: CHAIN_ID.ABSTRACT,
      //     emittedActions: [
      //       {
      //         type: ACTION_ENUM.SINGLE_SWAP,
      //         fromToken: "0x84A71ccD554Cc1b02749b35d22F684CC8ec987e1",
      //         toToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
      //         fromAmount: "1835086",
      //         toAmount: "1003621715447457",
      //         recipient: "0xA2069bcfbEef085C2868F292aB440C764A7F2dE9",
      //       },
      //     ],
      //   },
      {
        txnHash:
          "0x975f2f78e6658d263b46c9816d22d9028535284d9b2a1369f0564c7d42b3a6ad",
        chainId: CHAIN_ID.ABSTRACT,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
            toToken: "0x0709F39376dEEe2A2dfC94A58EdEb2Eb9DF012bD",
            fromAmount: "3000000000000000",
            toAmount: "5454745",
            recipient: "0x934a22d609b3482B7249DE385d59DA09bdf032c7",
          },
        ],
      },
    ],
    [PANDORA_VERSIONS.V3]: [
      //   {
      //     txnHash:
      //       "0xc1baf4d9817b20f8712d0d51db5da7ad6936a7c9c831e2ef4939f8d3265bdfb5",
      //     chainId: CHAIN_ID.ETHEREUM,
      //     emittedActions: [
      //       {
      //         type: ACTION_ENUM.SINGLE_SWAP,
      //         fromToken: "0x504624040e0642921C2c266a9aC37CafBd8cDa4e",
      //         toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      //         fromAmount: "31424733720346442548",
      //         toAmount: "40764116796129508",
      //         recipient: "0xf7C153e84a71c14C20a9D970A96a141fA71E574e",
      //       },
      //     ],
      //   },
    ],
  };
