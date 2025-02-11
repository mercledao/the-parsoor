import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import PortalTokenBridgeAbi from "./abis/PortalTokenBridge.json";
import Portico from "./abis/Portico.json";

enum CONTRACT_ENUM {
  TOKEN_BRIDGE = "TOKEN_BRIDGE",
  PORTICO = "PORTICO"
}

enum EVENT_ENUM {
  PORTICO_SWAP_FINISH = '0xc2addcb063016f6dc1647fc8cd7206c3436cc4293c4acffe4feac288459ca7fc'
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.TOKEN_BRIDGE]: {
    interface: new ethers.Interface(PortalTokenBridgeAbi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x3ee18B2214AFF97000D974cf647E7C347E8fa585",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x0b2402144Bb366A632D14B83F244D2e0e21bD39c",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      }
    },
    events: {},
  },
  [CONTRACT_ENUM.PORTICO]: {
    interface: new ethers.Interface(Portico),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x3ee18B2214AFF97000D974cf647E7C347E8fa585",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x48fa7528bFD6164DdF09dF0Ed22451cF59c84130",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      }
    },
    events: {
      [EVENT_ENUM.PORTICO_SWAP_FINISH]: {
        abi: new ethers.Interface([
          "event PorticoSwapFinish(bool swapCompleted, uint256 finaluserAmount, uint256 relayerFeeAmount, tuple(bytes32 flags, address finalTokenAddress, address recipientAddress, uint256 canonAssetAmount, uint256 minAmountFinish, uint256 relayerFee) data)",
        ]),
      },
    },
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
