import { ZeroAddress } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum BALANCER_VERSIONS {
  V3 = "v3",
  V2 = "v2",
}

export const BalancerData: IProtocolTestingData = {
  [BALANCER_VERSIONS.V2]: [
    {
      txnHash:
        "0x59c350ffb8fb64c3cbba0eb8a8993ea4e7a0a6ab819bee547263af1f441f3655",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x3082CC23568eA640225c2467653dB90e9250AaA0",
          toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
          fromAmount: "363536100293172399256",
          toAmount: "5138064656103318",
          sender: "0x49e1aC3644B6eB7Cb494EB435669cCb98F06D555",
          recipient: "0x49e1aC3644B6eB7Cb494EB435669cCb98F06D555",
        },
      ],
    },
    {
      txnHash:
        "0xa7bcfc7148e3ce9e032d98c9671c1d843e4fed8c99e5c4294974a600f111e741",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xd09acb80c1e8f2291862c4978a008791c9167003",
          toToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          fromAmount: "21000000000000000",
          toAmount: "82299597",
          sender: "0x025E545E693CfEB629bB5B7Be72fEA50Fa772774",
          recipient: "0x025E545E693CfEB629bB5B7Be72fEA50Fa772774",
        },
      ],
    },
    {
      txnHash:
        "0xda046f73c72566fa44a38cd4986a940124ccc2a13203b70a621d5cbd0800ec7e",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xe1b4d34e8754600962cd944b535180bd758e6c2e",
          toToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          fromAmount: "97862895782597913",
          toAmount: "100434541789404090",
          sender: "0x4CFb224C7886B3054f97b5D4140B5F3D2B9724c5",
          recipient: "0x4CFb224C7886B3054f97b5D4140B5F3D2B9724c5",
        },
      ],
    },
    {
      txnHash:
        "0x5c5a0068b2f25a43c792f98884c911ba04df78d95a74efea394f552ddd9ad320",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xc0c293ce456ff0ed870add98a0828dd4d2903dbf",
          toToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          fromAmount: "113495381560000000000",
          toAmount: "43826400",
          sender: "0x355BA13eae7c2fb83DDa80790395957238eA323A",
          recipient: "0x355BA13eae7c2fb83DDa80790395957238eA323A",
        },
      ],
    },
    {
      txnHash:
        "0x713bbd4b8416c9de6e54fd5b3340778c14ab0fd71608a671ae40f1d319487144",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          toToken: "0x320623b8E4fF03373931769A31Fc52A4E78B5d70",
          fromAmount: "411176819564285389",
          toAmount: "107568296955759202140160",
          sender: "0x7dCC00d0Da47e6982672CB1C2481A6943737af45",
          recipient: "0xa71E0cF4A779d2f53042F5605f63826740832850",
        },
      ],
    },
  ]
};
