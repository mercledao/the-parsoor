import { ethers } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum OPENOCEAN_EXCHANGE_VERSION {
  V1 = "v1",
}

export const openOceanData: IProtocolTestingData = {
  [OPENOCEAN_EXCHANGE_VERSION.V1]: [
    {
      txnHash:
        "0x14bda9bf35607a5fb0a3cb529607e8b040891229ac4da9e74da879e2919195f0",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xc08Cd26474722cE93F4D0c34D16201461c10AA8C",
          toToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          fromAmount: "49939586013168135658",
          toAmount: "22300830",
          sender: "0xA37234F6b0c76068F104FB0659899256dFf249Af",
          recipient: "0xA37234F6b0c76068F104FB0659899256dFf249Af",
        },
      ],
    },
    {
      txnHash:
        "0x273078c5826543a11f1854f2cd3c03f2d946599cee10174548220a308d008aa0",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          fromAmount: "2158993589018349",
          toAmount: "4037033",
          sender: "0x7b3A6C93519e30a0076cFf368D9355e105387A3e",
          recipient: "0x7b3A6C93519e30a0076cFf368D9355e105387A3e",
        },
      ],
    },
    {
      txnHash:
        "0x261b450d37eb1a7622e197110847f328565f8d2575fa045a042ddae8fa936922",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          fromAmount: "27000",
          toAmount: "14320131247334",
          sender: "0xFbe450C7e2033B17E2995Edd0849Dc7A202F12b3",
          recipient: "0xFbe450C7e2033B17E2995Edd0849Dc7A202F12b3",
        },
      ],
    },
    {
      txnHash:
        "0x5585e25ac7d4d7d0ba3d9c075f32fb755f140893a556b7b6cfa08108919fdf78",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          toToken: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
          fromAmount: "32000000",
          toAmount: "38140",
          sender: "0x899782873c12FC1743d3e10Ec25D291691f2d9B1",
          recipient: "0x899782873c12FC1743d3e10Ec25D291691f2d9B1",
        },
      ],
    },
    {
      txnHash:
        "0x0102a4da2960597e6be850610c555fe240ade742dc50ab4185e81767abc44600",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E",
            toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            fromAmount: "31944821296",
            toAmount: "1154977083332",
            sender: "0xD5d1f2fbf451003c1e55b7b8eEb4CeD1058C21bB",
            recipient: "0xD5d1f2fbf451003c1e55b7b8eEb4CeD1058C21bB",
          },
      ],
    },
    {
      txnHash:
        "0xa1ccae4acf804a7a1c18eef2f41e8d82e975077083d4e11628f69c2753ee1954",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
          toToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          fromAmount: "27990519545749921989",
          toAmount: "5128831823",
          sender: "0x39041F1B366fE33F9A5a79dE5120F2Aee2577ebc",
          recipient: "0x39041F1B366fE33F9A5a79dE5120F2Aee2577ebc",
        },
      ],
    },
    {
      txnHash:
        "0xe9cf2c20818d24a2ad5de9018e336947d6434fec8717601e3ed13e240f64823b",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x40FD72257597aA14C7231A7B1aaa29Fce868F677",
          fromAmount: "920000000000000",
          toAmount: "1866195440263554302934454986343447",
          sender: "0x966e71004AB08498063c74e5E4ae893e358dfe77",
          recipient: "0x966e71004AB08498063c74e5E4ae893e358dfe77",
        },
      ],
    },
    {
      txnHash:
        "0x036ebbf88ba4c856f84f62267f1520f89f7d92ed25c97b40b42eb8e352d90f8b",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x5CAc718A3AE330d361e39244BF9e67AB17514CE8",
          fromAmount: "28966938513166000",
          toAmount: "11138095540573035880868",
          sender: "0xdA3CaA869383a77eb6f38C5175B6794ccefEe259",
          recipient: "0xdA3CaA869383a77eb6f38C5175B6794ccefEe259",
        },
      ],
    },
  ],
};
