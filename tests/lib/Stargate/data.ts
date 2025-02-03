import { ZeroAddress } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum STARGATE_VERSIONS {
  V1 = "v1",
}

export const stargateData: IProtocolTestingData = {
  [STARGATE_VERSIONS.V1]: [
    {
      txnHash:
        "0x4b54319b1fb84fe2ea89437c1ae73daf735b586fb4fa3097fed31dbe67910de0",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: CHAIN_ID.BSC,
          fromToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          toToken: null,
          fromAmount: "20020000000",
          toAmount: null,
          sender: "0x0941061072c30DAf2606540B248D8bE3B93045fE",
          recipient: "0x0941061072c30daf2606540b248d8be3b93045fe",
        },
      ],
    },
    {
        txnHash:
          "0xf207231c9aa3c1068d3e4f0e65e266ccd0bc0c2f547635ee3fb039caf5cccbf8",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_OUT,
            fromChain: CHAIN_ID.ETHEREUM,
            toChain: CHAIN_ID.BASE,
            fromToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            toToken: null,
            fromAmount: "3512917049",
            toAmount: null,
            sender: "0x572C5210c4684daC70EC9a9B6D667d8b0A918768",
            recipient: "0x572c5210c4684dac70ec9a9b6d667d8b0a918768",
          },
        ],
      },
      {
        txnHash:
          "0xef9813f385fca773e1f549f5f7db2951ab8404a46aded461d687317b2f0b8414",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_OUT,
            fromChain: CHAIN_ID.ETHEREUM,
            toChain: CHAIN_ID.ARBITRUM,
            fromToken: ZeroAddress,
            toToken: null,
            fromAmount: "6030951165071841",
            toAmount: null,
            sender: "0xB5a3A5Ec1fe98058a9f0e1CFF6242C07d9b06Cf9",
            recipient: "0xb5a3a5ec1fe98058a9f0e1cff6242c07d9b06cf9",
          },
        ],
      },
      {
        txnHash:
          "0x9c79420de67ba011b4ddc54980a0ac66b481715b3b199b96e95dab0f12b07224",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_OUT,
            fromChain: CHAIN_ID.ETHEREUM,
            toChain: CHAIN_ID.BASE,
            fromToken: ZeroAddress,
            toToken: null,
            fromAmount: "37381092342428848",
            toAmount: null,
            sender: "0x25EA71ccF984c28C1bab19e468c4695E1E2B7f3f",
            recipient: "0x25ea71ccf984c28c1bab19e468c4695e1e2b7f3f",
          },
        ],
      },
      {
        txnHash:
          "0x8b88505a7d8c21439dbc1863aa3482d812375af1ae76b0d7f89322802f5480e1",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_OUT,
            fromChain: CHAIN_ID.ETHEREUM,
            toChain: CHAIN_ID.POLYGON,
            fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            toToken: null,
            fromAmount: "499345320",
            toAmount: null,
            sender: "0x45128F06Bb544a0aa9b31F171b28f6897DaFdFF9",
            recipient: "0x45128f06bb544a0aa9b31f171b28f6897dafdff9",
          },
        ],
      },
      {
        txnHash:
          "0x753f52480687d99aad5bed653e2d9345cb3a893c14ddf2532b801fb37e3f4e77",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_OUT,
            fromChain: CHAIN_ID.ARBITRUM,
            toChain: CHAIN_ID.ETHEREUM,
            fromToken: ZeroAddress,
            toToken: null,
            fromAmount: "625673187196716749",
            toAmount: null,
            sender: "0xAab5d8eeE0Fb6D45B82d0F8061822Ff2E4e65bC0",
            recipient: "0xaab5d8eee0fb6d45b82d0f8061822ff2e4e65bc0",
          },
        ],
      },
  ],
};
