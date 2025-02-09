import { ZeroAddress, zeroPadBytes } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum ONEINCH_VERSIONS {
  V5 = "v5",
}

export const oneinchAggregationRouterData: IProtocolTestingData = {
  [ONEINCH_VERSIONS.V5]: [
    {
      txnHash:
        "0xb73a536767fb9325aabee1551cf8dd2f35317090a07664a82298360f40af8638",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
          fromAmount: "11275880313757800",
          toAmount: "49321936916434571409",
          sender: "0x510cDA854EfD96C180C0b678947fDcC64181279e",
          recipient: "0x510cDA854EfD96C180C0b678947fDcC64181279e",
        },
      ],
    },
    {
      txnHash:
        "0xc06261f11514ccef505209ac3d73f13f5de568da300f1ecfd1ee3ef7bb8890db",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x8bE3460A480c80728a8C4D7a5D5303c85ba7B3b9",
          toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          fromAmount: "4108004960000000000000",
          toAmount: "1297920602091167068",
          sender: "0xB44373DEb287e83bA5FD8909F4076c9b9cCf0ec4",
          recipient: "0xB44373DEb287e83bA5FD8909F4076c9b9cCf0ec4",
        },
      ],
    },
    {
      txnHash:
        "0xdd710dfbdb382612a309c927465590248173e9564455652ca8e3bd0e44b89d10",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          toToken: "0x04C154b66CB340F3Ae24111CC767e0184Ed00Cc6",
          fromAmount: "1000000000000000",
          toAmount: "1001987324968003",
          sender: "0x31B87a9636DC5626a9C1B9AA730cbD17158d701F",
          recipient: "0x31B87a9636DC5626a9C1B9AA730cbD17158d701F",
        },
      ],
    },
    {
      txnHash:
        "0xcf7324a17f084383beaf3281a76000818d0ba3ff07c0caa7d17ec2c3f0821f2b",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0xb0AC2b5a73da0e67A8e5489Ba922B3f8d582e058",
          fromAmount: "27805312761109265",
          toAmount: "686897122785810114472301556",
          sender: "0xd9Ae93050036344bb70562C22D385485D0615C1C",
          recipient: "0xd9Ae93050036344bb70562C22D385485D0615C1C",
        },
      ],
    },
    {
      txnHash:
        "0x2016bf92f8aacd073cf42905b37b6ab327928c2003fd4d562d64200045fc6f52",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
          toToken: "0xf017d3690346eb8234b85F74cEe5E15821fEe1f4",
          fromAmount: "13228873016836720000000000",
          toAmount: "137635206222368363038617205",
          sender: "0x5f9Df67Cb4042A08b4F3A606c42fc5C26Ac30f5a",
          recipient: "0x5f9Df67Cb4042A08b4F3A606c42fc5C26Ac30f5a",
        },
      ],
    },
    {
      txnHash:
        "0x926c074f57d3e595f92baf3b58c2639e444cff13820f5c23047adee86bd6efd7",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xD5cd84D6f044AbE314Ee7E414d37cae8773ef9D3",
          toToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          fromAmount: "54000000000000000000000",
          toAmount: "2457923926",
          sender: "0x72EedCfe03939913B1864723c9f5F2cA3cE2a3A8",
          recipient: "0x72EedCfe03939913B1864723c9f5F2cA3cE2a3A8",
        },
      ],
    },
    {
      txnHash:
        "0xd9212c7bdfbaa69edc5508294682d2aa53a676c8b64e1693f138038d50ab17b8",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x9c354503C38481a7A7a51629142963F98eCC12D0",
          toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          fromAmount: "9000000000000000000000",
          toAmount: "3909643",
          sender: "0x1Be0D13277A27e25ec2D38355C23d34E186cE3d6",
          recipient: "0x1Be0D13277A27e25ec2D38355C23d34E186cE3d6",
        },
      ],
    },
    {
      txnHash:
        "0x8f9e11792b842087379dffb4c58f1ee96789389a22f2beffac2880fe082f095b",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          fromAmount: "194093578708159",
          toAmount: "194093578708159",
          sender: "0x1D425d5C3fe77F5F91f5582f2a98d4a94cb0549b",
          recipient: "0x893Ee5a10aEC49aAe0Ae6e5A78FF79e2069F82e8",
        },
      ],
    },
    {
      txnHash:
        "0x8fccdf40637b92072160a156564fb0666da73768b5629a900bf2e6469ec1dd39",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          toToken: "0x8D6CeBD76f18E1558D4DB88138e2DeFB3909fAD6",
          fromAmount: "10471047280",
          toAmount: "13088809100000000000000",
          sender: "0x6c8f602792a74E52F56a5e769cE417701684b73e",
          recipient: "0x6c8f602792a74E52F56a5e769cE417701684b73e",
        },
      ],
    },
    {
      txnHash:
        "0x5f335605bafc2efebdf5dcc244657b09e8b265fca5d1e0d7cbab52c0a7e23988",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
          toToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          fromAmount: "9757435732610000000000",
          toAmount: "1842421153104676859",
          sender: "0xe67090216073bC8771F4bDeEC4C0f0A8AF71A0F7",
          recipient: "0x0B80c366D3d92fcd4DE0d4a3d596ced82eDcf65d",
        },
      ],
    },
    {
      txnHash:
        "0xb2d285ebd7afca2c0f0d6bee483f0711e6d6e5ae6da45a5c3b3aaff5e8d75cfe",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          toToken: "0xCBE26dbC91B05C160050167107154780F36CeAAB",
          fromAmount: "1348031892401604751",
          toAmount: "1358265826408362314",
          sender: "0x0aE1931832a3974c6d5139CF794d6d86cf000bFb",
          recipient: "0x0aE1931832a3974c6d5139CF794d6d86cf000bFb",
        },
      ],
    },
    {
      txnHash:
        "0xa7a09c1a2af972b05cca27f550f24d33ae96ae515c1cb7b12a557547056f58a2",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
          toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
          fromAmount: "2048669",
          toAmount: "725100527597945378",
          sender: "0x973c37FD15fe837fD3cf341420e6e70cC5078575",
          recipient: "0xBc21CcDF4A312b372E979A661E5b9c84d313483d",
        },
      ],
    },
  ],
};
