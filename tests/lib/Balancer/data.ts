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
          fromToken: "0xd09ACb80C1E8f2291862c4978A008791c9167003",
          toToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
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
          fromToken: "0xe1B4d34E8754600962Cd944B535180Bd758E6c2e",
          toToken: "0x0000000000000000000000000000000000000000",
          fromAmount: "97862895782597913",
          toAmount: null,
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
          fromToken: "0xC0c293ce456fF0ED870ADd98a0828Dd4d2903DBF",
          toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
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
  ],
  [BALANCER_VERSIONS.V3]: [
    {
      txnHash:
        "0x569fb9fa551abb141766268828b8badf9114c79f9c8d61f01aaabaf086f3f4f0",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: CHAIN_ID.BASE.toString(),
          toChain: CHAIN_ID.ARBITRUM,
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
          fromAmount: "30085448776876509",
          toAmount: "29926828012176636",
          sender: "0xbA7Cb627C63Bb369f767f032eF5b44183970C771",
          recipient: "0xbA7Cb627C63Bb369f767f032eF5b44183970C771",
        },
      ],
    },
    {
      txnHash:
        "0xdea409f9c8bebc0b95f80d5673890b7d7605527147f788f0d36103754ebaacf3",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: "7777777",
          toChain: CHAIN_ID.OPTIMISM,
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "78000000000000000",
          toAmount: "77948542083744230",
          sender: "0xE2c14A66Dd4cdbA65428244d99791FA498428CBE",
          recipient: "0xE2c14A66Dd4cdbA65428244d99791FA498428CBE",
        },
      ],
    },
    {
      txnHash:
        "0xb4a4c4fae73433128164cf26d3679fd2c2eb9dd1b360b550e04dbd5de169323f",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.OPTIMISM,
          toChain: CHAIN_ID.BASE.toString(),
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "110000000000000000",
          toAmount: "109974609061483935",
          sender: "0x27CDcD479c713da07072959F3bA5055D23d384Bb",
          recipient: "0x27CDcD479c713da07072959F3bA5055D23d384Bb",
        },
      ],
    },
    {
      txnHash:
        "0xdea409f9c8bebc0b95f80d5673890b7d7605527147f788f0d36103754ebaacf3",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: "7777777",
          toChain: CHAIN_ID.OPTIMISM,
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "78000000000000000",
          toAmount: "77948542083744230",
          sender: "0xE2c14A66Dd4cdbA65428244d99791FA498428CBE",
          recipient: "0xE2c14A66Dd4cdbA65428244d99791FA498428CBE",
        },
      ],
    },
    {
      txnHash:
        "0x20a329d2eab4ae1246c6ecebd3c5b0317f4ae0797e2c1a6070a805840007a32d",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.OPTIMISM,
          toChain: CHAIN_ID.BASE.toString(),
          fromToken: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
          toToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          fromAmount: "1007637",
          toAmount: "968258",
          sender: "0x5a59aDb668d4E714c18654a1Dfa7A0c1257fE33C",
          recipient: "0x5a59aDb668d4E714c18654a1Dfa7A0c1257fE33C",
        },
      ],
    },
    {
      txnHash:
        "0xed0aac0c6fe671fdf9c556f88abad54fdfb38d3c2fbd8cff9b96016f534bb7f6",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.OPTIMISM,
          toChain: CHAIN_ID.BASE.toString(),
          fromToken: "0x4200000000000000000000000000000000000006",
          toToken: "0x4200000000000000000000000000000000000006",
          fromAmount: "1400000000000000",
          toAmount: "1391062143320277",
          sender: "0xBbD59ed30c11d7ac507da89D216b07003FDD12C3",
          recipient: "0xBbD59ed30c11d7ac507da89D216b07003FDD12C3",
        },
      ],
    },
  ],
};
