import { ethers } from 'ethers';
import { ACTION_ENUM, CHAIN_ID } from '../../../src';
import { IProtocolTestingData } from '../../../src/types';

export enum LIFI_VERSIONS {
  V1 = 'v1'
}

export const lifiData: IProtocolTestingData = {
  [LIFI_VERSIONS.V1]: [
    {
      txnHash: '0xe1ba3c570bdb6dd5bd30c170515973d1f3c746a3a6ab9e85e217a2c10101ba5a',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: CHAIN_ID.OPTIMISM,
          fromToken: ethers.ZeroAddress,
          toToken: ethers.ZeroAddress,
          fromAmount: '66087883763464868',
          toAmount: '66083849681558975',
          sender: '0x21f3f177Caa340da19d64a6d4603c493e1061fCe',
          recipient: '0x21f3f177Caa340da19d64a6d4603c493e1061fCe'
        }
      ]
    },
    {
      txnHash: '0x9beb973622391eb0601699de268d475f6a471815cdb8fb266efb3d7b8811c1b3',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: ethers.ZeroAddress,
          toToken: '0xE37e799D1c305C057d5E26f9B411C27AD35E21d9',
          fromAmount: '9114770000000000',
          toAmount: '52928284907437591',
          sender: '0xdB6D9D4Ae06b843639aB5Ea567aF30ECE0374003',
          recipient: '0xdB6D9D4Ae06b843639aB5Ea567aF30ECE0374003'
        }
      ]
    }
  ]
};
