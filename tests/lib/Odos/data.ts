import { ethers } from "ethers";
import { ACTION_ENUM, CHAIN_ID, IProtocolTestingData } from "../../../src";

export enum ODOS_VERSIONS {
  V2 = "v2",
}

export const odosRouter: IProtocolTestingData = {
  [ODOS_VERSIONS.V2]: [
    {
      txnHash:
        "0x40dd1a91baac4b1eafb0a2d67410a9dadf4c77566394ee94ad6a44506a5d8d75",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: ethers.ZeroAddress,
          toToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          fromAmount: "1273583226349731000",
          toAmount: "4004928167",
          sender: "0x4A097D66BeDc4389Db74835A0E3eb457a8b8e3D2",
        },
      ],
    },
    {
      txnHash:
        "0xd228af420e71bacc062e631e15f20f12bd01259f6f1c4c6938d1b4da4cbe5bc8",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
          fromAmount: "57647307",
          toAmount: "57804238",
          sender: "0x7d0D3Eb86e78A99633839deF025ACef0CBcb94Bc",
        },
      ],
    },
    {
      txnHash:
        "0x40d07e1d71892c678e97c24a289dc4dd2cd36e8e9084a901ee94e2ee16c67ff2",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: ethers.ZeroAddress,
          fromAmount: "3976249706",
          toAmount: "1264213854884326717",
          sender: "0x4A097D66BeDc4389Db74835A0E3eb457a8b8e3D2",
        },
      ],
    },
    {
      txnHash:
        "0x90e899b0d1193c395e11587fdab27d1ffc179b6776a3fea1759829ba58c3fa10",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
          toToken: ethers.ZeroAddress,
          fromAmount: "4424182",
          toAmount: "1271981458267141055",
          sender: "0x4A097D66BeDc4389Db74835A0E3eb457a8b8e3D2",
        },
      ],
    },
    {
      txnHash:
        "0xdd204c5facff51a6cf0cc1bcadf71dad05ceb05479db0686804e6d6ba300c009",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: ethers.ZeroAddress,
          fromAmount: "3999074254",
          toAmount: "1271085115447838990",
          sender: "0x4A097D66BeDc4389Db74835A0E3eb457a8b8e3D2",
        },
      ],
    },
    {
      txnHash:
        "0xd123f659061ecd8f5e4644e16b99e72c8b205d3af01c367b323ec3e6dd459ce3",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: ethers.ZeroAddress,
          toToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          fromAmount: "1272122154482144000",
          toAmount: "3999445209",
          sender: "0x4A097D66BeDc4389Db74835A0E3eb457a8b8e3D2",
        },
      ],
    },
    {
      txnHash:
        "0x94be06ab10d8383cfce32e4724e5c31dd396305a98cc54b71b846a2703d6507d",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x912CE59144191C1204E64559FE8253a0e49E6548",
          toToken: ethers.ZeroAddress,
          fromAmount: "2287897350157560696",
          toAmount: "479459485922794",
          sender: "0x8eB00b6B0949aB26D5Fd0506a14bD3543Ebde433",
        },
      ],
    },
    // Multi swaps
    {
      txnHash:
        "0x387bbafd5c28fd8a2483aadeb966dc4dae0c9072030065f3de0210df14ebe50c",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.MULTI_SWAP,
          fromTokens: [
            "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
          ],
          toTokens: ["0x0000000000000000000000000000000000000000"],
          fromAmounts: ["50000000", "120000000"],
          toAmounts: ["53914557838929884"],
          sender: "0xAca3039EA237ab5DE26264EA282a592d0829228b",
        },
      ],
    },
    {
      txnHash:
        "0x70ebe328e6c43dc72bafa26a389e71234420eb0a1495b862effe82bce61426ab",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.MULTI_SWAP,
          fromTokens: [
            "0xF734eFdE0C424BA2B547b186586dE417b0954802",
            "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
          ],
          toTokens: [
            "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            "0x0000000000000000000000000000000000000000",
          ],
          fromAmounts: ["377537314368700880035", "25632242917858942902"],
          toAmounts: ["24124681", "7655041378225646"],
          sender: "0x3A63717548f60EeC71BFe86eEC55CB1Ba1F554ab",
        },
      ],
    },
    {
      txnHash:
        "0xc32a46d7892c06ad7aace834385d457e6ec0c44db44bc2377019457de6bcf72e",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.MULTI_SWAP,
          fromTokens: ["0x940181a94A35A4569E4529A3CDfB74e38FD98631"],
          toTokens: [
            "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
            "0x0000000000000000000000000000000000000000",
          ],
          fromAmounts: ["1900000000000000000"],
          toAmounts: ["109161039261938683135", "49579067335875"],
          sender: "0x814d522F6c4bCD22F1EFC02ae7Bb4E08c5fDeA30",
        },
      ],
    },
  ],
};
