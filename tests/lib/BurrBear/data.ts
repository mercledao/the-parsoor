import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum BURRBEAR_VERSIONS {
  V1 = "v1",
}

export const BurrBearData: IProtocolTestingData = {
  [BURRBEAR_VERSIONS.V1]: [
    {
      txnHash:
        "0xa175448937b1b6d969c7ebddbc2a166b05620a8385e26722db2c5e2ecb316f6a",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x1cE0a25D13CE4d52071aE7e02Cf1F6606F4C79d3",
          toToken: "0xD77552D3849ab4D8C3b189A9582d0ba4C1F4f912",
          fromAmount: "150162118979220504607",
          toAmount: "40381398399061016523",
          sender: "0x704bd731a687efab67A532713a3233112580204C",
          recipient: "0x704bd731a687efab67A532713a3233112580204C"
        },
      ],
    },
    {
      txnHash:
        "0xd3edb741166c037dd5b8e11cc5c552b21c1bec4ab0ea7bd3388677364fe09f77",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x1cE0a25D13CE4d52071aE7e02Cf1F6606F4C79d3",
          toToken: "0xD77552D3849ab4D8C3b189A9582d0ba4C1F4f912",
          fromAmount: "110118887251428370045",
          toAmount: "29709336497741567158",
          sender: "0x704bd731a687efab67A532713a3233112580204C",
          recipient: "0x704bd731a687efab67A532713a3233112580204C"
        },
      ],
    },
    {
      txnHash:
        "0x245b46c67d66121e480d2f930dd7c59b0e40ba6a3f799c67b0c2241db7165109",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x6969696969696969696969696969696969696969",
          toToken: "0xD77552D3849ab4D8C3b189A9582d0ba4C1F4f912",
          fromAmount: "2583000000000000",
          toAmount: "2585723765751085",
          sender: "0x97A730698390e82240415eE175Cf16eF3AD4f5a7",
          recipient: "0x97A730698390e82240415eE175Cf16eF3AD4f5a7"
        },
      ],
    },
    {
      txnHash:
        "0xcdaf7b263ad4575b320b3b038c610d0d84d6ed5bbd76888740867b0ad0f8e124",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x6969696969696969696969696969696969696969",
          toToken: "0xD77552D3849ab4D8C3b189A9582d0ba4C1F4f912",
          fromAmount: "2583000000000000",
          toAmount: "2585723765987255",
          sender: "0x97A730698390e82240415eE175Cf16eF3AD4f5a7",
          recipient: "0x97A730698390e82240415eE175Cf16eF3AD4f5a7"
        },
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xD77552D3849ab4D8C3b189A9582d0ba4C1F4f912",
          toToken: "0x1cE0a25D13CE4d52071aE7e02Cf1F6606F4C79d3",
          fromAmount: "2585723765987255",
          toAmount: "9556740618199936",
          sender: "0x97A730698390e82240415eE175Cf16eF3AD4f5a7",
          recipient: "0x97A730698390e82240415eE175Cf16eF3AD4f5a7"
        },
      ],
    },
    {
      txnHash:
        "0xdbc8a7368743bd40910bfe949ead6b575d8bf1ec50be77b0521af396413a255e",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xD77552D3849ab4D8C3b189A9582d0ba4C1F4f912",
          toToken: "0x1cE0a25D13CE4d52071aE7e02Cf1F6606F4C79d3",
          fromAmount: "16117181450516674932",
          toAmount: "60123284280224349908",
          sender: "0x704bd731a687efab67A532713a3233112580204C",
          recipient: "0x704bd731a687efab67A532713a3233112580204C"
        },
      ],
    },
    {
      txnHash:
        "0x326d514b939ed9f6ba9ba6c2b4059023aa9d5e36d8bb9e4e918a44bc589973b8",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xD77552D3849ab4D8C3b189A9582d0ba4C1F4f912",
          toToken: "0x1cE0a25D13CE4d52071aE7e02Cf1F6606F4C79d3",
          fromAmount: "37346363728614004950",
          toAmount: "140209869762381018395",
          sender: "0x704bd731a687efab67A532713a3233112580204C",
          recipient: "0x704bd731a687efab67A532713a3233112580204C"
        },
      ],
    }
  ],
};
