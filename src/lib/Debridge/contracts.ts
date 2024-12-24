import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import DlnSourceAbi from "./abis/DlnSource.json";
import DlnDestinationAbi from "./abis/DlnDestination.json";

export enum CONTRACT_ENUM {
  // The contract used to place orders on Debridge
  DLN_SOURCE = "DlnSource",
  DLN_DESTINATION = "DlnDestination",
}

export enum EVENT_ENUM {
  // Event for when a order is placed
  ORDER_PLACED = "0xfc8703fd57380f9dd234a89dce51333782d49c5902f307b02f03e014d18fe471",
  // Event for when a order is fulfilled
  ORDER_FULFILLED = "0xd281ee92bab1446041582480d2c0a9dc91f855386bb27ea295faac1e992f7fe4"
}

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.DLN_SOURCE]: {
    interface: new ethers.Interface(DlnSourceAbi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      }
    },
    events: {
      [EVENT_ENUM.ORDER_PLACED]: {
        abi: new ethers.Interface(["event CreatedOrder(tuple(uint64 makerOrderNonce, bytes makerSrc, uint256 giveChainId, bytes giveTokenAddress, uint256 giveAmount, uint256 takeChainId, bytes takeTokenAddress, uint256 takeAmount, bytes receiverDst, bytes givePatchAuthoritySrc, bytes orderAuthorityAddressDst, bytes allowedTakerDst, bytes allowedCancelBeneficiarySrc, bytes externalCall) order, bytes32 orderId, bytes affiliateFee, uint256 nativeFixFee, uint256 percentFee, uint32 referralCode, bytes metadata)"])
      }
    }

  },
  [CONTRACT_ENUM.DLN_DESTINATION]: {
    interface: new ethers.Interface(DlnDestinationAbi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0xE7351Fd770A37282b91D153Ee690B63579D6dd7f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      }
    },
    events: {
      [EVENT_ENUM.ORDER_FULFILLED]: {
        abi: new ethers.Interface(["event FulfilledOrder(tuple(uint64 makerOrderNonce, bytes makerSrc, uint256 giveChainId, bytes giveTokenAddress, uint256 giveAmount, uint256 takeChainId, bytes takeTokenAddress, uint256 takeAmount, bytes receiverDst, bytes givePatchAuthoritySrc, bytes orderAuthorityAddressDst, bytes allowedTakerDst, bytes allowedCancelBeneficiarySrc, bytes externalCall) order, bytes32 orderId, address sender, address unlockAuthority)"]
        )
      }
    }

  },
};
