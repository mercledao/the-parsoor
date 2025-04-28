import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import SwapRouter01Abi from "./abis/SwapRouter01.json";
import SwapRouter02Abi from "./abis/SwapRouter02.json";
import UniswapV2RouterAbi from "./abis/UniswapV2Router.json";

export enum CONTRACT_ENUM {
  ROUTER_V2 = "RouterV2",
  ROUTER_V3_01 = "RouterV3_01",
  ROUTER_V3_02 = "RouterV3_02",
}

export enum EVENT_ENUM {
  // V2 Events
  V2_SWAP = "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",

  // V3 Events
  V3_SWAP = "0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67",

  // Universal Router Events
  COMMAND_EXECUTED = "0x7737965cdb777c891128c8c79c26b0b4d1d8e261a5c3551fd8f5a8aa939d0b4c",
  NATIVE_TRANSFER_RECEIVED = "0x0a7bb2c1cf6269d1f1c8c4c10bf8e1417e1b64352001305552e89fea8d01db16",
  LIMIT_ORDER_FILL = "0x95fb6205e23ff6bda16a2d1dba56b9ad7c783f67c96fa149785052f47696f2be",
}

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER_V2]: {
    interface: new ethers.Interface(UniswapV2RouterAbi),
    deployments: {
      [CHAIN_ID.BERACHAIN]: {
        address: "0xd91dd58387Ccd9B66B390ae2d7c66dBD46BC6022",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.V2_SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)",
        ]),
      },
    },
  },

  [CONTRACT_ENUM.ROUTER_V3_01]: {
    interface: new ethers.Interface(SwapRouter01Abi),
    deployments: {
      [CHAIN_ID.BERACHAIN]: {
        address: "0xEd158C4b336A6FCb5B193A5570e3a571f6cbe690",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.V3_SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.ROUTER_V3_02]: {
    interface: new ethers.Interface(SwapRouter02Abi),
    deployments: {
      [CHAIN_ID.BERACHAIN]: {
        address: "0xe301E48F77963D3F7DbD2a4796962Bd7f3867Fb4",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.V3_SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)",
        ]),
      },
    },
  },
};
