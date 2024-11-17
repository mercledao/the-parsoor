import { ACTION_ENUM, CHAIN_ID } from '../../../src/enums';
import { IProtocolTestTransaction } from '../../../src/types/chunks/ITestingData';

export enum UNISWAP_VERSIONS {
  V2 = 'v2',
  V3 = 'v3'
}

export const uniswapData: Record<UNISWAP_VERSIONS, IProtocolTestTransaction[]> = {
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
    },
    {
      txnHash: '0xa5a80e053377f895bcd5cc3995937cd9d9ce1335e26a7aeeb8f6465aef778393',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0xdDd6eBD74684318fa912084a41a01f11B6C277f7',
          toToken: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
          fromAmount: '14960000000000000000000',
          toAmount: '1042572',
          recipient: '0xd9AF2b86e4998A27eb740316b8a00159FA4a43Dd'
        }
      ]
    },
    {
      txnHash: '0xbd57fdc14052b770aa8618355151e4c3819cd98f5d5e262cd7e3541e8bafb8b9',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0xdDd6eBD74684318fa912084a41a01f11B6C277f7',
          toToken: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
          fromAmount: '13232000000000000000000',
          toAmount: '922970',
          recipient: '0x8e521C622A8241d20E06b730f3Fe0900e3e4Fe65'
        }
      ]
    },
    {
      txnHash: '0x6fc6004f882dbd1588dbc2acee12201b82fab668792fa6b5f62f211c332a52e2',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          toToken: '0x7D717227840328Bf7ABcfAa9B3530412cdA08cE8',
          fromAmount: '378800000000000000',
          toAmount: '0',
          recipient: '0xCd2bDA408106Be06E7f16a6f8cb61e3F03Eb5873'
        }
      ]
    },
    {
      txnHash: '0x7ae686132f723dce718cbf600e0e71b77b7f4cc7eb8264d540ddfd3598e8b6b5',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x41169bDBa61440e322913291f4fF9bD2793e48dB', 
          toToken: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', 
          fromAmount: '4284153702325987257', 
          toAmount: '8000000',                   
          recipient: '0xC6FFc94F0fBC0e402e80b0ee09832837a1ECB4B3',
        }
      ]
    },
    {
      txnHash: '0xe6ed104838adfbf16c9eeb170878d0b6a2c7bb3d48b925721fbb893269a1c3b5',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x0000000000000000000000000000000000000000', 
          toToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 
          fromAmount: '64825425796635640', 
          toAmount: '1845000000000000',                   
          recipient: '0xC8b19E53D9366f68811C6c851A2c3aC1cF14AF96',
        }
      ]
    },
    {
      txnHash: '0xbca182c0827a69081c1ee9cfab40a3c7feb5dd5fbce9f3249cb93a339e35aba5',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x0000000000000000000000000000000000000000', 
          toToken: '0x250f93c92AEbF7304c9e7e347D1acA8C0212Edea', 
          fromAmount: '6093902262353599', 
          toAmount: '200000000000000000',                   
          recipient: '0xB047A319827D6f00999091390D6aaD3cd256a59A',
        }
      ]
    },
    {
      txnHash: '0x14648c7f19cf5b4456c446d68a97006a53c9575cfb0fc95480bc0cdc93d22540',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x0000000000000000000000000000000000000000', 
          toToken: '0xE916D7bb0DBc0d07EE1028c21E60458eB34E8870', 
          fromAmount: '2277876151417014', 
          toAmount: '0',                   
          recipient: '0xeCCfc88097EeB44A7B5930d91B41452b017Ea1c8',
        }
      ]
    },
    {
      txnHash: '0x19b2c1a867d2f81f289842e061f4392133c2236bb001df6d0b5216bc9bb8ef9f',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x0000000000000000000000000000000000000000', 
          toToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 
          fromAmount: '100000000000000000000',
          toAmount: '3112638000000000',                   
          recipient: '0x74d90f1dcb8EBA0B3855601747A3a905f02C157B',
        }
      ]
    },
    {
      txnHash: '0x3ade8d90e67795e047d8fab4e209b248c9210a2a78d94b23fdfb0d027f9e3c64',
      chainId: CHAIN_ID.POLYGON,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0xC1ab7e48FaFEE6b2596c65261392E59690cE7742', 
          toToken: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', 
          fromAmount: '257218026025151234048',
          toAmount: '7351619',                   
          recipient: '0x38aECeE5534E8386fCC809B6a2463274034E45BE',
        }
      ]
    },
    {
      txnHash: '0x912b6a508736d2062801469b4c8624720117594823601bb8dd1680a4d0ed955f',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 
          toToken: '0x6f259637dcD74C767781E37Bc6133cd6A68aa161', 
          fromAmount: '190597470000000000',
          toAmount: '984425924510000000000',                   
          recipient: '0x4c5f6AD6628D205259443ebcF6cc4cDD7D6cbf81',
        }
      ]
    },
  ],
  [UNISWAP_VERSIONS.V3]: [
    {
      txnHash: '0xc74449edc8de913aadde6e9283e5fb0b7ee60933a8441150f772fddfde3be758',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          toToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          fromAmount: '5172697951198195050',
          toAmount: '15947443382',
          recipient: '0x4700192F8a4A00f009d87A515ff2d13E5cAb8364'
        }
      ]
    },
    {
      txnHash: '0xd137bbb90103230a1fb09fcb7781ac8a52cdc0bb28caf84606ff5af9db66ef16',
      chainId: CHAIN_ID.POLYGON,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
          toToken: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
          fromAmount: '6000000000000000000',
          toAmount: '207930638786178758128',
          recipient: '0x33128fA08f5E0545f4714434b53bDb5E98F62474'
        }
      ]
    },
    {
      txnHash: '0xc1baf4d9817b20f8712d0d51db5da7ad6936a7c9c831e2ef4939f8d3265bdfb5',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x504624040e0642921C2c266a9aC37CafBd8cDa4e',
          toToken: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          fromAmount: '31424733720346442548',
          toAmount: '0',
          recipient: '0xf7C153e84a71c14C20a9D970A96a141fA71E574e'
        }
      ]
    },
    {
      txnHash: '0xa73053462e9c62bc3ba0a791e0f8d91ba2ba36fc659f22f546a79e7a435ea187',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x812Ba41e071C7b7fA4EBcFB62dF5F45f6fA853Ee',
          toToken: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          fromAmount: '2459016000000000',
          toAmount: '1735022673216000000',
          recipient: '0xf5213a6a2f0890321712520b8048D9886c1A9900'
        }
      ]
    },
    {
      txnHash: '0xa73053462e9c62bc3ba0a791e0f8d91ba2ba36fc659f22f546a79e7a435ea187',
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x812Ba41e071C7b7fA4EBcFB62dF5F45f6fA853Ee',
          toToken: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          fromAmount: '2459016000000000',
          toAmount: '1735022673216000000',
          recipient: '0xf5213a6a2f0890321712520b8048D9886c1A9900'
        }
      ]
    },
    {
      txnHash: '0x808903c2dc70158d0a6d3ba886823634a7cdb4cca7f7896b6175ff876faa8228',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          toToken: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
          fromAmount: '249735963111308745',
          toAmount: '814548008',
          recipient: '0x8cC02c2381b7C55E18DccfEA917F0677A5671931'
        }
      ]
    },
    {
      txnHash: '0xfd4c2a3482ad7e1c392331b3028eddd1f46b4932b506930557b47c96880e1c3f',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          toToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          fromAmount: '3195354772034712193',
          toAmount: '10421085302',
          recipient: '0x4700192F8a4A00f009d87A515ff2d13E5cAb8364'
        }
      ]
    },
    {
      txnHash: '0x4bc7ada97603198598a42ecf2e866bdb46741126a3d341682b77bd3a4dbb962d',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          toToken: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
          fromAmount: '198014821910499531',
          toAmount: '649285797',
          recipient: '0x8cC02c2381b7C55E18DccfEA917F0677A5671931'
        }
      ]
    },
    {
      txnHash: '0xc97ae254e1af0cc838cc3b5e5b818c887bb8e4ff8b01ca3171f465885feaac76',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
          toToken: '0x56f20faebb00',
          fromAmount: '100000000',
          toAmount: '4631625404931040000000000',
          recipient: '0x622661aB4B6aB93c659e751F47eBB0c6e6ad9F48'
        }
      ]
    },
    {
      txnHash: '0x7d5bbc8d5f4696ef5218431a52f35ec22382b686e96bb28fc87173f9bcdd380c',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          toToken: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
          fromAmount: '157565355902247914',
          toAmount: '507391647',
          recipient: '0x8cC02c2381b7C55E18DccfEA917F0677A5671931'
        }
      ]
    },
    {
      txnHash: '0x26c0fdec707c89266e1b910c21bcca4832878c5a4d41c4bf184c7b2e0f290d05',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          toToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          fromAmount: '17643266650',
          toAmount: '5474734423288470859',
          recipient: '0x4700192F8a4A00f009d87A515ff2d13E5cAb8364'
        }
      ]
    },
    {
      txnHash: '0xce06ca4d41c2273ea5b52bbb30af2de01c5f85702d7ab243ea74c557ad2a1e2b',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
          toToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          fromAmount: '345227861',
          toAmount: '107142124347089547',
          recipient: '0x8cC02c2381b7C55E18DccfEA917F0677A5671931'
        }
      ]
    },
    {
      txnHash: '0x9db648e6c8e355a57bd41e1dfbed9d459279f6ea34f5bc5312b59d3f767ef2e9',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          toToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          fromAmount: '7113694470',
          toAmount: '2208157196958065022',
          recipient: '0x4700192F8a4A00f009d87A515ff2d13E5cAb8364'
        }
      ]
    },
    {
      txnHash: '0x0e9b942cc451b75b64e775800f6bc551c657d8f0e52fd10cc143afb04de380f4',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
          toToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          fromAmount: '390736730',
          toAmount: '121313909918343605',
          recipient: '0x8cC02c2381b7C55E18DccfEA917F0677A5671931'
        }
      ]
    },
    {
      txnHash: '0xff3659d42caef99481a18ab595191d39dac2c2a9972e0dd82b08d4bfe5a1f9e2',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x912CE59144191C1204E64559FE8253a0e49E6548',
          toToken: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
          fromAmount: '980857349820434283036',
          toAmount: '614384216',
          recipient: '0x74D2eD497F17a620e758d3797A978264611907F7'
        }
      ]
    },
    {
      txnHash: '0xe7e910339434465833fab04a706942ce85ab01766c32dc276e1d997a30997e24',
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          toToken: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          fromAmount: '2135765915416840280',
          toAmount: '6872592005',
          recipient: '0x4700192F8a4A00f009d87A515ff2d13E5cAb8364'
        }
      ]
    },
  ]
}; 