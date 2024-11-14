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
          fromAmount: '4034081905893',
          toAmount: '4034081905893',
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
          toToken: '0x111111125421ca6dc452d289314280a0f8842a65',
          fromAmount: '9114770000000000',
          toAmount: '115792089237316195423570985008687907853269984665640564039457531079628222202345',
          sender: '0xdB6D9D4Ae06b843639aB5Ea567aF30ECE0374003',
          recipient: '0xdB6D9D4Ae06b843639aB5Ea567aF30ECE0374003'
        }
      ]
    }
  ]
};
