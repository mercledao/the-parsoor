import { ACTION_ENUM, CHAIN_ID } from "../../../src/enums";
import { IProtocolTestTransaction } from "../../../src/types/chunks/ITestingData";

export enum KODIAK_VERSIONS {
  V2 = "v2",
  V3 = "v3",
}

export const KodiakData: Record<KODIAK_VERSIONS, IProtocolTestTransaction[]> = {
  [KODIAK_VERSIONS.V2]: [
    {
      txnHash:
        "0xe16ba097480639188536364f760bb377271da7a7ba17b29ad82d0e83edc5c56b",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xcA9088895e3390E503cac9ae95abaccdba20822e",
          toToken: "0x6969696969696969696969696969696969696969",
          fromAmount: "3564403341369641814",
          toAmount: "1016080747765041711",
          recipient: "0x81C5409459d63Fe4D3b358c781954b4b2a20db44",
          sender: "0x81C5409459d63Fe4D3b358c781954b4b2a20db44",
        },
      ],
    },
    {
      txnHash:
        "0x5aaea45c769a2df4f9996fc4ab1429d04c74410b3d0b3a455271a57311d4e0ba",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xb2F776e9c1C926C4b2e54182Fac058dA9Af0B6A5",
          toToken: "0x6969696969696969696969696969696969696969",
          fromAmount: "182826960111436130000000",
          toAmount: "8248804671727852980",
          recipient: "0xB80D90fcf2Ed0e4FeBE02d2a209109Bf1F62DF95",
          sender: "0xB80D90fcf2Ed0e4FeBE02d2a209109Bf1F62DF95",
        },
      ],
    },
    {
      txnHash:
        "0x4bba7929085b73947e38ae79ef89690c930b996c5cc3389f8d60d8085250029a",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x6969696969696969696969696969696969696969",
          toToken: "0xFCBD14DC51f0A4d49d5E53C2E0950e0bC26d0Dce",
          fromAmount: "10000000000000000",
          toAmount: "36270457352849007",
          recipient: "0x3437858750273494FF292E7EdD868D442cFCE92e",
          sender: "0x3437858750273494FF292E7EdD868D442cFCE92e",
        },
      ],
    },
    {
      txnHash:
        "0xc559c7c15169a07fcfa8a096750b09fe144ff05f21c19c80419eb70003510d9b",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x6969696969696969696969696969696969696969",
          toToken: "0xFF0a636Dfc44Bb0129b631cDd38D21B613290c98",
          fromAmount: "14520686198222129000",
          toAmount: "52782322774583205888",
          recipient: "0x039Ac6fBCEbF02B54259bC690e13540693D9eb8D",
          sender: "0xB80D90fcf2Ed0e4FeBE02d2a209109Bf1F62DF95",
        },
      ],
    },
    {
      txnHash:
        "0x5aaea45c769a2df4f9996fc4ab1429d04c74410b3d0b3a455271a57311d4e0ba",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0xb2F776e9c1C926C4b2e54182Fac058dA9Af0B6A5",
          toToken: "0x6969696969696969696969696969696969696969",
          fromAmount: "182826960111436130000000",
          toAmount: "8248804671727852980",
          recipient: "0xB80D90fcf2Ed0e4FeBE02d2a209109Bf1F62DF95",
          sender: "0xB80D90fcf2Ed0e4FeBE02d2a209109Bf1F62DF95",
        },
      ],
    },
    {
      txnHash:
        "0xd1b7539929e94e98648fe74ae764185cfb5415b90b0382ce9dfed9a0f0461757",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x36e9fE653E673FDA3857dBe5afBC884Af8A316A2",
          toToken: "0x6969696969696969696969696969696969696969",
          fromAmount: "315447658913518260000000",
          toAmount: "7182478122739818417",
          recipient: "0xB80D90fcf2Ed0e4FeBE02d2a209109Bf1F62DF95",
          sender: "0xB80D90fcf2Ed0e4FeBE02d2a209109Bf1F62DF95",
        },
      ],
    },
    {
      txnHash:
        "0x20a4c4be44494f70d783e3fc0ee04f1ef5445b5098e74ec237d1ca27ce077feb",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x0b6fb88683bA9D36ac8365AC5399AE7fd658A314",
          toToken: "0x6969696969696969696969696969696969696969",
          fromAmount: "226321749733805053",
          toAmount: "5276766400279561135",
          recipient: "0x0A2104a3E1c8be938a24CCaaca45c26633558234",
          sender: "0x0A2104a3E1c8be938a24CCaaca45c26633558234",
        },
      ],
    },
  ],
  [KODIAK_VERSIONS.V3]: [
    {
      txnHash:
        "0x0300167108861a036a5f3a70d7f95d2e1aff0a5470f94bd5c19f330da5b9c008",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x0555e30da8f98308edb960aa94c0db47230d2b9c",
          toToken: "0x6969696969696969696969696969696969696969",
          fromAmount: "3747235",
          toAmount: "966848309532590815502",
          recipient: "0x0fB6BAC552B7a29A21B4E595b1Ef5c371Cda4F9D",
        },
      ],
    },
    {
      txnHash:
        "0x5781f979a6960b2794145556ee9d761fc57523876853eca73fe5788af30d5df6",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x0555e30da8f98308edb960aa94c0db47230d2b9c",
          toToken: "0x6969696969696969696969696969696969696969",
          fromAmount: "3852473",
          toAmount: "1017414994056848601294",
          recipient: "0x0fB6BAC552B7a29A21B4E595b1Ef5c371Cda4F9D",
        },
      ],
    },
    {
      txnHash:
        "0x0f19ef7c1cf0d4231d3d2e65ea3d1a2efe6f0fbc38167a13ce8b8b14d4081110",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x0f81001ef0a83ecce5ccebf63eb302c70a39a654",
          toToken: "0xfcbd14dc51f0a4d49d5e53c2e0950e0bc26d0dce",
          fromAmount: "1570499999999999868928",
          toAmount: "90514303602076212765",
          recipient: "0x464fC339aDD314932920d3e060745bd7Ea3e92AD",
        },
      ],
    },
    {
      txnHash:
        "0x219c2bcd71e5a4df7f5279f57cde5a7628c5bdc74d0d76e0ad2b2b9cc0a64ae4",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x6969696969696969696969696969696969696969",
          toToken: "0xFCBD14DC51f0A4d49d5E53C2E0950e0bC26d0Dce",
          fromAmount: "46959000000000000000",
          toAmount: "164835276480906213541",
          recipient: "0x464fC339aDD314932920d3e060745bd7Ea3e92AD",
        },
      ],
    },
    {
      txnHash:
        "0x9e6a2b28c2b8927064ef237d3641224b9d8808994c21ce15ffeb418df317d2c7",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x6969696969696969696969696969696969696969",
          toToken: "0x0555e30da8f98308edb960aa94c0db47230d2b9c",
          fromAmount: "633996845227284325119",
          toAmount: "2421285",
          recipient: "0x0fB6BAC552B7a29A21B4E595b1Ef5c371Cda4F9D",
        },
      ],
    },
    {
      txnHash:
        "0xcf7437c1ff294c9d32e38d48e354535b551e8bc9ccb3b200d8800ef238ca28ea",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x549943e04f40284185054145c6E4e9568C1D3241",
          toToken: "0x0F81001eF0A83ecCE5ccebf63EB302c70a39a654",
          fromAmount: "82000000",
          toAmount: "1350584083455108936445",
          recipient: "0x464fC339aDD314932920d3e060745bd7Ea3e92AD",
        },
      ],
    },
    
    {
      txnHash:
        "0xcbd0665fc9817128ca8797825a375ac7cbf3ee571d7de0805321775af5d787d6",
      chainId: CHAIN_ID.BERACHAIN,
      emittedActions: [
        {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: "0x6969696969696969696969696969696969696969",
          toToken: "0x18878Df23e2a36f81e820e4b47b4A40576D3159C",
          fromAmount: "10000000000000000000",
          toAmount: "1709034748",
          recipient: "0x486D91B72983260062E3e42Da9481200599a6F57",
        },
      ],
    },
    
  ],
};
