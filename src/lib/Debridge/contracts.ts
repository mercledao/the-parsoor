import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import DebridgeGateAbi from "./abis/DebridgeGate.json";
import DlnCrossChainAbi from "./abis/DlnCrossChain.json";
import DlnDestinationAbi from "./abis/DlnDestination.json";
import DlnSourceAbi from "./abis/DlnSource.json";

export enum CONTRACT_ENUM {
  // The contract used to place orders on Debridge
  DLN_SOURCE = "DlnSource",
  DLN_DESTINATION = "DlnDestination",
  DLN_CROSS_CHAIN = "DlnCrossChain",
  DEBRIDGE_GATE = "DebridgeGate",
}

export enum EVENT_ENUM {
  ORDER_PLACED = "0xfc8703fd57380f9dd234a89dce51333782d49c5902f307b02f03e014d18fe471",
  ORDER_FULFILLED = "0xd281ee92bab1446041582480d2c0a9dc91f855386bb27ea295faac1e992f7fe4",
  CROSS_CHAIN_ORDER_PLACED = "0xfc8703fd57380f9dd234a89dce51333782d49c5902f307b02f03e014d18fe471",
  DEBRIDGE_GATE = "0xe315721819a1f353fe56de404206bdd896ab5edc7822f1804a8c4c2c4788174c",
}

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.DLN_SOURCE]: {
    interface: new ethers.Interface(DlnSourceAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SONIC]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZORA]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.METIS]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.NEON]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BERACHAIN]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.ORDER_PLACED]: {
        abi: new ethers.Interface([
          "event CreatedOrder(tuple(uint64 makerOrderNonce, bytes makerSrc, uint256 giveChainId, bytes giveTokenAddress, uint256 giveAmount, uint256 takeChainId, bytes takeTokenAddress, uint256 takeAmount, bytes receiverDst, bytes givePatchAuthoritySrc, bytes orderAuthorityAddressDst, bytes allowedTakerDst, bytes allowedCancelBeneficiarySrc, bytes externalCall) order, bytes32 orderId, bytes affiliateFee, uint256 nativeFixFee, uint256 percentFee, uint32 referralCode, bytes metadata)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.DLN_DESTINATION]: {
    interface: new ethers.Interface(DlnDestinationAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SONIC]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.METIS]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.NEON]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BERACHAIN]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.ORDER_FULFILLED]: {
        abi: new ethers.Interface([
          "event FulfilledOrder(tuple(uint64 makerOrderNonce, bytes makerSrc, uint256 giveChainId, bytes giveTokenAddress, uint256 giveAmount, uint256 takeChainId, bytes takeTokenAddress, uint256 takeAmount, bytes receiverDst, bytes givePatchAuthoritySrc, bytes orderAuthorityAddressDst, bytes allowedTakerDst, bytes allowedCancelBeneficiarySrc, bytes externalCall) order, bytes32 orderId, address sender, address unlockAuthority)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.DLN_CROSS_CHAIN]: {
    interface: new ethers.Interface(DlnCrossChainAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x663DC15D3C1aC63ff12E45Ab68FeA3F0a883C251",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x663DC15D3C1aC63ff12E45Ab68FeA3F0a883C251",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x663DC15D3C1aC63ff12E45Ab68FeA3F0a883C251",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x663DC15D3C1aC63ff12E45Ab68FeA3F0a883C251",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SONIC]: {
        address: "0x663DC15D3C1aC63ff12E45Ab68FeA3F0a883C251",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.METIS]: {
        address: "0x663DC15D3C1aC63ff12E45Ab68FeA3F0a883C251",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x663DC15D3C1aC63ff12E45Ab68FeA3F0a883C251",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x663DC15D3C1aC63ff12E45Ab68FeA3F0a883C251",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.NEON]: {
        address: "0x663DC15D3C1aC63ff12E45Ab68FeA3F0a883C251",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0x663DC15D3C1aC63ff12E45Ab68FeA3F0a883C251",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x663DC15D3C1aC63ff12E45Ab68FeA3F0a883C251",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x663DC15D3C1aC63ff12E45Ab68FeA3F0a883C251",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0x663DC15D3C1aC63ff12E45Ab68FeA3F0a883C251",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {},
  },
  [CONTRACT_ENUM.DEBRIDGE_GATE]: {
    interface: new ethers.Interface(DebridgeGateAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0xc1656B63D9EEBa6d114f6bE19565177893e5bCBF",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SONIC]: {
        address: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.METIS]: {
        address: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.NEON]: {
        address: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.DEBRIDGE_GATE]: {
        abi: new ethers.Interface([
          "event Sent(bytes32 submissionId, bytes32 indexed debridgeId, uint256 amount, bytes receiver, uint256 nonce, uint256 indexed chainIdTo, uint32 referralCode, (uint256 receivedAmount, uint256 fixFee, uint256 transferFee, bool useAssetFee, bool isNativeToken) feeParams, bytes autoParams, address nativeSender)",
        ]),
      },
    },
  },
};
