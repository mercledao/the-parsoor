import { ethers } from 'ethers';
import { ACTION_ENUM, CHAIN_ID, IProtocolTestingData } from '../../../src';

export enum RHINOFI_VERSIONS {
  V1 = 'v1'
}

export const rhinofiData: IProtocolTestingData = {
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
