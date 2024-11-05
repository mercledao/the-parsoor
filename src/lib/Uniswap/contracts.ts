import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import UniswapV2RouterABI from "./abis/UniswapV2Router.json";

export enum CONTRACT_ENUM {
  ROUTER = "UniswapV2Router02",
}

export enum EVENT_ENUM {
  SWAP = "Swap",
}

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER]: {
    interface: new ethers.Interface(UniswapV2RouterABI),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.SWAP]: {
        signature: ethers.id("Swap(address,uint256,uint256,uint256,uint256,address)"),
        abi: new ethers.Interface([
          "event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)"
        ]),
      },
    },
  },
};