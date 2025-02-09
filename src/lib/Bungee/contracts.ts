import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import SocketGatewayAbi from "./abis/SocketGateway.json";

enum CONTRACT_ENUM {
  SOCKET_GATEWAY = "SOCKET_GATEWAY",
}

enum EVENT_ENUM {
  BRIDGE = "0x74594da9e31ee4068e17809037db37db496702bf7d8d63afe6f97949277d1609",
  SWAP = "0xb346a959ba6c0f1c7ba5426b10fd84fe4064e392a0dfcf6609e9640a0dd260d3",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.SOCKET_GATEWAY]: {
    interface: new ethers.Interface(SocketGatewayAbi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AURORA]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MODE]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON_ZK]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0x3a23F943181408EAC424116Af7b7790c94Cb97a5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0xaDdE7028e7ec226777e5dea5D53F6457C21ec7D6",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },

    events: {
      [EVENT_ENUM.BRIDGE]: {
        abi: new ethers.Interface([
          "event SocketBridge (uint256 amount, address token, uint256 toChainId, bytes32 bridgeName, address sender, address receiver, bytes32 metadata)",
        ]),
      },
      [EVENT_ENUM.SWAP]: {
        abi: new ethers.Interface([
          "event SocketSwapTokens (address fromToken, address toToken, uint256 buyAmount, uint256 sellAmount, bytes32 routeName, address receiver, bytes32 metadata)",
        ]),
      },
    },
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
