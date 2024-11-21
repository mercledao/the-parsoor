import { ethers } from "ethers";
import { ACTION_ENUM, CHAIN_ID, IProtocolTestingData } from "../../../src";

export enum ODOS_VERSIONS {
  V2 = "v2",
  V1 = "v1",
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

  [ODOS_VERSIONS.V1]: [
    {
      txnHash:
        "0x98805f922be9de669ddbb7c398db3c1bfb692530ad32fa72b40ac5aba49b895e",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
          toToken: ethers.ZeroAddress,
          fromAmount: "3282173126386920",
          toAmount: "3282173126386919",
          sender: "0xcC91A1Fa81d7c4b10C4ECe01AbEb3EeE55e5373c",
          recipient: "0xcC91A1Fa81d7c4b10C4ECe01AbEb3EeE55e5373c",
        },
      ],
    },
    {
      txnHash:
        "0x0b3aca417ce92325a95b11d5a429d3da2d723fbd63fb1c06a27ed51738f4b840",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x912CE59144191C1204E64559FE8253a0e49E6548",
          toToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
          fromAmount: "15000000000000000000",
          toAmount: "8360180131868953",
          sender: "0x962dE35217e9D4D0D79e8106A3d5eA121FE71685",
          recipient: "0x962dE35217e9D4D0D79e8106A3d5eA121FE71685",
        },
      ],
    },
    {
      txnHash:
        "0x29e42fbb02cd06a61a444d886fb87e62090393b2f5cd70529d9ff5c3a3b4c286",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x912CE59144191C1204E64559FE8253a0e49E6548",
          toToken: "0x74ccbe53F77b08632ce0CB91D3A545bF6B8E0979",
          fromAmount: "10000000000000000000",
          toAmount: "1450497989088006050732",
          sender: "0x962dE35217e9D4D0D79e8106A3d5eA121FE71685",
          recipient: "0x962dE35217e9D4D0D79e8106A3d5eA121FE71685",
        },
      ],
    },
    {
      txnHash:
        "0x0427c67c6c28a539af9ade74fac4af0fed301887c5b9a3999314409ca082c8db",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x4945970EfeEc98D393b4b979b9bE265A3aE28A8B",
          toToken: "0x912CE59144191C1204E64559FE8253a0e49E6548",
          fromAmount: "1111905552154044133",
          toAmount: "48381251886414020608",
          sender: "0x962dE35217e9D4D0D79e8106A3d5eA121FE71685",
          recipient: "0x962dE35217e9D4D0D79e8106A3d5eA121FE71685",
        },
      ],
    },
    {
      txnHash:
        "0xd18b782f6feba5a2b2f0c3590cbb418bff39b5268fc8bdedc082cac203804130",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
          toToken: "0x74ccbe53F77b08632ce0CB91D3A545bF6B8E0979",
          fromAmount: "999587632",
          toAmount: "150221689041443930915013",
          sender: "0x1587c94817bfaA7172F6c82e03bB2Ac3a5aD6102",
          recipient: "0x1587c94817bfaA7172F6c82e03bB2Ac3a5aD6102",
        },
      ],
    },
  ],
};

export const odosLimitOrderRouter: IProtocolTestingData = {
  [ODOS_VERSIONS.V1]: [
    {
      txnHash:
        "0x69ab7398ebec59d2812fddcc771c206ca140509b4aeb65dfb043bdb97c13e997",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
          toToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          fromAmount: "1000000000000000",
          toAmount: "3160000",
          sender: "0x4726464FB17727cb6C7aAab2451F7229C94BfdC4",
          recipient: "0x4726464FB17727cb6C7aAab2451F7229C94BfdC4",
        },
      ],
    },
    {
      txnHash:
        "0xfe54a02df9c113c825b3c6fe7a2282d00262da40c978d7f29b0bd559756340b1",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
          toToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          fromAmount: "1000000000000035",
          toAmount: "3125000",
          sender: "0x4726464FB17727cb6C7aAab2451F7229C94BfdC4",
          recipient: "0x4726464FB17727cb6C7aAab2451F7229C94BfdC4",
        },
      ],
    },
    {
      txnHash:
        "0x4eed06ebb026327dbc9d182936a4ebb210e3488ce248d567cad07ed56c92101b",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          fromAmount: "299919900",
          toAmount: "299569036",
          sender: "0xC265A526f733d4554740Ea7D6c846E7263020685",
          recipient: "0xC265A526f733d4554740Ea7D6c846E7263020685",
        },
      ],
    },

    //Multi swaps
    {
      txnHash:
        "0x410319dd773b67b0a88333a1ebda8034eab1e42ac34300375cbccc029985811a",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.MULTI_SWAP,
          fromTokens: [
            "0x6985884C4392D348587B19cb9eAAf157F13271cd",
            "0x912CE59144191C1204E64559FE8253a0e49E6548",
            "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          ],
          toTokens: ["0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34"],
          fromAmounts: [
            "528159938064755477174",
            "6121452468756287510",
            "2578089265",
          ],
          toAmounts: ["4348570021966260994048"],
          sender: "0x814d522F6c4bCD22F1EFC02ae7Bb4E08c5fDeA30",
          recipients: ["0x2651D865cE09348dDc68B602550F9c9027a30d0B"],
        },
      ],
    },
    {
      txnHash:
        "0xd200b48474d4ea0520dee68dde48d121bfbba59963e3eef2ece2debc9496e161",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.MULTI_SWAP,
          fromTokens: [
            "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
            "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
            "0x912CE59144191C1204E64559FE8253a0e49E6548",
          ],
          toTokens: ["0xaf88d065e77c8cC2239327C5EDb3A432268e5831"],
          fromAmounts: [
            "2077155531669714151",
            "1641986538693259497",
            "155259299999999996",
          ],
          toAmounts: ["24228523"],
          sender: "0x814d522F6c4bCD22F1EFC02ae7Bb4E08c5fDeA30",
          recipients: ["0xf95Bd53fD24f5bb3d2899B7fe7474Efb5AD7356a"],
        },
      ],
    },
    {
      txnHash:
        "0x1700c96255d9ecc5dea171237e8d6ccedd3b65e03f6640ae973d1e2e764b0d43",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.MULTI_SWAP,
          fromTokens: [
            "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
            "0xD74f5255D557944cf7Dd0E45FF521520002D5748",
            "0x289ba1701C2F088cf0faf8B3705246331cB8A839",
            "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
            "0x625E7708f30cA75bfd92586e17077590C60eb4cD",
            "0x64343594Ab9b56e99087BfA6F2335Db24c2d1F17",
          ],
          toTokens: ["0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"],
          fromAmounts: [
            "99999999999999694",
            "1277748220790544125",
            "100000000000000000",
            "943839",
            "544650",
            "500000000000000000",
          ],
          toAmounts: ["1821135904897862"],
          sender: "0xF629232dE2B4B64151A5ee0a9aB45975f15544FD",
          recipients: ["0xF629232dE2B4B64151A5ee0a9aB45975f15544FD"],
        },
      ],
    },
  ],
};
