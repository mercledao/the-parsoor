import { ZeroAddress } from "ethers";
import { ACTION_ENUM, CHAIN_ID } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum PARASWAP_VERSIONS {
  V5 = "v5",
  V6 = "v6.2",
  LIMIT = "1"
}

export const paraswapSimpleSwappedData: IProtocolTestingData = {
  [PARASWAP_VERSIONS.V5]: [
    {
      txnHash:
        "0xf5d5406179059d2ab5b5f8b9e480291ad4963d2a772677f6b52c57b28cc846c7",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          toToken: "0x3593D125a4f7849a1B059E64F4517A86Dd60c95d",
          fromAmount: "70000000000000000",
          toAmount: "39275112292035519014",
          sender: "0xA04FFF5e90B35a38bfa09d2a0857474790827090",
          recipient: "0xA04FFF5e90B35a38bfa09d2a0857474790827090",
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
          toAmount: "580491157671546943355",
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
          toAmount: "3365054982842576615047",
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
          toAmount: "186419054024220623932708",
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
          toAmount: "1098523824913284665778",
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
          toAmount: "16177",
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
          toAmount: "4999689",
          sender: "0x9Db28EFB4872b65C79BbD0dA9a3474519F5F0035",
          recipient: "0x9Db28EFB4872b65C79BbD0dA9a3474519F5F0035",
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
  ]
};
