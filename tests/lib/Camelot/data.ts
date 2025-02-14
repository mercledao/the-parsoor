import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum CAMELOT_VERSIONS {
  V1 = "v1",
}

export const thrusterData: IProtocolTestingData = {
  [CAMELOT_VERSIONS.V1]: [
    {
      txnHash:
        "0xdf4a85d37f860c315f5e479fe1604af32a121a0e9792e0323f59b910e0f0d491",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
          fromAmount: "10000",
          toAmount: "2722082672809",
          sender: "0xd8dc994FE2b075c697e5051c89b713Bf15fa9294",
          recipient: "0x0000000000000000000000000000000000000000",
        },
      ],
    },
    {
      txnHash:
        "0x1911c6f59a25b1025427345f144a96e5d23bad94c53483370ed1973c3e49a6b8",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xCa4e51F6AD4AFd9d1068E5899De9dd7d73F3463D",
          toToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          fromAmount: "12760540000000000655360",
          toAmount: "46805434",
          sender: "0x464fC339aDD314932920d3e060745bd7Ea3e92AD",
          recipient: "0x464fC339aDD314932920d3e060745bd7Ea3e92AD",
        },
      ],
    },
    {
      txnHash:
        "0x1e9b3e3f6272c7f61e44818bb9334644df66a1dc2520bba6ea907358197ee35c",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
          toToken: "0x7B5EB3940021Ec0e8e463D5dBB4B7B09a89DDF96",
          fromAmount: "100000000",
          toAmount: "19183849593628160202214",
          sender: "0x622661aB4B6aB93c659e751F47eBB0c6e6ad9F48",
          recipient: "0x622661aB4B6aB93c659e751F47eBB0c6e6ad9F48",
        },
      ],
    },
    {
      txnHash:
        "0x1af5ff2393b8a39f4a0a46dbc8970ce286317933bd73bf94c48ff3d4e4aa4efd",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xACC51FFDeF63fB0c014c882267C3A17261A5eD50",
          toToken: "0x68D6d2545f14751baF36c417c2CC7cdf8dA8a15b",
          fromAmount: "282410767414298174531",
          toAmount: "286499958724396728025",
          sender: "0x46679587281C67ae9AD977c8d84A6b8a96a7CEC9",
          recipient: "0x46679587281C67ae9AD977c8d84A6b8a96a7CEC9",
        },
      ],
    },
    {
      txnHash:
        "0x33f6f81118a1a1bd0207d53ec8ba53bbb3d0887334e5c29d0f2e6b2c188c1083",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: "0xBfbCFe8873fE28Dfa25f1099282b088D52bbAD9C",
          fromAmount: "358321144",
          toAmount: "821932023742629259355",
          sender: "0xcA8428042d7da7b6d6bee526A23e9899ADFfAb4c",
          recipient: "0xcA8428042d7da7b6d6bee526A23e9899ADFfAb4c",
        },
      ],
    },
  ],
};
