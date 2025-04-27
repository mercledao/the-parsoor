import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum BEX_VERSIONS {
  V1 = "v1",
}

export const BexData: IProtocolTestingData = {
  [BEX_VERSIONS.V1]: [
    {
      txnHash:
        "0x1b36cb01d24c1c80f0cc34a84362863d1807438ead6e0798b18bbbce7e8233c1",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x01C8A5ccAD23A4D3764eF71c403862160Aa2913a",
          toToken: "0x6969696969696969696969696969696969696969",
          fromAmount: "29328484806340000000000",
          toAmount: "214760450582448245380",
          sender: "0x287A149ffB6e1ffB9dd83D3c5a8deF736d683BD5",
          recipient: "0x287A149ffB6e1ffB9dd83D3c5a8deF736d683BD5"
        },
      ],
    },
    {
      txnHash:
        "0x3cbf8afd81c2a7f4f2b652419701b8aecd59a3e21358d4b7c27164d008f94d31",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x6969696969696969696969696969696969696969",
          toToken: "0xac03CABA51e17c86c921E1f6CBFBdC91F8BB2E6b",
          fromAmount: "4003305222181852388",
          toAmount: "2601931726532423793",
          sender: "0xcF0214540ceE0bb4b10e7Df66cE94074032A2AC4",
          recipient: "0xcF0214540ceE0bb4b10e7Df66cE94074032A2AC4"
        },
      ],
    },
    {
      txnHash:
        "0x164f6af504dfcadbb5641a38103b69f694f6918ed2e80760980747aca8c0f8fd",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x6969696969696969696969696969696969696969",
          toToken: "0xFCBD14DC51f0A4d49d5E53C2E0950e0bC26d0Dce",
          fromAmount: "1000000000000000",
          toAmount: "3710386285896058",
          sender: "0x2cF3bc994c63df03e3438226CC2E52Ffa980AEe7",
          recipient: "0x2cF3bc994c63df03e3438226CC2E52Ffa980AEe7"
        },
      ],
    },
    {
      txnHash:
        "0xe8a0256b62983da3e0c389d4566fd823462b7e9a9d8ccaa4d8bae4187e8e5ce8",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x6969696969696969696969696969696969696969",
          toToken: "0x01C8A5ccAD23A4D3764eF71c403862160Aa2913a",
          fromAmount: "1991004195403230",
          toAmount: "270746891593860409",
          sender: "0x462dF463E5a54e85C9636aAB46Ee4Fb40207ba2a",
          recipient: "0x462dF463E5a54e85C9636aAB46Ee4Fb40207ba2a"
        },
      ],
    },
    {
      txnHash:
        "0x4c2619e3b106a27b977a25ac0d24325587646144f99bdfffae11f124a5af7bb5",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x6969696969696969696969696969696969696969",
          toToken: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
          fromAmount: "53850296176628971459",
          toAmount: "112752656483075535",
          sender: "0x6C1Ec143082612301135AAaa576c53EcD0297CdF",
          recipient: "0x6C1Ec143082612301135AAaa576c53EcD0297CdF"
        },
      ],
    },
    {
      txnHash:
        "0xf7882924c54f38206671099388ba7f4dd6fc38b85c8bcabc735f6f7586370582",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xFCBD14DC51f0A4d49d5E53C2E0950e0bC26d0Dce",
          toToken: "0x6969696969696969696969696969696969696969",
          fromAmount: "679742014248205175490",
          toAmount: "181818180000000000000",
          sender: "0xa28bD2A3A403Eaf20354EEfe42b578dEea32F989",
          recipient: "0xa28bD2A3A403Eaf20354EEfe42b578dEea32F989"
        },
      ],
    }
  ],
};
