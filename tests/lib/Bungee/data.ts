import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum BUNGEE_VERSION {
  V1 = "v1",
}

export const bungeeBridgeData: IProtocolTestingData = {
  [BUNGEE_VERSION.V1]: [
    {
      txnHash:
        "0x9a688989440bb59f53b01ab109487d0764ce7d3d7ee964b75f69e3f4a6ca2cff",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: CHAIN_ID.ZKSYNC_ERA.toString(),
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: null,
          fromAmount: "15080000",
          toAmount: null,
          sender: "0x1E0C997bf4eD17e058eDFF20A6784c71F4E8B094",
          recipient: "0x1E0C997bf4eD17e058eDFF20A6784c71F4E8B094",
        },
      ],
    },
    {
      txnHash:
        "0xecbcebb07aa6b167a566d4eccc2c0496816f7ce6afccb0869302b9cf8bf87611",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          toToken: "0x35751007a407ca6FEFfE80b3cB397736D2cf4dbe",
          fromAmount: "48210100",
          toAmount: "14010264271332169",
          sender: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
          recipient: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        },
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: CHAIN_ID.POLYGON.toString(),
          fromToken: "0x35751007a407ca6FEFfE80b3cB397736D2cf4dbe",
          toToken: null,
          fromAmount: "14010264271332169",
          toAmount: null,
          sender: "0xeeB17aDeFd06A3c67aBD4AdF7E42978B1f018c8e",
          recipient: "0x1881ad6e231a14A8Be0f9AE6f9EFd8f3CFb09919",
        },
      ],
    },
    {
      txnHash:
        "0x8481f4895c38329cd36c7b6699da59956ccb33a5d11ebaf20f54e4ee7cf0ee54",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: CHAIN_ID.BASE.toString(),
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: null,
          fromAmount: "2848909050178383",
          toAmount: null,
          sender: "0xF43BFC6fc78b979b74873870903e4011587a7DE6",
          recipient: "0xF43BFC6fc78b979b74873870903e4011587a7DE6",
        },
      ],
    },
    {
        txnHash:
          "0xf82ed85eedfbc382fe65c3795ce171cfbd28a896c02351d3482528926347263a",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
            {
                type: ACTION_ENUM.SINGLE_SWAP,
                fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                fromAmount: "15808718067168658",
                toAmount: "50419529",
                sender: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
                recipient: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
              },
              {
                type: ACTION_ENUM.BRIDGE_OUT,
                fromChain: CHAIN_ID.ETHEREUM,
                toChain: CHAIN_ID.BASE.toString(),
                fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                toToken: null,
                fromAmount: "50419529",
                toAmount: null,
                sender: "0xC63bA25af17EBa3DD6133E32Bb48acDa8a6afb46",
                recipient: "0xC63bA25af17EBa3DD6133E32Bb48acDa8a6afb46",
              },
        ],
      },
  ],
};
