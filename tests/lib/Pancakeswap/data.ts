import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum PANCAKESWAP_VERSIONS {
  V3 = "v3",
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
          fromToken: '0xde4EE8057785A7e8e800Db58F9784845A5C2Cbd6',
          toToken: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          fromAmount: '385400090000000000',
          toAmount: '60368223570000000000',
          fee: "100",
          recipient: '0x4c5f6AD6628D205259443ebcF6cc4cDD7D6cbf81'
        }
      ],
    }
  ],
};
