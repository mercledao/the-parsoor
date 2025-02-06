import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import RouterAbi from "./abis/Router.json";

export enum CONTRACT_ENUM {
  // The contract used to place orders on Debridge
  ROUTER = "ROUTER",
}

export enum EVENT_ENUM {
  ORDER_PLACED = "0xfc8703fd57380f9dd234a89dce51333782d49c5902f307b02f03e014d18fe471",
}

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER]: {
    interface: new ethers.Interface(RouterAbi),
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
    },
    events: {
      [EVENT_ENUM.ORDER_PLACED]: {
        abi: new ethers.Interface([
          "event CreatedOrder(tuple(uint64 makerOrderNonce, bytes makerSrc, uint256 giveChainId, bytes giveTokenAddress, uint256 giveAmount, uint256 takeChainId, bytes takeTokenAddress, uint256 takeAmount, bytes receiverDst, bytes givePatchAuthoritySrc, bytes orderAuthorityAddressDst, bytes allowedTakerDst, bytes allowedCancelBeneficiarySrc, bytes externalCall) order, bytes32 orderId, bytes affiliateFee, uint256 nativeFixFee, uint256 percentFee, uint32 referralCode, bytes metadata)",
        ]),
      },
    },
  }
};
