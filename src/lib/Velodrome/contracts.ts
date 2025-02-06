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
      [CHAIN_ID.OPTIMISM]: {
        address: "0xa062aE8A9c5e11aaA026fc2670B0D65cCc8B2858",
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
