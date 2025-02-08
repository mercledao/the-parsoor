import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import LifiDiamondABI from "./abis/LifiDiamond.json";

export enum CONTRACT_ENUM {
  LIFI_DIAMOND = "LIFI_DIAMOND",
}

export enum EVENT_ENUM {
  LIFI_TRANSFER_STARTED = "0xcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1",
  LIFI_GENERIC_SWAP_COMPLETED = "0x38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b99537",
  LIFI_SWAPPED_GENERIC = "0x72a6c9c29f2a2730922d1e49bf0468c86b1e3529c6a9d6f36b9e9d8c49be1342",
  SWAP = "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
}

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.LIFI_DIAMOND]: {
    interface: new ethers.Interface(LifiDiamondABI),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x341e94069f53234fE6DabeF707aD424830525715",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON_ZK]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0xDE1E598b81620773454588B85D6b5D4eEC32573e",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTA]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.TAIKO]: {
        address: "0x3A9A5dBa8FE1C4Da98187cE4755701BCA182f63b",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.VELAS]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FUSE]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BOBA]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.METIS]: {
        address: "0x24ca98fB6972F5eE05f0dB00595c7f68D9FaFd68",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MOONBEAM]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MOONRIVER]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.EVMOS]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MODE]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.CELO]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AURORA]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.HARMONY]: {
        address: "0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.LIFI_TRANSFER_STARTED]: {
        abi: new ethers.Interface([
          "event LiFiTransferStarted((bytes32 transactionId, string bridge, string integrator, address referrer, address sendingAssetId, address receiver, uint256 minAmount, uint256 destinationChainId, bool hasSourceSwaps, bool hasDestinationCall) bridgeData)",
        ]),
      },
      [EVENT_ENUM.LIFI_GENERIC_SWAP_COMPLETED]: {
        abi: new ethers.Interface([
          "event LiFiGenericSwapCompleted(bytes32 indexed transactionId, string integrator, string referrer, address receiver, address fromAssetId, address toAssetId, uint256 fromAmount, uint256 toAmount)",
        ]),
      },
      [EVENT_ENUM.LIFI_SWAPPED_GENERIC]: {
        abi: new ethers.Interface([
          "event LiFiSwappedGeneric(bytes32 indexed transactionId, string integrator, string referrer, address fromAssetId, address toAssetId, uint256 fromAmount, uint256 toAmount)",
        ]),
      },
      [EVENT_ENUM.SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, uint256 amount0In, uint256 amount1In, uint256 amount0Out, uint256 amount1Out, address indexed to)",
        ]),
      },
    },
  },
};
