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
          fromAmount: "66083849681558975",
          toAmount: "66083849681558975",
          sender: "0x21f3f177caa340da19d64a6d4603c493e1061fce",
          recipient: "0x21f3f177caa340da19d64a6d4603c493e1061fce",
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
          toToken: "0xa14a26bb46e236da394da6b09a5b4cf737ce707b",
          fromAmount: "9114770000000000",
          toAmount:
            "52928284907437591",
          sender: "0xdb6d9d4ae06b843639ab5ea567af30ece0374003",
          recipient: "0xdb6d9d4ae06b843639ab5ea567af30ece0374003",
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
          toToken: ethers.ZeroAddress,
          fromAmount:
            "150000000",
          toAmount: "47907234518907634",
          sender: "0x1d2f1255f821aae2505c9697efa3296106509845",
          recipient: "0x1d2f1255f821aae2505c9697efa3296106509845",
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
          fromAmount: "67615733382224821",
          toAmount: "67615733382224821",
          sender: "0xb1d11bdc9fe5cffe252dfc9fc1a411b7eae9a410",
          recipient: "0xb1d11bdc9fe5cffe252dfc9fc1a411b7eae9a410",
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
          fromAmount: "159366178141216050",
          toAmount: "159366178141216050",
          sender: "0xd33f9b40aea5efa235a18bd864fd1e48ad451028",
          recipient: "0xd33f9b40aea5efa235a18bd864fd1e48ad451028",
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
          fromAmount: "169403467598000000",
          toAmount: "169403467598000000",
          sender: "0xb03c1b74194693dca4d974a6cecb521bba07e38e",
          recipient: "0xb03c1b74194693dca4d974a6cecb521bba07e38e",
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
          toToken: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
          fromAmount: "69031806925904565431",
          toAmount:
            "357047786",
          sender: "0xa7b1acb8e4eb82868936c2ceb1d1c18e1ec5be31",
          recipient: "0xa7b1acb8e4eb82868936c2ceb1d1c18e1ec5be31",
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
          toToken: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
          fromAmount: "516735602",
          toAmount:
            "516477119",
          sender: "0xc7e282c2503aa01b73bbd7ad020a241caff4b215",
          recipient: "0xc7e282c2503aa01b73bbd7ad020a241caff4b215",
        },
      ],
    },
  ],
};
