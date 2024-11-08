import { ethers } from 'ethers';
import { ACTION_ENUM, CHAIN_ID, IProtocolTestingData } from '../../../src';

export enum RHINOFI_VERSIONS {
  V1 = 'v1'
}

export const rhinofiL2Contracts: IProtocolTestingData = {
  [RHINOFI_VERSIONS.V1]: [
    {
      txnHash: '0x75db22758d0281457d3a1f044fef0b60831b306a512b83c3faa750126b4ca096',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: null,
          toChain: CHAIN_ID.ARBITRUM,
          fromToken: null,
          toToken: ethers.ZeroAddress,
          fromAmount: null,
          toAmount: '3815530000000000',
          sender: null,
          recipient: '0xB9C033fe11FC11BE2486aab3d2F3Fc3f3086352D'
        }
      ]
    },
    {
      txnHash: '0xdc571c918f2cf3ccabd13e61ad3ec748d39cb6d4f30312db0c14f90aed096dc8',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: null,
          toChain: CHAIN_ID.ARBITRUM,
          fromToken: null,
          toToken: ethers.ZeroAddress,
          fromAmount: null,
          toAmount: '907530000000000',
          sender: null,
          recipient: '0x5966dF501b096a1b09806699F82C8A8Dd913C54e'
        }
      ]
    },
    {
      txnHash: '0x394e006a6bdff9a6bc8ada3be5343f3147caf44a93fb7e253167b10c0084b194',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: null,
          toChain: CHAIN_ID.ARBITRUM,
          fromToken: null,
          toToken: ethers.ZeroAddress,
          fromAmount: null,
          toAmount: '949086690000000000',
          sender: null,
          recipient: '0x6B3B668Dd6CD5E96CF23F96De0742094e8596FBe'
        }
      ]
    },
    {
      txnHash: '0x671a04c63ee67c140c5d4fd06aab31d44e663cd55097e6712153a49ca65bd208',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: null,
          fromToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          toToken: null,
          fromAmount: '5993166430',
          toAmount: null,
          sender: '0xB08d123fe69701A7D40f036CD52BCBE25E708199',
          recipient: null
        }
      ]
    },
    {
      txnHash: '0x1e67b280fba0e7dfac765b934b73dcffcf3743a700f81ccd4e794e24e4946a21',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: null,
          fromToken: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
          toToken: null,
          fromAmount: '39000000',
          toAmount: null,
          sender: '0x1317E00095313C3d297E8D16dD5835dD4F2Cc602',
          recipient: null
        }
      ]
    },
    {
      txnHash: '0xae5a1e5d45aea878eae0212dae3b213e7617c0a01a9b70e8923095360865a544',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: null,
          fromToken: ethers.ZeroAddress,
          toToken: null,
          fromAmount: '1000000000000000',
          toAmount: null,
          sender: '0x07c6026c0972DC7A156b71f2469d98B1dCd9f39f',
          recipient: null
        }
      ]
    },
    {
      txnHash: '0x1c6c9bb98b4ed38143bd452eae7e8ae70b9437c222a184b840c21bcc4b557c61',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: null,
          fromToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          toToken: null,
          fromAmount: '209063832',
          toAmount: null,
          sender: '0x7bBc1175D42d186047cFA44bf29ab2B51310CE9f',
          recipient: null
        }
      ]
    },
    {
      txnHash: '0x311df6515e61f28209602b5c2bff71c324d067cd9da35df7864b7e7ba66c1506',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: null,
          toChain: CHAIN_ID.ARBITRUM,
          fromToken: null,
          toToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          fromAmount: null,
          toAmount: '63509381',
          sender: null,
          recipient: '0x7bBc1175D42d186047cFA44bf29ab2B51310CE9f'
        }
      ]
    },
    {
      txnHash: '0xc815889841c9b6fd8204e291fbd67eab27fc4e9fc83f8b4ac95113eb859b5b5a',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: null,
          fromToken: ethers.ZeroAddress,
          toToken: null,
          fromAmount: '31000000000000000',
          toAmount: null,
          sender: '0xfD0BB9E8E124e4cF3716E5e442648550E159a92a',
          recipient: null
        }
      ]
    },
    {
      txnHash: '0x7612493602e51595e0b3e133393cb6ef748684787623fb2a45fc3f262b7a8f4b',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: null,
          toChain: CHAIN_ID.ARBITRUM,
          fromToken: null,
          toToken: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
          fromAmount: null,
          toAmount: '2400508811',
          sender: null,
          recipient: '0xf0c4FCDd2f7859Dc309c90d35Aca0b53702d279e'
        }
      ]
    }
  ]
};

export const rhiofiEthL1DepositContract: IProtocolTestingData = {
  [RHINOFI_VERSIONS.V1]: [
    {
      txnHash: '0x46928e8075f5caf409388d7706b42b613915de28eff597f4485cf739ff441746',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: null,
          fromToken: ethers.ZeroAddress,
          toToken: null,
          fromAmount: '1050000000000000000',
          toAmount: null,
          sender: '0xd1d0f24420825096e39bA6DCC9A50c319C77D77e',
          recipient: null
        }
      ]
    },
    {
      txnHash: '0x959464a7b44f823c8e6369aa8561d9b5327ea0896000d1bea2e9e74347e4fd45',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: null,
          fromToken: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          toToken: null,
          fromAmount: '782481597',
          toAmount: null,
          sender: '0x96C171038858D62Aa1E9057Cf7e5135e48914D17',
          recipient: null
        }
      ]
    },
    {
      txnHash: '0xf9a00fcf3257a90743f1d73baee784dd6edf4a5ac7322aaa645ce1aff0064c86',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: null,
          fromToken: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
          toToken: null,
          fromAmount: '245009285',
          toAmount: null,
          sender: '0x8b401903DBC6af51881aC86Ab667647e82bfBF4d',
          recipient: null
        }
      ]
    },
    {
      txnHash: '0xcfa190b1dca4e8e0f01354f4bcaa8c196836371e4db02844c7ec45772e683631',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: null,
          fromToken: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
          toToken: null,
          fromAmount: '23768745620000000000',
          toAmount: null,
          sender: '0x4e888b53eC7A2bAAe3eFE1c3E9f6C219aF6DA4e1',
          recipient: null
        }
      ]
    },
    // Txns for Deposit proxy
    {
      txnHash: '0x506804635180af3fb0bd1ce23207d50ce03d52494fef3b68a9ff447ab99eecf2',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: null,
          fromToken: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          toToken: null,
          fromAmount: '1250000000',
          toAmount: null,
          sender: '0xb77Fa262a7A8d4AbfbA20218e7f2BB003f275556',
          recipient: null
        }
      ]
    },
    {
      txnHash: '0x995151ab55299b30ac63f0543f74dde57e29f93bf67bd562009bc99466b3b114',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: null,
          fromToken: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          toToken: null,
          fromAmount: '46274957',
          toAmount: null,
          sender: '0xfC74deEdbdA57d3E85A9525e973184625553Efe6',
          recipient: null
        }
      ]
    },
    {
      txnHash: '0x4c59f8dc5f82c8faa34d5d88811097af8349d606c402234cf5a759f622a0e7d6',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: null,
          fromToken: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          toToken: null,
          fromAmount: '50000000',
          toAmount: null,
          sender: '0x21A575F6DEB5f89dDaE666822A67121614Bf01Ba',
          recipient: null
        }
      ]
    },
    {
      txnHash: '0x71852927fade9d210cf2567a6a421baa647e5d64542eb6a07b93c287f6309d2b',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: null,
          fromToken: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          toToken: null,
          fromAmount: '214616204',
          toAmount: null,
          sender: '0x287E643CE0502664338Cb176b67f18A26bC444BB',
          recipient: null
        }
      ]
    }
  ]
};
