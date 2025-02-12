import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import SmartRouterAbi from "./abis/SmartRouter.json";
import RouterAbi from "./abis/Router.json";

enum CONTRACT_ENUM {
  ROUTER = "ROUTER",
  SMART_ROUTER = "SMART_ROUTER"
}
export enum EVENT_ENUM {
  V2_SWAP = "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
  V3_SWAP = "0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67",
  COMMAND_EXECUTED = "0x7737965cdb777c891128c8c79c26b0b4d1d8e261a5c3551fd8f5a8aa939d0b4c",
  NATIVE_TRANSFER_RECEIVED = "0x0a7bb2c1cf6269d1f1c8c4c10bf8e1417e1b64352001305552e89fea8d01db16",
  LIMIT_ORDER_FILL = "0x95fb6205e23ff6bda16a2d1dba56b9ad7c783f67c96fa149785052f47696f2be",
}
const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER]: {
    interface: new ethers.Interface(RouterAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x8c1A3cF8f83074169FE5D7aD50B978e1cD6b37c7",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      }
    },
    events: {
      [EVENT_ENUM.V2_SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.SMART_ROUTER]: {
    interface: new ethers.Interface(SmartRouterAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0xB20C411FC84FBB27e78608C24d0056D974ea9411",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      }
    },
    events: {
      [EVENT_ENUM.V3_SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)",
        ]),
      },
    },
  }
};

export enum COMMAND_ENUM {
  // V3 Swap Commands
  V3_SWAP_EXACT_IN = 0x00,
  V3_SWAP_EXACT_OUT = 0x01,

  // Permit2 Commands
  PERMIT2_TRANSFER_FROM = 0x02,
  PERMIT2_PERMIT_BATCH = 0x03,
  SWEEP = 0x04,
  TRANSFER = 0x05,
  PAY_PORTION = 0x06,

  // V2 Swap Commands
  V2_SWAP_EXACT_IN = 0x08,
  V2_SWAP_EXACT_OUT = 0x09,

  PERMIT2_PERMIT = 0x0a,
  WRAP_ETH = 0x0b,
  UNWRAP_WETH = 0x0c,

  PERMIT2_TRANSFER_FROM_BATCH = 0x0d,

  // NFT Commands
  SEAPORT = 0x0e,
  LOOKS_RARE_721 = 0x0f,
  NFTX = 0x10,
  CRYPTOPUNKS = 0x11,
  LOOKS_RARE_1155 = 0x12,
  OWNER_CHECK_721 = 0x13,
  OWNER_CHECK_1155 = 0x14,
  SWEEP_ERC721 = 0x15,
  X2Y2_721 = 0x16,
  SUDOSWAP = 0x17,
  NFT20 = 0x18,
  X2Y2_1155 = 0x19,
  FOUNDATION = 0x1a,
  SWEEP_ERC1155 = 0x1b,
}

export { CONTRACT_ENUM, contracts };
