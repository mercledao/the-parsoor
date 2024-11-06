import { ACTION_ENUM, CHAIN_ID, IProtocolTestingData } from '../../../src';

export enum RHINOFI_VERSIONS {
  V1 = 'v1'
}

export const rhinofiData: IProtocolTestingData = {
  [RHINOFI_VERSIONS.V1]: [
    {
      txnHash: '0x123',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x0000000000000000000000000000000000000000',
          toToken: '0x0000000000000000000000000000000000000000',
          fromAmount: '1000000000000000000'
        }
      ]
    }
  ]
};
