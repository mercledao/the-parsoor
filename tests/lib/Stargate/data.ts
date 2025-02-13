import { ethers, ZeroAddress } from 'ethers';
import { ACTION_ENUM, CHAIN_ID, IProtocolTestingData } from '../../../src';

export enum STARGATE_VERSIONS {
  V1 = 'v1',
  V2 = 'v2'
}

export const stargateData : IProtocolTestingData = {
  [STARGATE_VERSIONS.V1]: [
    {
      txnHash: '0xecaf6465ecddb2982522d9f3289a5779fa437ab4ed5e39d5ac661c3e7cea599f',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: CHAIN_ID.BASE,
          fromToken: "0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d",
          toToken: "0x38EA452219524Bb87e18dE1C24D3bB59510BD783",
          fromAmount: '590363124',
          toAmount: null,
          sender: '0x58d68A9f622539e79908E4C6Bc2542325f40d294',
          recipient: '0x58d68a9f622539e79908e4c6bc2542325f40d294'
        }
      ]
    },
    {
      txnHash: '0x5395a215466e491c3ec0490a455bc744f3ce69f170077ce8f55355b08cdca3df',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: CHAIN_ID.ARBITRUM,
          fromToken: ZeroAddress,
          toToken: null,
          fromAmount: '1502737325051000244',
          toAmount: null,
          sender: '0x42939e82DF15afc586bb95f7dD69Afb6Dc24A6f9',
          recipient: '0x42939e82df15afc586bb95f7dd69afb6dc24a6f9'
        }
      ]
    },
    {
      txnHash: '0xfa88ecfcdfad325263e8e482c9b0363289bfae59dce7441acbf7798453705784',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: CHAIN_ID.ARBITRUM,
          fromToken: ZeroAddress,
          toToken: null,
          fromAmount: '390410071123249',
          toAmount: null,
          sender: '0x338120F1067f324BBA8dd9fca41856aEeD88fB43',
          recipient: '0x338120f1067f324bba8dd9fca41856aeed88fb43'
        }
      ]
    },
    {
      txnHash: '0x8b88505a7d8c21439dbc1863aa3482d812375af1ae76b0d7f89322802f5480e1',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: CHAIN_ID.POLYGON,
          fromToken: "0x38EA452219524Bb87e18dE1C24D3bB59510BD783",
          toToken: "0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d",
          fromAmount: '499345320',
          toAmount: null,
          sender: '0x45128F06Bb544a0aa9b31F171b28f6897DaFdFF9',
          recipient: '0x45128f06bb544a0aa9b31f171b28f6897dafdff9'
        }
      ]
    }
  ],
  [STARGATE_VERSIONS.V2]: [
    {
      txnHash: '0xc9aca2449e324614c40851d1fb92090b1cd6c09fc4daac9e47d4ce5b47aefb0f',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: CHAIN_ID.BASE,
          fromToken: "0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d",
          toToken: "0x38EA452219524Bb87e18dE1C24D3bB59510BD783",
          fromAmount: '590363124',
          toAmount: null,
          sender: '0x58d68A9f622539e79908E4C6Bc2542325f40d294',
          recipient: '0x58d68a9f622539e79908e4c6bc2542325f40d294'
        }
      ]
    },
    {
      txnHash: '0x5395a215466e491c3ec0490a455bc744f3ce69f170077ce8f55355b08cdca3df',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: CHAIN_ID.ARBITRUM,
          fromToken: ZeroAddress,
          toToken: null,
          fromAmount: '1502737325051000244',
          toAmount: null,
          sender: '0x42939e82DF15afc586bb95f7dD69Afb6Dc24A6f9',
          recipient: '0x42939e82df15afc586bb95f7dd69afb6dc24a6f9'
        }
      ]
    },
    {
      txnHash: '0xfa88ecfcdfad325263e8e482c9b0363289bfae59dce7441acbf7798453705784',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: CHAIN_ID.ARBITRUM,
          fromToken: ZeroAddress,
          toToken: null,
          fromAmount: '390410071123249',
          toAmount: null,
          sender: '0x338120F1067f324BBA8dd9fca41856aEeD88fB43',
          recipient: '0x338120f1067f324bba8dd9fca41856aeed88fb43'
        }
      ]
    },
    {
      txnHash: '0x8b88505a7d8c21439dbc1863aa3482d812375af1ae76b0d7f89322802f5480e1',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: CHAIN_ID.POLYGON,
          fromToken: "0x38EA452219524Bb87e18dE1C24D3bB59510BD783",
          toToken: "0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d",
          fromAmount: '499345320',
          toAmount: null,
          sender: '0x45128F06Bb544a0aa9b31F171b28f6897DaFdFF9',
          recipient: '0x45128f06bb544a0aa9b31f171b28f6897dafdff9'
        }
      ]
    }
  ]
};
