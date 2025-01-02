import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import L1StandardBridgeAbi from "./abis/L1StandardBridge.json";

export enum CONTRACT_ENUM {
  L1_STANDARD_BRIDGE = "L1StandardBridge",
}

export enum EVENT_ENUM {
  ERC20_BRIDGE_INITIATED = "0x7ff126db8024424bbfd9826e8ab82ff59136289ea440b04b39a0df1b03b9cabf",
  ETH_BRIDGE_INITIATED = "0x2849b43074093a05396b6f2a937dee8565b15a48a7b3d4bffb732a5017380af5"
}

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.L1_STANDARD_BRIDGE]: {
    interface: new ethers.Interface(L1StandardBridgeAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x4200000000000000000000000000000000000010",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SONIC]: {
        address: "0x64B5a5Ed26DCb17370Ff4d33a8D503f0fbD06CfF",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZORA]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.METIS]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.NEON]: {
        address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MODE]: {
        address: "0x4200000000000000000000000000000000000010",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.ERC20_BRIDGE_INITIATED]: {
        abi: new ethers.Interface([
          "event ERC20BridgeInitiated( address indexed localToken, address indexed remoteToken, address indexed from, address to, uint256 amount, bytes extraData)",
        ]),
      },
      [EVENT_ENUM.ETH_BRIDGE_INITIATED]: {
        abi: new ethers.Interface([
          "event ETHBridgeInitiated( address indexed from, address indexed to, uint256 amount, bytes extraData)",
        ]),
      },
    },
  }
};
