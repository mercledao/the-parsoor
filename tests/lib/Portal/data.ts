import { ZeroAddress } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum PORTAL_VERSION {
  V1 = "v1",
}

export const portalData: IProtocolTestingData = {
  [PORTAL_VERSION.V1]: [
    // {
    //   txnHash:
    //     "0x45ec697c44878ec68f337f7fd33c4840757cbd07618231139e6a513682e92fdf",
    //   chainId: CHAIN_ID.ETHEREUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_OUT,
    //       fromChain: CHAIN_ID.ETHEREUM,
    //       toChain: CHAIN_ID.SUI,
    //       fromToken: ZeroAddress,
    //       toToken: null,
    //       fromAmount: "127300000000000000",
    //       toAmount: null,
    //       sender: "0x396D44959fC903ab757bE6677eE5ef52bbcec250",
    //       recipient: "0x6fd9bf0c9f99dbf1214a28853358750a126e2aecd88a598ea46996d94cf19e71",
    //     },
    //   ],
    // },
    // {
    //   txnHash:
    //     "0x9632034c2eecfce3b4b4207a6bf1f17fa419de7e0bd0b801ea05cdae9bb452b0",
    //   chainId: CHAIN_ID.ETHEREUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_OUT,
    //       fromChain: CHAIN_ID.ETHEREUM,
    //       toChain: CHAIN_ID.SOLANA,
    //       fromToken: ZeroAddress,
    //       toToken: null,
    //       fromAmount: "20000000000000000000",
    //       toAmount: null,
    //       sender: "0xC66F2bF012061173AfD4643e0a312bfeB0680699",
    //       recipient: "0x0706f22f8a3d875143cc70ad4d1bc1fd424733f509545e0873a2a05999837551",
    //     },
    //   ],
    // },
    // {
    //   txnHash:
    //     "0x32f6ce8b653c6b8a640e0042a38078d9f26cc2a33be048ddc726885df1fb97fb",
    //   chainId: CHAIN_ID.ETHEREUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_OUT,
    //       fromChain: CHAIN_ID.ETHEREUM,
    //       toChain: CHAIN_ID.SOLANA,
    //       fromToken: ZeroAddress,
    //       toToken: null,
    //       fromAmount: "102600000000000000000",
    //       toAmount: null,
    //       sender: "0x78BD8100b8adba2a6cdb2DE23d9035a296Bc575B",
    //       recipient: "0x6d8a136c0d7fd4fdf0171e6c59d3b482e615a2a005e0c5e3dba05d6596998baa",
    //     },
    //   ],
    // },
    // {
    //   txnHash:
    //     "0x5c2f267a2832a9e17b3fe29a2aed4a5727bd8e2ccce144979580b1217a1f70f1",
    //   chainId: CHAIN_ID.ETHEREUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_OUT,
    //       fromChain: CHAIN_ID.ETHEREUM,
    //       toChain: CHAIN_ID.SOLANA,
    //       fromToken: "0xE0f63A424a4439cBE457D80E4f4b51aD25b2c56C",
    //       toToken: null,
    //       fromAmount: "1958322396200",
    //       toAmount: null,
    //       sender: "0xcA74F404E0C7bfA35B13B511097df966D5a65597",
    //       recipient: "0xc98ce0744609710f472525a67a5c64cf448eadd4a8d4839b6a0bf8477b8943c5",
    //     },
    //   ],
    // },
    // {
    //   txnHash:
    //     "0x8d182fb791b228fde21843d1f77d41383d96f0c18bd8daeb2aeb2b6915fe124c",
    //   chainId: CHAIN_ID.ETHEREUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_OUT,
    //       fromChain: CHAIN_ID.ETHEREUM,
    //       toChain: CHAIN_ID.POLYGON,
    //       fromToken: "0xdc9CB148ECb70876db0aBeB92f515a5E1dc9f580",
    //       toToken: null,
    //       fromAmount: "23105000000000000000000",
    //       toAmount: null,
    //       sender: "0xF087FF03FC3f11271FF0093205b6064e148FC693",
    //       recipient: "0x000000000000000000000000f087ff03fc3f11271ff0093205b6064e148fc693",
    //     },
    //   ],
    // },
    // {
    //   txnHash:
    //     "0x04f3ec1a4aba3a123a0d3490757640a613de1f45ab0ac9cc4289840877468384",
    //   chainId: CHAIN_ID.ARBITRUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_OUT,
    //       fromChain: CHAIN_ID.ARBITRUM,
    //       toChain: CHAIN_ID.ETHEREUM,
    //       fromToken: "0x4d9bC302dAeBB70F12E8b6A828F9FABAF8e17345",
    //       toToken: null,
    //       fromAmount: "117711433750389999999999",
    //       toAmount: null,
    //       sender: "0x0a6c69327d517568E6308F1E1CD2fD2B2b3cd4BF",
    //       recipient: "0x0000000000000000000000000a6c69327d517568e6308f1e1cd2fd2b2b3cd4bf",
    //     },
    //   ],
    // },
    // {
    //   txnHash:
    //     "0x79cd001e6d4e6a220025d79a03ef0503e50a09bb3fd6cb4eea532c74f373f286",
    //   chainId: CHAIN_ID.ETHEREUM,
    //   emittedActions: [
    //     {
    //       type: ACTION_ENUM.BRIDGE_OUT,
    //       fromChain: CHAIN_ID.ETHEREUM,
    //       toChain: CHAIN_ID.MOONBEAM,
    //       fromToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    //       toToken: null,
    //       fromAmount: "2000000",
    //       toAmount: null,
    //       sender: "0x384c2D5CE3050b59ef7C9c12699883cD426FF985",
    //       recipient: "0x0000000000000000000000000000000000000000000000000000000000000816",
    //     },
    //   ],
    // },
    {
      txnHash:
        "0xd74d6d4493674d0c3bfe765bf0a1c9103262b19746e40efe774f931ff3d1d2d5",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: CHAIN_ID.MOONBEAM,
          fromToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          toToken: null,
          fromAmount: "2000000",
          toAmount: null,
          sender: "0x384c2D5CE3050b59ef7C9c12699883cD426FF985",
          recipient: "0x0000000000000000000000000000000000000000000000000000000000000816",
        },
      ],
    },
  ],
};
