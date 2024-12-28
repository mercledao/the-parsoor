import { ethers, ZeroAddress, zeroPadBytes } from "ethers";
import { ACTION_ENUM, CHAIN_ID, chainConfig } from "../../../src";
import { IProtocolTestingData } from "../../../src/types";

export enum DEBRIDGE_VERSIONS {
  V1 = "v1",
}

export const debridgePlaceOrderData: IProtocolTestingData = {
  [DEBRIDGE_VERSIONS.V1]: [
    {
      txnHash:
        "0x4f6615b7b13326826499dbace10a134333c29075cca0d03b10f199f13139546c",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: "7565164",
          fromToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          toToken:
            "0xc6fa7af3bedbad3a3d65f36aabc97431b1bbe4c2d2f6e0e47ca60203452f5d61",
          fromAmount: "92360980",
          toAmount: "90515474",
          sender: "0xfc2c00a1f0dd5d31449d85a60233ed3f0e029f72",
          recipient:
            "0x189e201c9279ef1452a7ca81d90337bd2928fd87117a2ec5e25d436d76dd218c",
          fee: "36959",
        },
      ],
    },
    {
      txnHash:
        "0x72860b5f129b80bfb3f593245bb31d09322c17e5eebe1adc6daf7e77c0fd6800",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: "7565164",
          fromToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          toToken:
            "0x0000000000000000000000000000000000000000000000000000000000000000",
          fromAmount: "598038733",
          toAmount: "3140250807",
          sender: "0x9b475302bbe1bb369de62b0e5fcbce108ed4a625",
          recipient:
            "0x79722bfb27251eb1510bf8a2de95c7127b02009a1a495cc366eed32dc2d50ee5",
          fee: "239311",
        },
      ],
    },
    {
      txnHash:
        "0x59108c74dd16aa48d2fa920aef4e8206e57fddc7744ebf3af5966f8707e2a2b5",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: "7565164",
          fromToken: ZeroAddress,
          toToken:
            "0x0000000000000000000000000000000000000000000000000000000000000000",
          fromAmount: "17049527460000000",
          toAmount: "294794576",
          sender: "0x8f97f52b0040476f8b255750cdcaf1082f85b5c2",
          recipient:
            "0x835a92756f6f426292527925863c250372b702acd3d555e0d5a8697f1b07810e",
          fee: "6822540000000",
        },
      ],
    },
    {
      txnHash:
        "0xd2947204c5d0556363428a1c6bc8effe5eee6dd64e1af344433c4f578e8cd064",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: CHAIN_ID.POLYGON.toString(),
          fromToken: ZeroAddress,
          toToken: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
          fromAmount: "107469992092868917",
          toAmount: "107414017200000000",
          sender: "0x59d94b1799eb0a31d6cce4e1c2fcab6507204ba7",
          recipient: "0x59d94b1799eb0a31d6cce4e1c2fcab6507204ba7",
          fee: "43005198916714",
        },
      ],
    },
    {
      txnHash:
        "0x5a0c9fce54f5c00d5cf283087abf286ff24d0fe544492cdedf4278625198cc73",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: CHAIN_ID.ETHEREUM.toString(),
          fromToken: ZeroAddress,
          toToken: ZeroAddress,
          fromAmount: "11214003631294523",
          toAmount: "9992001600000000",
          sender: "0x8fb60e0cb87f1bd5b56a9f61761c655c0c8c0cbc",
          recipient: "0x8fb60e0cb87f1bd5b56a9f61761c655c0c8c0cbc",
          fee: "4487396411082",
        },
      ],
    },
    {
      txnHash:
        "0x227a163185cb7d82d01bec30f11525e71bb82298cb3be672b63f62a28f37c3cc",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: "7565164",
          fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48".toLowerCase(),
          toToken:
            "0xc6fa7af3bedbad3a3d65f36aabc97431b1bbe4c2d2f6e0e47ca60203452f5d61",
          fromAmount: "1254593979",
          toAmount: "1250499000",
          sender: "0x2d761755a985B336556FE0dE944D5c429df04adD".toLowerCase(),
          recipient:
            "0x8f86a93ce1892b38b8c168bf7fd0e8ba41b25ccc6c8dd54456d15f67ac8890a6",
          fee: "502038",
        },
      ],
    },
    {
      txnHash:
        "0x6790e891a821ed77b6ca6adcc6256aebf51fd4a8082becf0920b9457f1cb4420",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM,
          toChain: "7565164",
          fromToken: ZeroAddress,
          toToken:
            "0xce010e60afedb22717bd63192f54145a3f965a33bb82d2c7029eb2ce1e208264",
          fromAmount: "4967292697836000000",
          toAmount: "16907288657",
          sender: "0xC38d6B40a7b32a7bB9e113E70993008C6756D165".toLowerCase(),
          recipient:
            "0x39c5f79db60793a2c7491e594c757763d850e427713edb100496d2afd5b5e8d0",
          fee: "1987712164000000",
        },
      ],
    },
    {
      txnHash:
        "0x5b39bfebc0ee008d5fcb5b194a9af4db91c8cd1c7890bef74af9ed19fc7e97fc",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.OPTIMISM,
          toChain: CHAIN_ID.LINEA.toString(),
          fromToken: ZeroAddress,
          toToken: ZeroAddress,
          fromAmount: "80099106378607324",
          toAmount: "79936012800000000",
          sender: "0xee83ae872f88554a00fc9fae7052823cb4c07f80",
          recipient: "0xee83ae872f88554a00fc9fae7052823cb4c07f80",
          fee: "32052463536857",
        },
      ],
    },
    {
      txnHash:
        "0xbd7500b13e68ad2c783f89de968d8dae582bdb66f4e7c41efad655adaec26832",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.OPTIMISM,
          toChain: "7565164",
          fromToken: ZeroAddress,
          toToken:
            "0x0000000000000000000000000000000000000000000000000000000000000000",
          fromAmount: "70491652056000000",
          toAmount: "1244045697",
          sender: "0x8996493Ff139860ead4Db8dB526876589fDFF552".toLowerCase(),
          recipient:
            "0x89791691ef2ceee85fdcbd999d6cf2737a4c36c08b289f9e8f31755655f856f6",
          fee: "28207944000000",
        },
      ],
    },
    {
      txnHash:
        "0x0c661f788ccdb29ee3135f06b932d7ce3760bfb886ddc27d726f406c0e04bd20",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM,
          toChain: CHAIN_ID.OPTIMISM.toString(),
          fromToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          toToken: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
          fromAmount: "8015876",
          toAmount: "7590000",
          sender: "0x26542d0bc93a63c141a21956337f18773b237882",
          recipient: "0xbb7b805b257d7c76ca9435b3ffe780355e4c4b17",
          fee: "3207",
        },
      ],
    },
  ],
};

export const debridgeFilledOrderData: IProtocolTestingData = {
  [DEBRIDGE_VERSIONS.V1]: [
    {
      txnHash:
        "0x84528f2d8f01b50f5150b128088197c1cf2feb8e332aa564254e1ed8414bcb61",
      chainId: CHAIN_ID.OPTIMISM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: CHAIN_ID.POLYGON.toString(),
          toChain: CHAIN_ID.OPTIMISM.toString(),
          fromToken: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
          toToken: ZeroAddress,
          fromAmount: "202455985200000000",
          toAmount: "202455985200000000",
          sender: "0x555ce236c0220695b68341bc48c68d52210cc35b",
          recipient: "0x4e38d4e12d6014803ce631ae50db546736fd6cb8",
        },
      ],
    },
    {
      txnHash:
        "0xf8aa1fcc247115d2ee7c728e6592abc945f310a93c224ffd1993d2226c18d27c",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: CHAIN_ID.POLYGON.toString(),
          toChain: CHAIN_ID.ARBITRUM.toString(),
          fromToken: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
          toToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          fromAmount: "3429134",
          toAmount: "2994184",
          sender: "0x555ce236c0220695b68341bc48c68d52210cc35b",
          recipient: "0x807f4f82f02f7c986a51887ee5536aed767977c8"
        },
      ],
    },
    {
      txnHash:
        "0xa57197be9ae6e381fd2d6b534596baa4c34d39f9d17fbcf4eac5228c6f2815fd",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: "7565164",
          toChain: CHAIN_ID.ARBITRUM.toString(),
          fromToken: "0xc6fa7af3bedbad3a3d65f36aabc97431b1bbe4c2d2f6e0e47ca60203452f5d61",
          toToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          fromAmount: "118952400",
          toAmount: "117621873",
          sender: "0x555CE236C0220695b68341bc48C68d52210cC35b".toLowerCase(),
          recipient: "0x27567c705a6d2b41f62990c8177a31be99b21e1a"
        },
      ],
    },
    {
      txnHash:
        "0xcffdc0678813007a52c9e034801db004ff2a598092286c03a5d68ab2e9441c65",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: "7565164",
          toChain: CHAIN_ID.ARBITRUM.toString(),
          fromToken: "0xc6fa7af3bedbad3a3d65f36aabc97431b1bbe4c2d2f6e0e47ca60203452f5d61",
          toToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          fromAmount: "39410759901",
          toAmount: "39391467908",
          sender: "0x555CE236C0220695b68341bc48C68d52210cC35b".toLowerCase(),
          recipient: "0x8560279299809e8d3451e345075ff5246f8f2857"
        },
      ],
    },
    {
      txnHash:
        "0x9619cf3972e43215d2fbbbef57790e2439bc3c65283ec925d7cdd2dfaa5e2590",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: "7565164",
          toChain: CHAIN_ID.ARBITRUM.toString(),
          fromToken: "0xc6fa7af3bedbad3a3d65f36aabc97431b1bbe4c2d2f6e0e47ca60203452f5d61",
          toToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          fromAmount: "1001689507",
          toAmount: "1000000000",
          sender: "0x555CE236C0220695b68341bc48C68d52210cC35b".toLowerCase(),
          recipient: "0xc948b87d5b02af9f0ed876e808b9bba3014e92dc"
        }
      ],
    }
  ],
};

export const debridgeCrossChainOrderData: IProtocolTestingData = {
  [DEBRIDGE_VERSIONS.V1]: [
    {
      txnHash:
        "0x240c129d9763611513fd8a4293a40d591d5a78fc56b2493d7fab81c8fc1419db",
      chainId: CHAIN_ID.BSC,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.BSC,
          toChain: CHAIN_ID.ARBITRUM.toString(),
          fromToken: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
          toToken: ZeroAddress,
          fromAmount: "367773213978540",
          toAmount: "204822996368626",
          sender: "0x0fd3d2746e3114fa30c5c3380d3ecb978955e3ed",
          recipient: "0x0fd3d2746e3114fa30c5c3380d3ecb978955e3ed",
          fee: "147168152852",
        },
      ],
    },
    {
      txnHash:
        "0x1cdbb6f325b0f73af1066c068deb4f2b1c819fb6b336d4fd7038ff27fb993298",
      chainId: CHAIN_ID.FANTOM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.FANTOM,
          toChain: "100000014",
          fromToken: "0x2f733095b80a04b38b0d10cc884524a3d09b836a",
          toToken: ZeroAddress,
          fromAmount: "4197198",
          toAmount: "4944531650385590139",
          sender: "0x076ed4502762aa6c4809a25651b0a150494f69dc",
          recipient: "0x076ed4502762aa6c4809a25651b0a150494f69dc",
          fee: "1679",
        },
      ],
    },
    {
      txnHash:
        "0x38061c3d3fa457a827670f3525ee65846644e8eb8a198020521786296d17ac4e",
      chainId: CHAIN_ID.FANTOM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: CHAIN_ID.ARBITRUM.toString(),
          toChain: CHAIN_ID.FANTOM.toString(),
          fromToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          toToken: ZeroAddress,
          fromAmount: "33742602",
          toAmount: "40242246478427940436",
          sender: "0x555ce236c0220695b68341bc48c68d52210cc35b",
          recipient: "0x076ed4502762aa6c4809a25651b0a150494f69dc"
        },
      ],
    },
    {
      txnHash:
        "0x0456adca1700546a883f5af1b390d061902187a3a5a2246da7518ebf6bb1b01d",
      chainId: CHAIN_ID.LINEA,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: "7565164",
          toChain: CHAIN_ID.LINEA.toString(),
          fromToken: "0xc6fa7af3bedbad3a3d65f36aabc97431b1bbe4c2d2f6e0e47ca60203452f5d61",
          toToken: ZeroAddress,
          fromAmount: "13754470",
          toAmount: "3664748555065984",
          sender: "0x555ce236c0220695b68341bc48c68d52210cc35b",
          recipient: "0x1fd0369418d3c5fb0577e9a58e0dc58ee782cbb9"
        },
      ],
    },
    {
      txnHash:
        "0x729a40fec9e334571336d9c5595cd4617efdedec5de731163ba736d65480bb87",
      chainId: CHAIN_ID.LINEA,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.LINEA,
          toChain: "100000002",  
          fromToken: "0x176211869ca2b568f2a7d4ee941e073a821ee1ff",
          toToken: "0xcb444e90d8198415266c6a2724b7900fb12fc56e",
          fromAmount: "299112277",
          toAmount: "285431179069842889244",
          sender: "0xfec208869b185c4f4dc08dc52349d1d0bb2bc03d".toLowerCase(),
          recipient: "0xfec208869b185c4f4dc08dc52349d1d0bb2bc03d",
          fee: "119692"
        },
      ],
    },
  ],
};

export const debridgeBridgeOrderData: IProtocolTestingData = {
  [DEBRIDGE_VERSIONS.V1]: [
    {
      txnHash:
        "0xbc1f53724440a463b225aaeb139836db6bd3b74186c2a88406f1944a994a4d26",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ETHEREUM.toString(),
          toChain: "7565164",
          fromToken: "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E",
          toToken: null,
          fromAmount: "55734358760000000000000",
          toAmount: null,
          sender: "0x65A8F07Bd9A8598E1b5B6C0a88F4779DBC077675",
          recipient:
            "0x0dc6749576a267dc24e3173f22ada27fb78e80c0350e711822802dc365d63a75"
        },
      ],
    },
    {
      txnHash:
        "0x21c7bb09315ce2a29d836905d59663b9fc11642aebe3126a6ee946bf77197094",
      chainId: CHAIN_ID.ETHEREUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: CHAIN_ID.BSC.toString(),
          toChain: CHAIN_ID.ETHEREUM.toString(),
          fromToken: "0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
          toToken: null,
          fromAmount: "17894974410000000000000",
          toAmount: null,
          sender: "0xaf1e71AD1712ce43B7E083Cb517bB14F25BE2d77",
          recipient: "0x4730c58FDA9d78f60c987039aEaB7d261aAd942E"
        },
      ],
    },
    {
      txnHash:
        "0xb5eefe170885d5f9db04aadc26ffa9b3fa5cbf634c5fb1dad87215596cc598cc",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: "100000014",
          toChain: CHAIN_ID.ARBITRUM.toString(),
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: null,
          fromAmount: "3000000",
          toAmount: null,
          sender: "0xF89aC6B7611DFE2Cd8E7d85e976b36f5773f43EA",
          recipient: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66"
        },
      ],
    },
    {
      txnHash:
        "0x8b7fe1aad5619ce4399bbe31c3823def1f9e0ec9199b95ff102a69de673242c3",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_OUT,
          fromChain: CHAIN_ID.ARBITRUM.toString(),
          toChain: CHAIN_ID.POLYGON.toString(),
          fromToken: ZeroAddress,
          toToken: null,
          fromAmount: "1021000000000000",
          toAmount: null,
          sender: "0x010dBa50afB63Cbd2F219981c830182a959A19D4",
          recipient: "0x941f514a3d30123dd2fb1a99e7771cd8cecca9f4"
        },
      ],
    },
    {
      txnHash:
        "0xb5eefe170885d5f9db04aadc26ffa9b3fa5cbf634c5fb1dad87215596cc598cc",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: "100000014",
          toChain: CHAIN_ID.ARBITRUM.toString(),
          fromToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          toToken: null,
          fromAmount: "3000000",
          toAmount: null,
          sender: "0xF89aC6B7611DFE2Cd8E7d85e976b36f5773f43EA",
          recipient: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66"
        },
      ],
    },
  ],
};
