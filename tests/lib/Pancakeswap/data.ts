import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum PANCAKESWAP_VERSIONS {
  V3 = "v3",
  V2 = "V2",
}

export const pancakeswapData: IProtocolTestingData = {
  [PANCAKESWAP_VERSIONS.V3]: [
    {
      txnHash:
        "0x94b6bc80d0c903e5e73f01dd538563e3322125522f7cf8c979aa3498b79630f1",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xde4EE8057785A7e8e800Db58F9784845A5C2Cbd6",
          toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          fromAmount: "60368223570000000000",
          toAmount: "385785880692453035",
          recipient: "0x4c5f6AD6628D205259443ebcF6cc4cDD7D6cbf81",
        },
      ],
    },
    {
      txnHash:
        "0x3d14ab8cd5ac9ec6771d00edf5cb5316c588886e3a2731ae5e33059b4f115e09",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          fromAmount: "100052826",
          toAmount: "31310247625857817",
          recipient: "0x0000000000000000000000000000000000000002",
        },
      ],
    },
    {
      txnHash:
        "0x511ee3a14dffa1a0df912dd3414fd882199e1b54d61fb09d1a03cb09835c4ae9",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          fromAmount: "5001075",
          toAmount: "1553570794995761",
          recipient: "0x0000000000000000000000000000000000000002",
        },
      ],
    },
    {
      txnHash:
        "0x6be353a29cfe5badf5f647cc321647178f8a0ba4384a49a9c25fc8f0215d32ba",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          fromAmount: "9900000000",
          toAmount: "9893419933",
          recipient: "0xB0d9E49ECe31d6779e77C1ECA01110C460A6F106",
        },
      ],
    },
  ],
  [PANCAKESWAP_VERSIONS.V2]: [
    {
      txnHash:
        "0x74e487e41a32f1e065a45e14ec54ea800939bfbffd9c05b11f07e32aef5d658c",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          toToken: "0x94fCD9c18f99538C0f7C61c5500cA79F0D5C4dab",
          fromAmount: "65000000",
          toAmount: "181052374527533741139",
          recipient: "0x464fC339aDD314932920d3e060745bd7Ea3e92AD",
        },
      ],
    },
  ],
};
