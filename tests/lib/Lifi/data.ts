import { ethers } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum LIFI_VERSIONS {
  V1 = "v1",
}

export const lifiData: IProtocolTestingData = {
  [LIFI_VERSIONS.V1]: [
    {
      txnHash:
        "0xe1ba3c570bdb6dd5bd30c170515973d1f3c746a3a6ab9e85e217a2c10101ba5a",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: CHAIN_ID.OPTIMISM,
          fromToken: ethers.ZeroAddress,
          toToken: ethers.ZeroAddress,
          fromAmount: "4034081905893",
          toAmount: "4034081905893",
          sender: "0x21f3f177Caa340da19d64a6d4603c493e1061fCe",
          recipient: "0x21f3f177Caa340da19d64a6d4603c493e1061fCe",
        },
      ],
    },
    {
      txnHash:
        "0x9beb973622391eb0601699de268d475f6a471815cdb8fb266efb3d7b8811c1b3",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: ethers.ZeroAddress,
          toToken: "0x111111125421ca6dc452d289314280a0f8842a65",
          fromAmount: "9114770000000000",
          toAmount:
            "115792089237316195423570985008687907853269984665640564039457531079628222202345",
          sender: "0xdB6D9D4Ae06b843639aB5Ea567aF30ECE0374003",
          recipient: "0xdB6D9D4Ae06b843639aB5Ea567aF30ECE0374003",
        },
      ],
    },
    {
      txnHash:
        "0xeeee6db16353d51705ebde331f58f976ac055f761e70e8326eedbec50ee86eeb",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: ethers.ZeroAddress,
          toToken: "0xf2614a233c7c3e7f08b1f887ba133a13f1eb2c55",
          fromAmount:
            "115792089237316195423570985008687907853269984665640564039457564057528224148974",
          toAmount: "62499427",
          sender: "0x1d2f1255f821aAe2505c9697efa3296106509845",
          recipient: "0x1d2f1255f821aAe2505c9697efa3296106509845",
        },
      ],
    },
    {
      txnHash:
        "0xe7c5e86cc025ad1d91c187d26f285f99bb630d936d9a5036df7cbc4a10d59ee9",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: CHAIN_ID.OPTIMISM,
          fromToken: ethers.ZeroAddress,
          toToken: ethers.ZeroAddress,
          fromAmount: "4034081905893",
          toAmount: "4034081905893",
          sender: "0xb1d11bDc9fE5CfFE252DFc9fc1A411b7eaE9a410",
          recipient: "0xb1d11bDc9fE5CfFE252DFc9fc1A411b7eaE9a410",
        },
      ],
    },
    {
      txnHash:
        "0xc9471f2d81af80a82a2604a3997d3115bcf9ffc418503580da0da7c7c94376c8",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: CHAIN_ID.OPTIMISM,
          fromToken: ethers.ZeroAddress,
          toToken: ethers.ZeroAddress,
          fromAmount: "4034081905893",
          toAmount: "4034081905893",
          sender: "0xD33F9B40aEA5eFA235a18Bd864Fd1e48Ad451028",
          recipient: "0xD33F9B40aEA5eFA235a18Bd864Fd1e48Ad451028",
        },
      ],
    },
    {
      txnHash:
        "0xdcda0af37c77c4159382e698cdc77e9522b7fadcd5df47a214e360646440c3d9",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: CHAIN_ID.OPTIMISM,
          fromToken: ethers.ZeroAddress,
          toToken: ethers.ZeroAddress,
          fromAmount: "4034081905893",
          toAmount: "4034081905893",
          sender: "0xB03c1B74194693DCA4D974A6Cecb521bBA07e38e",
          recipient: "0xB03c1B74194693DCA4D974A6Cecb521bBA07e38e",
        },
      ],
    },
    {
      txnHash:
        "0x8d4ecba9f39324dff431d56231654077fbeed47133ce98ffe3ee5bc5b19dd49b",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: ethers.ZeroAddress,
          toToken: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae",
          fromAmount: "69031806925904565431",
          toAmount:
            "115792089237316195423570985008687907853269984665640564039457584007912772592150",
          sender: "0xA7b1ACb8E4eb82868936c2Ceb1D1C18e1eC5be31",
          recipient: "0xA7b1ACb8E4eb82868936c2Ceb1D1C18e1eC5be31",
        },
      ],
    },
    {
      txnHash:
        "0xbd5166de17306a5f36d7e0b544e41a23dd8da94ffda24d4c410641a3c88c342d",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: ethers.ZeroAddress,
          toToken: "0x111111125421ca6dc452d289314280a0f8842a65",
          fromAmount: "516735602",
          toAmount:
            "115792089237316195423570985008687907853269984665640564039457584007912613162817",
          sender: "0xc7E282C2503Aa01b73bbD7Ad020A241cAff4b215",
          recipient: "0xc7E282C2503Aa01b73bbD7Ad020A241cAff4b215",
        },
      ],
    },
  ],
};
