import { ZeroAddress } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum PARASWAP_VERSIONS {
  V5 = "v5",
  V6 = "v6.2",
  LIMIT = "1",
  DELTA = "2"
}

export const paraswapSimpleSwappedData: IProtocolTestingData = {
  [PARASWAP_VERSIONS.V5]: [
    {
      txnHash:
        "0xe7b71eda72a5486300153994c942d45ac1d93943408bcac26bd05f22c8f24a7e",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x2Ac2B254Bc18cD4999f64773a966E4f4869c34Ee",
          fromAmount: "632488793219173",
          toAmount: "1000000000000000000",
          sender: "0xf370882660Ef4FCE5bEf46945935714f33f02a08",
          recipient: "0xf370882660Ef4FCE5bEf46945935714f33f02a08",
        },
      ],
    },
    {
      txnHash:
        "0xc13772b9152fd337283e8918a83f675cac77af0aab24ea70a6ed49daa3bdecbf",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          toToken: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          fromAmount: "5000000000000000000",
          toAmount: "15435854",
          sender: "0xcA74F404E0C7bfA35B13B511097df966D5a65597",
          recipient: "0xcA74F404E0C7bfA35B13B511097df966D5a65597",
        },
      ],
    },
    {
      txnHash:
        "0xbbbd14b9b30580d6edaee5ce27b844fb38539486c3909f8edf5dfe9d59f63bf0",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x9992eC3cF6A55b00978cdDF2b27BC6882d88D1eC",
          toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          fromAmount: "4613984168950000000000",
          toAmount: "44208595763627518",
          sender: "0x810F91e61591F2a87f8BF0EC80a284ef540ed34d",
          recipient: "0x810F91e61591F2a87f8BF0EC80a284ef540ed34d",
        },
      ],
    },
    {
      txnHash:
        "0xb485a3434366d21def6bea388026be9c246ccb5589da93c38519604654a63b01",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x0bb217E40F8a5Cb79Adf04E1aAb60E5abd0dfC1e",
          toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          fromAmount: "19600518290303",
          toAmount: "5099038756",
          sender: "0x89B537D4E0dE035303Dc1BDae18394f7A6C15c36",
          recipient: "0x89B537D4E0dE035303Dc1BDae18394f7A6C15c36",
        },
      ],
    },
    {
      txnHash:
        "0x463e2c0494f22d3e8d9008e77eb2452423c4f242888006221cc11e2f25f9db65",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x6Db8b088c4d41d622B44CD81B900bA690f2d496C",
          fromAmount: "300000000000000000",
          toAmount: "21462173430482231184606",
          sender: "0x45D11F7EbBc79F18467dd534e2865d0DBA6aA435",
          recipient: "0x45D11F7EbBc79F18467dd534e2865d0DBA6aA435",
        },
      ],
    },
    {
      txnHash:
        "0xe45e9c410312e8247b5546599a89baf2cdfb6435c19106401140e2d8c628a935",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          toToken: "0x8eD97a637A790Be1feff5e888d43629dc05408F6",
          fromAmount: "800000000000000000",
          toAmount: "201515740280215459047739",
          sender: "0xcA74F404E0C7bfA35B13B511097df966D5a65597",
          recipient: "0xcA74F404E0C7bfA35B13B511097df966D5a65597",
        },
      ],
    },
    {
      txnHash:
        "0x9168ab860baa734aa98154bc3c076a4f8e014cca611e8bbfa3e7d1890ca84d9f",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x0d88eD6E74bbFD96B831231638b66C05571e824F",
          toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          fromAmount: "388548117420000000000",
          toAmount: "1026420783",
          sender: "0x89B537D4E0dE035303Dc1BDae18394f7A6C15c36",
          recipient: "0x89B537D4E0dE035303Dc1BDae18394f7A6C15c36",
        },
      ],
    },
    {
      txnHash:
        "0x0d9ae6fb89f02d640fdce3a9e3a548ea7eba5c19f2f0400b4f87913a59cad3de",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x772598E9e62155D7fDFe65FdF01EB5a53a8465BE",
          toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          fromAmount: "9871930068861891987",
          toAmount: "303116168627775787",
          sender: "0x45D11F7EbBc79F18467dd534e2865d0DBA6aA435",
          recipient: "0x45D11F7EbBc79F18467dd534e2865d0DBA6aA435",
        },
      ],
    },
  ],
  [PARASWAP_VERSIONS.V6]: [
    {
      txnHash:
        "0x1c75c80bc7c98862826f7909aac2a3e5bfa935ed1afeb5ee54747843d5452329",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xE77076518A813616315EaAba6cA8e595E845EeE9",
          toToken: "0xec53bF9167f50cDEB3Ae105f56099aaaB9061F83",
          fromAmount: "577146559603530085379",
          toAmount: "577588701883189208639",
          sender: "0xd3faB52A0C93346F23a9b9b24Fd45ea0b8dD3420",
          recipient: "0xd3faB52A0C93346F23a9b9b24Fd45ea0b8dD3420",
        },
      ],
    },
    {
      txnHash:
        "0x8fcc70a9a67bbed027cefdcb4dad48d73f216a5bb48e6b90600408be2d84993a",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xC4441c2BE5d8fA8126822B9929CA0b81Ea0DE38E",
          toToken: "0x06B964d96f5dCF7Eae9d7C559B09EDCe244d4B8E",
          fromAmount: "3961095992920000000000",
          toAmount: "3361689927859734038432",
          sender: "0xb72Fa8c480c10F7066f8B2a6f83f3211E60324d1",
          recipient: "0xb72Fa8c480c10F7066f8B2a6f83f3211E60324d1",
        },
      ],
    },
    {
      txnHash:
        "0xc7885a1ec297959dce3bb2bdcc2497b222d5107fd3a0bde213ec55d7d02a9955",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x35D8949372D46B7a3D5A56006AE77B215fc69bC0",
          toToken: "0x73A15FeD60Bf67631dC6cd7Bc5B6e8da8190aCF5",
          fromAmount: "200000000000000000000000",
          toAmount: "186232634970196403308776",
          sender: "0x06cd6dd85c79C8b561Ac119734304eBbe98f003e",
          recipient: "0x06cd6dd85c79C8b561Ac119734304eBbe98f003e",
        },
      ],
    },
    {
      txnHash:
        "0xfb08c79a973e18ac4c52d4571aedb082b62950972f2b9e0591dcd00da8bac0c3",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xC4441c2BE5d8fA8126822B9929CA0b81Ea0DE38E",
          toToken: "0x06B964d96f5dCF7Eae9d7C559B09EDCe244d4B8E",
          fromAmount: "1297403717764435839043",
          toAmount: "1097425301088371381113",
          sender: "0x175E02170cE2d9044Bd7d7f1d96c8F0B2B3D171E",
          recipient: "0x175E02170cE2d9044Bd7d7f1d96c8F0B2B3D171E",
        },
      ],
    },
    {
      txnHash:
        "0x66aa09c7384d30c05e53e397dd57cdedaf65575c5ca0d5dd60c3adad87f79987",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xF469fBD2abcd6B9de8E169d128226C0Fc90a012e",
          toToken: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          fromAmount: "16725",
          toAmount: "16016",
          sender: "0x2ABe7b8f475eD7F2d881F51D9F4880e4871F680f",
          recipient: "0x2ABe7b8f475eD7F2d881F51D9F4880e4871F680f",
        },
      ],
    },
    {
      txnHash:
        "0xb62bdabe3bb70c38dd7fa9b625960fc6abd5fb5df47549957691e10dc714d0e7",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x657e8C867D8B37dCC18fA4Caead9C45EB088C642",
          toToken: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          fromAmount: "5004688",
          toAmount: "5000100",
          sender: "0x9Db28EFB4872b65C79BbD0dA9a3474519F5F0035",
          recipient: "0x9Db28EFB4872b65C79BbD0dA9a3474519F5F0035",
        },
      ],
    },
    {
      txnHash:
        "0xb9820969eaddeb2188698b671d226a2d9d1e39f9708b88418e2a37afa67f1118",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
          fromAmount: "11196710",
          toAmount: "11184801",
          sender: "0xBF3f59C7cc8E0d49530712e3aB686d61c0096F2D",
          recipient: "0xBF3f59C7cc8E0d49530712e3aB686d61c0096F2D",
        },
      ],
    },
    {
      txnHash:
        "0xb1548798d4f10e4a3012ffb831f038d30c9c9f3d8befe63b5ea555c06141d199",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
          toToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          fromAmount: "375676732",
          toAmount: "375374921",
          sender: "0x778c81880Dfd2Ec9d02AAB661b17c01C3D2E0995",
          recipient: "0x778c81880Dfd2Ec9d02AAB661b17c01C3D2E0995",
        },
      ],
    },
    {
      txnHash:
        "0xcd3cb2679074daf0956d33e6eb14d43cc5acc45edaa7fd61dc6b56e381f8f6e2",
      chainId: CHAIN_ID.BASE,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x23A96680Ccde03Bd4Bdd9a3e9a0Cb56A5D27F7c9",
          toToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          fromAmount: "23329708521893894798511527288",
          toAmount: "4000000000",
          sender: "0x1a9836F6Dcc253332eE707Bd9808aB3d79d973D5",
          recipient: "0x1a9836F6Dcc253332eE707Bd9808aB3d79d973D5",
        },
      ],
    }
  ],
  [PARASWAP_VERSIONS.LIMIT]: [
    {
      txnHash:
        "0x27b446cde4eab3189c2155b5aaea7cb7a748d582810fb39058397abd774b1569",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x9ff58067Bd8D239000010c154C6983A325Df138E",
          toToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          fromAmount: "1360000000000000000",
          toAmount: "49034555000",
          sender: "0xfcFEE36a053063751FdbeeBC6414aDac514b8410",
          recipient: "0xfcFEE36a053063751FdbeeBC6414aDac514b8410",
        },
      ],
    }
  ],
  [PARASWAP_VERSIONS.DELTA]: [
    {
      txnHash:
        "0x27ce0fc300e3331e26f69fc8ef51f3e5de4c505572cafcbac7c686c59456d621",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          toToken: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
          fromAmount: "2700000000",
          toAmount: "11023634444362157032",
          sender: "0x2e5eF37Ade8afb712B8Be858fEc7389Fe32857e2",
          recipient: "0x7f5d01e3A2A552122651f67974548A410995f94B",
        },
      ],
    },
    {
      txnHash:
        "0x4dc2e9f2aa3ef07caf8ea572831750b270bd7450bbcc1741e39ec99d8d0f60c5",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x66761Fa41377003622aEE3c7675Fc7b5c1C2FaC5",
          toToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          fromAmount: "97236801283921403774658",
          toAmount: "29719718214",
          sender: "0x2e5eF37Ade8afb712B8Be858fEc7389Fe32857e2",
          recipient: "0x7c12DBb4Cf9a8Ee886E0904EC362B51937b30bDb",
        },
      ],
    }
  ]
};
