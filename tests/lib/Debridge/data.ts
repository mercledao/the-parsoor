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
            type: ACTION_ENUM.BRIDGE_IN,
            fromChain: CHAIN_ID.ARBITRUM,
            toChain: "7565164",
            fromToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
            toToken: "0xc6fa7af3bedbad3a3d65f36aabc97431b1bbe4c2d2f6e0e47ca60203452f5d61",
            fromAmount: "92397939",
            toAmount: "90515474",
            sender: "0xfc2c00a1f0dd5d31449d85a60233ed3f0e029f72",
            recipient: "0x189e201c9279ef1452a7ca81d90337bd2928fd87117a2ec5e25d436d76dd218c",
          },
        ],
      },
      {
        txnHash:
          "0x72860b5f129b80bfb3f593245bb31d09322c17e5eebe1adc6daf7e77c0fd6800",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_IN,
            fromChain: CHAIN_ID.ARBITRUM,
            toChain: "7565164",
            fromToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
            toToken: "0x0000000000000000000000000000000000000000000000000000000000000000",
            fromAmount: "598278044",
            toAmount: "3140250807",
            sender: "0x9b475302bbe1bb369de62b0e5fcbce108ed4a625",
            recipient: "0x79722bfb27251eb1510bf8a2de95c7127b02009a1a495cc366eed32dc2d50ee5",
          },
        ],
      },
      {
        txnHash:
          "0x59108c74dd16aa48d2fa920aef4e8206e57fddc7744ebf3af5966f8707e2a2b5",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_IN,
            fromChain: CHAIN_ID.ARBITRUM,
            toChain: "7565164",
            fromToken: ZeroAddress,
            toToken: "0x0000000000000000000000000000000000000000000000000000000000000000",
            fromAmount: "17056350000000000",
            toAmount: "294794576",
            sender: "0x8f97f52b0040476f8b255750cdcaf1082f85b5c2",
            recipient: "0x835a92756f6f426292527925863c250372b702acd3d555e0d5a8697f1b07810e",
          },
        ],
      },
      {
        txnHash:
          "0xd2947204c5d0556363428a1c6bc8effe5eee6dd64e1af344433c4f578e8cd064",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_IN,
            fromChain: CHAIN_ID.ARBITRUM,
            toChain: CHAIN_ID.POLYGON.toString(),
            fromToken: ZeroAddress,
            toToken: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
            fromAmount: "107512997291785631",
            toAmount: "107414017200000000",
            sender: "0x59d94b1799eb0a31d6cce4e1c2fcab6507204ba7",
            recipient: "0x59d94b1799eb0a31d6cce4e1c2fcab6507204ba7",
          },
        ],
      },
      {
        txnHash:
          "0x5a0c9fce54f5c00d5cf283087abf286ff24d0fe544492cdedf4278625198cc73",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_IN,
            fromChain: CHAIN_ID.ARBITRUM,
            toChain: CHAIN_ID.ETHEREUM.toString(),
            fromToken: ZeroAddress,
            toToken: ZeroAddress,
            fromAmount: "11218491027705605",
            toAmount: "9992001600000000",
            sender: "0x8fb60e0cb87f1bd5b56a9f61761c655c0c8c0cbc",
            recipient: "0x8fb60e0cb87f1bd5b56a9f61761c655c0c8c0cbc",
          },
        ],
      },
      {
        txnHash:
          "0x227a163185cb7d82d01bec30f11525e71bb82298cb3be672b63f62a28f37c3cc",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_IN,
            fromChain: CHAIN_ID.ETHEREUM,
            toChain: "7565164",
            fromToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48".toLowerCase(),
            toToken: "0xc6fa7af3bedbad3a3d65f36aabc97431b1bbe4c2d2f6e0e47ca60203452f5d61",
            fromAmount: "1255096017",
            toAmount: "1250499000",
            sender: "0x2d761755a985B336556FE0dE944D5c429df04adD".toLowerCase(),
            recipient: "0x8f86a93ce1892b38b8c168bf7fd0e8ba41b25ccc6c8dd54456d15f67ac8890a6",
          },
        ],
      },
      {
        txnHash:
          "0x6790e891a821ed77b6ca6adcc6256aebf51fd4a8082becf0920b9457f1cb4420",
        chainId: CHAIN_ID.ETHEREUM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_IN,
            fromChain: CHAIN_ID.ETHEREUM,
            toChain: "7565164",
            fromToken: ZeroAddress,
            toToken: "0xce010e60afedb22717bd63192f54145a3f965a33bb82d2c7029eb2ce1e208264",
            fromAmount: "4969280410000000000",
            toAmount: "16907288657",
            sender: "0xC38d6B40a7b32a7bB9e113E70993008C6756D165".toLowerCase(),
            recipient: "0x39c5f79db60793a2c7491e594c757763d850e427713edb100496d2afd5b5e8d0",
          },
        ],
      },
      {
        txnHash: "0x678aa14e6f7219360a30d255beca2cbd075cbc2d87b2369096d4293eb96e3025",
        chainId: CHAIN_ID.BSC,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_IN,
            fromChain: CHAIN_ID.BSC,
            toChain: CHAIN_ID.ARBITRUM.toString(),
            fromToken: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d".toLowerCase(),
            toToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
            fromAmount: "83342478000000000000",
            toAmount: "82770900",
            sender: "0xD033A60cAC3b574E90a7a2f665c8018E88E54319".toLowerCase(),
            recipient: "0xd033a60cac3b574e90a7a2f665c8018e88e54319",
          },
        ],
      },
      {
        txnHash: "0x5b39bfebc0ee008d5fcb5b194a9af4db91c8cd1c7890bef74af9ed19fc7e97fc",
        chainId: CHAIN_ID.OPTIMISM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_IN,
            fromChain: CHAIN_ID.OPTIMISM,
            toChain: CHAIN_ID.LINEA.toString(),
            fromToken: ZeroAddress,
            toToken: ZeroAddress,
            fromAmount: "80131158842144181",
            toAmount: "79936012800000000",
            sender: "0xee83ae872f88554a00fc9fae7052823cb4c07f80",
            recipient: "0xee83ae872f88554a00fc9fae7052823cb4c07f80",
          },
        ],
      },
      {
        txnHash: "0xbd7500b13e68ad2c783f89de968d8dae582bdb66f4e7c41efad655adaec26832",
        chainId: CHAIN_ID.OPTIMISM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_IN,
            fromChain: CHAIN_ID.OPTIMISM,
            toChain: "7565164",
            fromToken: ZeroAddress,
            toToken: "0x0000000000000000000000000000000000000000000000000000000000000000",
            fromAmount: "70519860000000000",
            toAmount: "1244045697",
            sender: "0x8996493Ff139860ead4Db8dB526876589fDFF552".toLowerCase(),
            recipient: "0x89791691ef2ceee85fdcbd999d6cf2737a4c36c08b289f9e8f31755655f856f6",
          },
        ],
      },
      {
        txnHash: "0x19f56f3e95c045c653c281915f67150ffe65ad766e9a7c99a5da514dc21f56af",
        chainId: CHAIN_ID.LINEA,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_IN,
            fromChain: CHAIN_ID.LINEA,
            toChain: CHAIN_ID.BASE.toString(),
            fromToken: ZeroAddress,
            toToken: ZeroAddress,
            fromAmount: "2908909367287734",
            toAmount: "2776109112000000",
            sender: "0xFE1730038EBEd3B16B695E5CF528813328DDd987".toLowerCase(),
            recipient: "0xfe1730038ebed3b16b695e5cf528813328ddd987",
          },
        ],
      },
      {
        txnHash: "0x0c661f788ccdb29ee3135f06b932d7ce3760bfb886ddc27d726f406c0e04bd20",
        chainId: CHAIN_ID.ARBITRUM,
        emittedActions: [
          {
            type: ACTION_ENUM.BRIDGE_IN,
            fromChain: CHAIN_ID.ARBITRUM,
            toChain: CHAIN_ID.OPTIMISM.toString(),
            fromToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
            toToken: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
            fromAmount: "8019083",
            toAmount: "7590000",
            sender: "0x26542d0bc93a63c141a21956337f18773b237882",
            recipient: "0xbb7b805b257d7c76ca9435b3ffe780355e4c4b17",
          },
        ],
      }
    ]
};

export const debridgerulfilledOrderData: IProtocolTestingData = {
  [DEBRIDGE_VERSIONS.V1]: [
    {
      txnHash:
        "0xd6bee3f19c59bf6f1cb463e1bf82c24a078d63bbe98e225d3e5edfb80abf8c81",
      chainId: CHAIN_ID.ARBITRUM,
      emittedActions: [
        {
          type: ACTION_ENUM.BRIDGE_IN,
          fromChain: "7565164",
          toChain: CHAIN_ID.ARBITRUM.toString(),
          fromToken: "0xc6fa7af3bedbad3a3d65f36aabc97431b1bbe4c2d2f6e0e47ca60203452f5d61",
          toToken: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          fromAmount: "11325438",
          toAmount: "9992001",
          sender: "0x555CE236C0220695b68341bc48C68d52210cC35b".toLowerCase(),
          recipient: "0xc6b524ac5b98907f1ec1bc562c5f42642161ede6",
        },
      ],
    }
  ]
};