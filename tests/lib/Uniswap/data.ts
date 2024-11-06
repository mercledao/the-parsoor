import { ACTION_ENUM, CHAIN_ID } from '../../../src/enums';
import { IProtocolTestingData } from '../../../src/types/chunks/ITestingData';

export enum UNISWAP_VERSIONS {
  V2 = 'v2',
  V3 = 'v3'
}

export const uniswapData: IProtocolTestingData = {
  [UNISWAP_VERSIONS.V2]: [
    {
      txnHash: '0xf69a1760dc05375d18d4775443404b608dc515bb23c72eac56a92dc3b76774dc',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0xdDd6eBD74684318fa912084a41a01f11B6C277f7',
          toToken: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
          fromAmount: '13581000000000000000000',
          toAmount: '894501',
          recipient: '0x08C9AA39f1fEbb81d43D8e70b3A0706dA76812aB'
        }
      ]
    },
    {
      txnHash: '0x158075a567ba7191c90fb5f3ed090f32c20f0f2dd8f6ad6216291c066604913a',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
          toToken: '0xdDd6eBD74684318fa912084a41a01f11B6C277f7',
          fromAmount: '300000',
          toAmount: '4471464971679853714295',
          recipient: '0xb098779473c782808F3e3dB3dBECdb4e8eCe0b1F'
        }
      ]
    }
  ]
}; 