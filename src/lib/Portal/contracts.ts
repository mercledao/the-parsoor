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
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x0e082F06FF657D94310cB8cE8B0D9a04541d8052",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x8d2de8d2f73F1F4cAB472AC9A881C9b123C79627",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0x24850c6f61C438823F01B7A3BF2B89B72174Fa9d",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xB6F6D86a8f9879A9c87f643768d9efc38c1Da6E7",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.CELO]: {
        address: "0x796Dff6D74F3E27060B71255Fe517BFb23C93eed",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x7C9Fc5741288cDFdD83CeB07f3ea7e22618D79D2",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0x24850c6f61C438823F01B7A3BF2B89B72174Fa9d",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MOONBEAM]: {
        address: "0xb1731c586ca89a23809861c6103f0b96b3f57d92",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x1D68124e65faFC907325e3EDbF8c4d84499DAa8b",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x5a58505a96D1dbf8dF91cB21B54419FC36e93fdE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0x24850c6f61C438823F01B7A3BF2B89B72174Fa9d",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SUI]: {
        address: "0xc57508ee0d4595e5a8728974a4a93a787d38f339757230d441e895422c07aba9",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.WORLDCHAIN]: {
        address: "0xc309275443519adca74c9136b02A38eF96E3a1f6",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {},
  },
  [CONTRACT_ENUM.PORTICO]: {
    interface: new ethers.Interface(Portico),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x610d4DFAC3EC32e0be98D18DDb280DACD76A1889",
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
