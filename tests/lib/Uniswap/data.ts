import { ZeroAddress } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../../src/enums";
import { IProtocolTestTransaction } from "../../../src/types/chunks/ITestingData";

export enum UNISWAP_VERSIONS {
  V2 = "v2",
  V3 = "v3",
}

export const uniswapData: Record<UNISWAP_VERSIONS, IProtocolTestTransaction[]> =
  {
    [UNISWAP_VERSIONS.V2]: [
      {
        txnHash:
          "0x416ecb8fac12eb549e7c2be1288d58b1979a54f033c6053013d5438462394ddb",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            toToken: "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
            fromAmount: "1033612405999143633",
            toAmount: "2469098000000",
            recipient: "0xd62CA385c107390062a5F1f404c78bA208717Ce4",
          },
        ],
      },
      {
        txnHash:
          "0x26c2319697cd76d805aa6e9797f56b3db3bbe6db791dcb8c9c643d3ad7af791a",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            toToken: "0xe0805C80588913c1C2C89EA4A8DCf485D4038A3E",
            fromAmount: "2127000000000000",
            toAmount: "222294222527",
            recipient: "0x764746993a822861CbD98925dC4410aFb1C84c97",
          },
        ],
      },
      {
        txnHash:
          "0x01af19f687754f1d46eaac19c08b534e5b775d71abcb647c6d1e263d434178ad",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            toToken: "0x24E83de031017508c20BA6684F5E8A992A712f07",
            fromAmount: "300000000000000000",
            toAmount: "2191874893097337",
            recipient: "0x9C05749Cb17f014e83Ad82B512dbc966B91A1362",
          },
        ],
      },
      {
        txnHash:
          "0xb7740b8e16a5aff07fc63f9d47c44653a1e48af620b0971f387a9262527199d7",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            fromAmount: "2791033200",
            toAmount: "1029211791264208388",
            recipient: "0xd62CA385c107390062a5F1f404c78bA208717Ce4",
          },
        ],
      },
      {
        txnHash:
          "0x33366324f7257a10d0c0bcb4d42371bfcfb0d10ac26bca77690ad64bac028611",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xeeDB9De3936116dBaDeB5Aaf2e9F1451A9A677d9",
            toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            fromAmount: "3816333001196458",
            toAmount: "4861787889585123788",
            recipient: "0xb99674772eB07511A609c15FEA43eb53475fbc7B",
          },
        ],
      },
      {
        txnHash:
          "0xabdb99a3f4e299b2a49c3e7405008c6c978b4ba61455b212bc66ef473e711726",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xf477AC7719e2e659001455cDDA0cc8f3aD10b604",
            toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            fromAmount: "28728095211016625000000",
            toAmount: "292996936927156457",
            recipient: "0xb1b2d032AA2F52347fbcfd08E5C3Cc55216E8404",
          },
        ],
      },
      {
        txnHash:
          "0xac4b34e8184b41bce8e3270faa6d1bf30e77d9cd3e8630280dde336bde397bda",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x8eD97a637A790Be1feff5e888d43629dc05408F6",
            toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            fromAmount: "126836213033068002279424",
            toAmount: "721494171721923093",
            recipient: "0xB0Ba33566bd35BcB80738810B2868DC1dDd1f0E9",
          },
        ],
      },
      {
        txnHash:
          "0xc9ef05ffe36a7677f66a27da8e4d24c631510f8b9a4c0afe157d53b5997e0fda",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x1121AcC14c63f3C872BFcA497d10926A6098AAc5",
            toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            fromAmount: "256196544133546275211490",
            toAmount: "5000000000000000000",
            recipient: "0x912daFcA11c926B317D165637888B54D58DcC693",
          },
        ],
      },
      {
        txnHash:
          "0x6dfa82b8fc61c63049fbfc11e40fcf5b74c4e35048dc9f5e111225ed6fad7f82",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            toToken: "0x249e38Ea4102D0cf8264d3701f1a0E39C4f2DC3B",
            fromAmount: "156752873891255388",
            toAmount: "1032868021000000000000000000",
            recipient: "0x6eE4722d9B32b35755e281Dcd92bda7Cd71551F2",
          },
        ],
      },
      {
        txnHash:
          "0xbca182c0827a69081c1ee9cfab40a3c7feb5dd5fbce9f3249cb93a339e35aba5",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            toToken: "0x250f93c92AEbF7304c9e7e347D1acA8C0212Edea",
            fromAmount: "6093902262353599",
            toAmount: "200000000000000000",
            recipient: "0xB047A319827D6f00999091390D6aaD3cd256a59A",
          },
        ],
      },
      {
        txnHash:
          "0xf69a1760dc05375d18d4775443404b608dc515bb23c72eac56a92dc3b76774dc",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xdDd6eBD74684318fa912084a41a01f11B6C277f7",
            toToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
            fromAmount: "13581000000000000000000",
            toAmount: "898974",
            recipient: "0x08C9AA39f1fEbb81d43D8e70b3A0706dA76812aB",
          },
        ],
      },
      {
        txnHash:
          "0x158075a567ba7191c90fb5f3ed090f32c20f0f2dd8f6ad6216291c066604913a",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
            toToken: "0xdDd6eBD74684318fa912084a41a01f11B6C277f7",
            fromAmount: "300000",
            toAmount: "4493822296538252982867",
            recipient: "0xb098779473c782808F3e3dB3dBECdb4e8eCe0b1F",
          },
        ],
      },
      {
        txnHash:
          "0xa5a80e053377f895bcd5cc3995937cd9d9ce1335e26a7aeeb8f6465aef778393",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xdDd6eBD74684318fa912084a41a01f11B6C277f7",
            toToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
            fromAmount: "14960000000000000000000",
            toAmount: "1047785",
            recipient: "0xd9AF2b86e4998A27eb740316b8a00159FA4a43Dd",
          },
        ],
      },
      {
        txnHash:
          "0xbd57fdc14052b770aa8618355151e4c3819cd98f5d5e262cd7e3541e8bafb8b9",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xdDd6eBD74684318fa912084a41a01f11B6C277f7",
            toToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
            fromAmount: "13232000000000000000000",
            toAmount: "927585",
            recipient: "0x8e521C622A8241d20E06b730f3Fe0900e3e4Fe65",
          },
        ],
      },
      {
        txnHash:
          "0x6fc6004f882dbd1588dbc2acee12201b82fab668792fa6b5f62f211c332a52e2",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            toToken: "0x7D717227840328Bf7ABcfAa9B3530412cdA08cE8",
            fromAmount: "378800000000000000",
            toAmount: "17990091719623841813",
            recipient: "0xCd2bDA408106Be06E7f16a6f8cb61e3F03Eb5873",
          },
        ],
      },
      {
        txnHash:
          "0x7ae686132f723dce718cbf600e0e71b77b7f4cc7eb8264d540ddfd3598e8b6b5",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x41169bDBa61440e322913291f4fF9bD2793e48dB",
            toToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
            fromAmount: "4284153702325987257",
            toAmount: "8000000",
            recipient: "0xC6FFc94F0fBC0e402e80b0ee09832837a1ECB4B3",
          },
        ],
      },
      {
        txnHash:
          "0xe6ed104838adfbf16c9eeb170878d0b6a2c7bb3d48b925721fbb893269a1c3b5",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x250f93c92AEbF7304c9e7e347D1acA8C0212Edea",
            toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            fromAmount: "64493324100690756",
            toAmount: "1845000000000000",
            recipient: "0xC8b19E53D9366f68811C6c851A2c3aC1cF14AF96",
          },
        ],
      },
      {
        txnHash:
          "0x14648c7f19cf5b4456c446d68a97006a53c9575cfb0fc95480bc0cdc93d22540",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            toToken: "0xE916D7bb0DBc0d07EE1028c21E60458eB34E8870",
            fromAmount: "2277876151417014",
            toAmount: "23752494968193237077153128",
            recipient: "0xeCCfc88097EeB44A7B5930d91B41452b017Ea1c8",
          },
        ],
      },
      {
        txnHash:
          "0x19b2c1a867d2f81f289842e061f4392133c2236bb001df6d0b5216bc9bb8ef9f",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xEd7d16E3aD3D98E623C1dF356A810867f44F4D8d",
            toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            fromAmount: "99999996115985456987",
            toAmount: "3112638000000000",
            recipient: "0x74d90f1dcb8EBA0B3855601747A3a905f02C157B",
          },
        ],
      },
      {
        txnHash:
          "0x3ade8d90e67795e047d8fab4e209b248c9210a2a78d94b23fdfb0d027f9e3c64",
        chainId: CHAIN_ID.POLYGON,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xC1ab7e48FaFEE6b2596c65261392E59690cE7742",
            toToken: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
            fromAmount: "257218026025151234048",
            toAmount: "14703239",
            recipient: "0x38aECeE5534E8386fCC809B6a2463274034E45BE",
          },
        ],
      },
      {
        txnHash:
          "0x912b6a508736d2062801469b4c8624720117594823601bb8dd1680a4d0ed955f",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            toToken: "0x6f259637dcD74C767781E37Bc6133cd6A68aa161",
            fromAmount: "190597470000000000",
            toAmount: "984922878331591236635",
            recipient: "0x4c5f6AD6628D205259443ebcF6cc4cDD7D6cbf81",
          },
        ],
      },
      {
        txnHash:
          "0x64a327d5746b05eca9f10081cd9de03628c740ed52698123f16884fc1927ceb3",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            toToken: "0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15",
            fromAmount: "750114155151586755",
            toAmount: "150000000000000000000000",
            recipient: "0xE3AF47627AdD841122439d0c93264FC541ea9A13",
          },
        ],
      },
      {
        txnHash:
          "0x3ade8d90e67795e047d8fab4e209b248c9210a2a78d94b23fdfb0d027f9e3c64",
        chainId: CHAIN_ID.POLYGON,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xC1ab7e48FaFEE6b2596c65261392E59690cE7742",
            toToken: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
            fromAmount: "257218026025151234048",
            toAmount: "14703239",
            recipient: "0x38aECeE5534E8386fCC809B6a2463274034E45BE",
          },
        ],
      },
      {
        txnHash:
          "0x912b6a508736d2062801469b4c8624720117594823601bb8dd1680a4d0ed955f",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            toToken: "0x6f259637dcD74C767781E37Bc6133cd6A68aa161",
            fromAmount: "190597470000000000",
            toAmount: "984922878331591236635",
            recipient: "0x4c5f6AD6628D205259443ebcF6cc4cDD7D6cbf81",
          },
        ],
      },
      {
        txnHash:
          "0xbf0238a4e101fb760fe15c603989e78a27dcab54e094cbb69e3f284333e55a31",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xeeDB9De3936116dBaDeB5Aaf2e9F1451A9A677d9",
            toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            fromAmount: "4940794589952829",
            toAmount: "615634503599788004",
            recipient: "0x0A26eF575B32bEAb636Cea71f355C0CCf43A7A2D",
          },
        ],
      },
    ],
    [UNISWAP_VERSIONS.V3]: [
      {
        txnHash:
          "0x3c27a0d50ee09a819b14c2fdd90a5d69452bd0a06ecd6eaa9a0934832652dff1",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            toToken: "0x0c880f6761F1af8d9Aa9C466984b80DAb9a8c9e8",
            fromAmount: "735200000000000000",
            toAmount: "627801737054184831883",
            recipient: "0x0000000000000000000000000000000000000001",
          },
        ],
      },
      {
        txnHash:
          "0xc74449edc8de913aadde6e9283e5fb0b7ee60933a8441150f772fddfde3be758",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            toToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
            fromAmount: "5172697951198195050",
            toAmount: "15947443382",
            recipient: "0x4700192F8a4A00f009d87A515ff2d13E5cAb8364",
          },
        ],
      },
      {
        txnHash:
          "0xd137bbb90103230a1fb09fcb7781ac8a52cdc0bb28caf84606ff5af9db66ef16",
        chainId: CHAIN_ID.POLYGON,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
            toToken: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
            fromAmount: "6000000000000000000",
            toAmount: "207930638786178758128",
            recipient: "0x33128fA08f5E0545f4714434b53bDb5E98F62474",
          },
        ],
      },
      {
        txnHash:
          "0xc1baf4d9817b20f8712d0d51db5da7ad6936a7c9c831e2ef4939f8d3265bdfb5",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x504624040e0642921C2c266a9aC37CafBd8cDa4e",
            toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            fromAmount: "31424733720346442548",
            toAmount: "0",
            recipient: "0xf7C153e84a71c14C20a9D970A96a141fA71E574e",
          },
        ],
      },
      {
        txnHash:
          "0xa73053462e9c62bc3ba0a791e0f8d91ba2ba36fc659f22f546a79e7a435ea187",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x812Ba41e071C7b7fA4EBcFB62dF5F45f6fA853Ee",
            toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            fromAmount: "2459016000000000",
            toAmount: "1735022673216000000",
            recipient: "0xf5213a6a2f0890321712520b8048D9886c1A9900",
          },
        ],
      },
      {
        txnHash:
          "0xa73053462e9c62bc3ba0a791e0f8d91ba2ba36fc659f22f546a79e7a435ea187",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x812Ba41e071C7b7fA4EBcFB62dF5F45f6fA853Ee",
            toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            fromAmount: "2459016000000000",
            toAmount: "1735022673216000000",
            recipient: "0xf5213a6a2f0890321712520b8048D9886c1A9900",
          },
        ],
      },
      {
        txnHash:
          "0x808903c2dc70158d0a6d3ba886823634a7cdb4cca7f7896b6175ff876faa8228",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            toToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
            fromAmount: "249735963111308745",
            toAmount: "814548008",
            recipient: "0x8cC02c2381b7C55E18DccfEA917F0677A5671931",
          },
        ],
      },
      {
        txnHash:
          "0xfd4c2a3482ad7e1c392331b3028eddd1f46b4932b506930557b47c96880e1c3f",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            toToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
            fromAmount: "3195354772034712193",
            toAmount: "10421085302",
            recipient: "0x4700192F8a4A00f009d87A515ff2d13E5cAb8364",
          },
        ],
      },
      {
        txnHash:
          "0x4bc7ada97603198598a42ecf2e866bdb46741126a3d341682b77bd3a4dbb962d",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            toToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
            fromAmount: "198014821910499531",
            toAmount: "649285797",
            recipient: "0x8cC02c2381b7C55E18DccfEA917F0677A5671931",
          },
        ],
      },
      {
        txnHash:
          "0xc97ae254e1af0cc838cc3b5e5b818c887bb8e4ff8b01ca3171f465885feaac76",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
            toToken: "0x25d887ce7a35172c62febfd67a1856f20faebb00",
            fromAmount: "100000000",
            toAmount: "4631625404931040000000000",
            recipient: "0x622661aB4B6aB93c659e751F47eBB0c6e6ad9F48",
          },
        ],
      },
      {
        txnHash:
          "0x7d5bbc8d5f4696ef5218431a52f35ec22382b686e96bb28fc87173f9bcdd380c",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            toToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
            fromAmount: "157565355902247914",
            toAmount: "507391647",
            recipient: "0x8cC02c2381b7C55E18DccfEA917F0677A5671931",
          },
        ],
      },
      {
        txnHash:
          "0x26c0fdec707c89266e1b910c21bcca4832878c5a4d41c4bf184c7b2e0f290d05",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
            toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            fromAmount: "17643266650",
            toAmount: "5474734423288470859",
            recipient: "0x4700192F8a4A00f009d87A515ff2d13E5cAb8364",
          },
        ],
      },
      {
        txnHash:
          "0xce06ca4d41c2273ea5b52bbb30af2de01c5f85702d7ab243ea74c557ad2a1e2b",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
            toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            fromAmount: "345227861",
            toAmount: "107142124347089547",
            recipient: "0x8cC02c2381b7C55E18DccfEA917F0677A5671931",
          },
        ],
      },
      {
        txnHash:
          "0x9db648e6c8e355a57bd41e1dfbed9d459279f6ea34f5bc5312b59d3f767ef2e9",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
            toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            fromAmount: "7113694470",
            toAmount: "2208157196958065022",
            recipient: "0x4700192F8a4A00f009d87A515ff2d13E5cAb8364",
          },
        ],
      },
      {
        txnHash:
          "0x0e9b942cc451b75b64e775800f6bc551c657d8f0e52fd10cc143afb04de380f4",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
            toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            fromAmount: "390736730",
            toAmount: "121313909918343605",
            recipient: "0x8cC02c2381b7C55E18DccfEA917F0677A5671931",
          },
        ],
      },
      {
        txnHash:
          "0xff3659d42caef99481a18ab595191d39dac2c2a9972e0dd82b08d4bfe5a1f9e2",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x912CE59144191C1204E64559FE8253a0e49E6548",
            toToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
            fromAmount: "980857349820434283036",
            toAmount: "614384216",
            recipient: "0x74D2eD497F17a620e758d3797A978264611907F7",
          },
        ],
      },
      {
        txnHash:
          "0xe7e910339434465833fab04a706942ce85ab01766c32dc276e1d997a30997e24",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
            toToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
            fromAmount: "2135765915416840280",
            toAmount: "6872592005",
            recipient: "0x4700192F8a4A00f009d87A515ff2d13E5cAb8364",
          },
        ],
      },
      {
        txnHash:
          "0x7c2076f0384560ea43dd62c00883caafd83ec116a4558645a7936442b580f21c",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
            toToken: "0xe0ee18eacafddaeb38f8907c74347c44385578ab",
            fromAmount: "100000000",
            toAmount: "257702794499150230000",
            recipient: "0x622661aB4B6aB93c659e751F47eBB0c6e6ad9F48",
          },
        ],
      },
      {
        txnHash:
          "0x5a69d6e534d7d6f5056762118c847c85d593b52b6464d3858db97232d556fad7",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xb50721bcf8d664c30412cfbc6cf7a15145234ad1",
            toToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            fromAmount: "51951340000000000000",
            toAmount: "34420692",
            recipient: "0x5B903170E2616573C6fa60e5c21FE9Df091C5625",
          },
        ],
      },
      {
        txnHash:
          "0x8dfd06e3afa52b792ee0cbb50ac880612859d5b715aaf58982dc0d3bf63cd4d2",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x429fed88f10285e61b12bdf00848315fbdfcc341",
            toToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
            fromAmount: "5549761495301561195627",
            toAmount: "0",
            recipient: "0x0000000000000000000000000000000000000002",
          },
        ],
      },
      {
        txnHash:
          "0xaf6204e746f5d44cf399984ea1c60fa1346a6e3ce3ac1e94b93969d537dd062b",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
            toToken: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
            fromAmount: "498000000",
            toAmount: "0",
            recipient: "0x0000000000000000000000000000000000000002",
          },
        ],
      },
      {
        txnHash:
          "0xfe00a139f8dff3ef27bc035ed52cfb4a7d4192347413164aa3b0bec259e1caca",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xabd4c63d2616a5201454168269031355f4764337",
            toToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            fromAmount: "519622052050000000000",
            toAmount: "0",
            recipient: "0x0000000000000000000000000000000000000002",
          },
        ],
      },
      {
        txnHash:
          "0x9d9e797ce3fff2b906aef76d0e4665d06ce98180cc2c4dafd81a1451aefc48f8",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xf815c0616e810ee572D877D51798d4E59c301f40",
            toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            fromAmount: "72098896692240926",
            toAmount: "0",
            recipient: "0x0000000000000000000000000000000000000002",
          },
        ],
      },
      {
        txnHash:
          "0x3369b554053b8815dcc454faa6c2f3d426e9c3ca9207462128a702f5e8eb1440",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xFADDeC79a21f9B74469A4e62DaFbBbCE15c06005",
            toToken: "0xff8Ba4D1fC3762f6154cc942CCF30049A2A0cEC6",
            fromAmount: "58000000000000000",
            toAmount: "8367120281343387728741250",
            recipient: "0xFADDeC79a21f9B74469A4e62DaFbBbCE15c06005",
          },
        ],
      },
      {
        txnHash:
          "0xf5fa14f800b992ec6e449cd4f7c201d3baa49aad7b81099991a05adbc77b5f91",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x80b920fb4B3C0d5EC678e6B8A56C801B8e23eA1B",
            toToken: "0xff8Ba4D1fC3762f6154cc942CCF30049A2A0cEC6",
            fromAmount: "600000000",
            toAmount: "28272550317241935686507500",
            recipient: "0x80b920fb4B3C0d5EC678e6B8A56C801B8e23eA1B",
            sender: "0x80b920fb4B3C0d5EC678e6B8A56C801B8e23eA1B",
          },
        ],
      },
      {
        txnHash:
          "0x0477f828ccde843a2f261b86d6b5bbc74d664a5061f3a8a14d0777c8c29a4df4",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xb3eAe6166CF48016fbf421F3BF338B943bc13F27",
            toToken: "0xff8Ba4D1fC3762f6154cc942CCF30049A2A0cEC6",
            fromAmount: "72801736550229234",
            toAmount: "842255575115868",
            recipient: "0xb3eAe6166CF48016fbf421F3BF338B943bc13F27",
            sender: "0xb3eAe6166CF48016fbf421F3BF338B943bc13F27",
          },
        ],
      },
      {
        txnHash:
          "0xe64e09c6a9fcfc50dc33e2ea83d588c56e7f78c0b053c923410199669c520261",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x03995404Da03690eEBd7CfFbdE09d2194ded4D2A",
            toToken: "0xff8Ba4D1fC3762f6154cc942CCF30049A2A0cEC6",
            fromAmount: "652170852",
            toAmount: "2654453423",
            recipient: "0x03995404Da03690eEBd7CfFbdE09d2194ded4D2A",
            sender: "0x03995404Da03690eEBd7CfFbdE09d2194ded4D2A",
          },
        ],
      },
      {
        txnHash:
          "0xf98d18d941ff952591463d8d2423266c2a61f49ca3d941da1c0f92cdc0dce42c",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xde6D4120A5d34468c405Cd8Aae7F6f3d047fFA28",
            toToken: "0xff8Ba4D1fC3762f6154cc942CCF30049A2A0cEC6",
            fromAmount: "531101625776840134956",
            toAmount: "7780146335",
            recipient: "0xde6D4120A5d34468c405Cd8Aae7F6f3d047fFA28",
            sender: "0xde6D4120A5d34468c405Cd8Aae7F6f3d047fFA28",
          },
        ],
      },
      {
        txnHash:
          "0xded3905629c5f23a7172c52ea0175da2b61e6554c82879706e0145b7ca833a45",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x5c2BE1bd3204aE5b56589b900F789F0fB823bAAE",
            toToken: "0xff8Ba4D1fC3762f6154cc942CCF30049A2A0cEC6",
            fromAmount: "325093000",
            toAmount: "319778448",
            recipient: "0x5c2BE1bd3204aE5b56589b900F789F0fB823bAAE",
            sender: "0x5c2BE1bd3204aE5b56589b900F789F0fB823bAAE",
          },
        ],
      },
      {
        txnHash:
          "0x1bd67759ab752e1e324df00b2a8c82ef6e946ade7bd922cc664755a0acb26a6a",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xD7d52A2642CFafeadFb0199f53aC942E19565F38",
            toToken: "0xff8Ba4D1fC3762f6154cc942CCF30049A2A0cEC6",
            fromAmount: "2900410000000000000",
            toAmount: "8966848150",
            recipient: "0xD7d52A2642CFafeadFb0199f53aC942E19565F38",
            sender: "0xD7d52A2642CFafeadFb0199f53aC942E19565F38",
          },
        ],
      },
      {
        txnHash:
          "0x83e247a547288d3914dd76b1cdadb9273d21f3cee5c42864136fb004f6888eaa",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0xB96e6885CB6319b5E0dAf782CeA2441907874123",
            toToken: "0xff8Ba4D1fC3762f6154cc942CCF30049A2A0cEC6",
            fromAmount: "322414283179975086",
            toAmount: "994405256",
            recipient: "0xB96e6885CB6319b5E0dAf782CeA2441907874123",
            sender: "0xB96e6885CB6319b5E0dAf782CeA2441907874123",
          },
        ],
      },
      {
        txnHash:
          "0x0ee9c695c3176fc07306195ea7bdbcdd5e4797067e7e223eca34fa3c9ba1e9e9",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: "0x2882C4Bbd5Bd3c9F75E75b4BE37EbEE37d68ddDA",
            toToken: "0xff8Ba4D1fC3762f6154cc942CCF30049A2A0cEC6",
            fromAmount: "1000000000000000000",
            toAmount: "3643908812",
            recipient: "0x2882C4Bbd5Bd3c9F75E75b4BE37EbEE37d68ddDA",
            sender: "0x2882C4Bbd5Bd3c9F75E75b4BE37EbEE37d68ddDA",
          },
        ],
      },
    ],
  };
