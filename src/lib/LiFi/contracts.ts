import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import LifiDiamondABI from "./abis/LifiDiamond.json";

export enum CONTRACT_ENUM {
  LIFI_DIAMOND = "LIFI_DIAMOND",
}

export enum EVENT_ENUM {
  SWAP_STARTED = "SwapStarted",
  LIFI_TRANSFER_STARTED = "LiFiTransferStarted",
}

const EVENTS = {
  [EVENT_ENUM.SWAP_STARTED]:
    "event SwapStarted(bytes32 transactionId, address fromToken, address toToken, uint256 fromAmount, uint256 toAmount, address sender)",
  [EVENT_ENUM.LIFI_TRANSFER_STARTED]:
    "event LiFiTransferStarted((bytes32 transactionId, string bridge, string integrator, address referrer, address sendingAssetId, address receivingAssetId, address receiver, uint256 amount, uint256 destinationChainId, bytes callData))",
};

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.LIFI_DIAMOND]: {
    interface: new ethers.Interface(LifiDiamondABI),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x341e94069f53234fE6DabeF707aD424830525715",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.POLYGON_ZK]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0xDE1E598b81620773454588B85D6b5D4eEC32573e",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.MANTA]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.TAIKO]: {
        address: "0x3A9A5dBa8FE1C4Da98187cE4755701BCA182f63b",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.VELAS]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.FUSE]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.BOBA]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.METIS]: {
        address: "0x24ca98fB6972F5eE05f0dB00595c7f68D9FaFd68",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.MOONBEAM]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.MOONRIVER]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.EVMOS]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.MODE]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.CELO]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.AURORA]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.HARMONY]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      }
    },
    events: {
      [EVENT_ENUM.LIFI_TRANSFER_STARTED]: {
        abi: new ethers.Interface([EVENTS[EVENT_ENUM.LIFI_TRANSFER_STARTED]]),
      },
      [EVENT_ENUM.SWAP_STARTED]: {
        abi: new ethers.Interface([EVENTS[EVENT_ENUM.SWAP_STARTED]]),
      },
    },
  },
};
