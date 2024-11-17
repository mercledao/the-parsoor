import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import PoolAbi from "./abis/Pool.json";
import SwapRouter01Abi from "./abis/SwapRouter01.json";
import SwapRouter02Abi from "./abis/SwapRouter02.json";
import UniswapUniversalRouterABI from "./abis/UniswapUniversalRouter.json";
import UniswapV2RouterABI from "./abis/UniswapV2Router.json";

export enum CONTRACT_ENUM {
  POOL_V2 = "PoolV2",
  ROUTER_V2 = "RouterV2",
  POOL_V3 = "PoolV3",
  ROUTER_V3_01 = "RouterV3_01",
  ROUTER_V3_02 = "RouterV3_02",
  UNIVERSAL_ROUTER = "UniversalRouter",
}

export enum COMMAND_ENUM {
  // V3 Swap Commands
  V3_SWAP_EXACT_IN = 0x00,
  V3_SWAP_EXACT_OUT = 0x01,

  // V2 Swap Commands
  V2_SWAP_EXACT_IN = 0x02,
  V2_SWAP_EXACT_OUT = 0x03,

  // Permit2 Commands
  PERMIT2_PERMIT = 0x0a,
  PERMIT2_TRANSFER_FROM = 0x0b,

  // Wrap/Unwrap Commands
  WRAP_ETH = 0x0c,
  UNWRAP_WETH = 0x0d,

  // Sweep Commands
  SWEEP = 0x0e,
  TRANSFER = 0x0f,

  // Payment Commands
  PAY_PORTION = 0x10,

  // V3 LP Commands
  V3_MINT = 0x11,
  V3_COLLECT = 0x12,
  V3_BURN = 0x13,

  // V2 LP Commands
  V2_MINT = 0x14,
  V2_BURN = 0x15,

  // Routing Commands
  ROUTE = 0x16,
  NOOP = 0x17,

  // Timestamp Commands
  TIMESTAMP = 0x18,

  // Limit Order Commands
  LIMIT_ORDER = 0x19,
  CANCEL_LIMIT_ORDER = 0x1a,
}

export enum EVENT_ENUM {
  SWAP = "0xfb88e312bc8f158089ab52fe745b8e72d7f8c0a6cdbf33c69e53c04ba0367efd",
}

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER_V2]: {
    interface: new ethers.Interface(UniswapV2RouterABI),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x4A7b5Da61326A6379179b40d00F57E5bbDC962c2",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0xedf6066a2b290C185783862C7F4776A2C8077AD1",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SEPOLIA]: {
        address: "0xeE567Fe1712Faf6149d80dA1E6934E354124CfE3",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0xBB66Eb1c5e875933D44DAe661dbD80e5D9B03035",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZORA]: {
        address: "0xa00F34A632630EFd15223B1968358bA4845bEEC7",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.WORLDCHAIN]: {
        address: "0x541aB7c31A119441eF3575F6973277DE0eF460bd",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.UNIVERSAL_ROUTER]: {
    interface: new ethers.Interface(UniswapUniversalRouterABI),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x5E325eDA8064b456f4781070C0738d849c824258",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0x643770E279d5D0733F21d6DC03A8efbABf3255B4",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xCb1355ff08Ab38bBCE60111F1bb2B784bE25D7e8",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0xec7BE89e9d109e7e3Fec59c222CF297125FEFda2",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x4Dae2f939ACf50408e13d58534Ff8c2776d45265",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x4Dae2f939ACf50408e13d58534Ff8c2776d45265",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x28731BCC616B5f51dD52CF2e4dF0E78dD1136C06",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.CELO]: {
        address: "0x643770E279d5D0733F21d6DC03A8efbABf3255B4",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.WORLDCHAIN]: {
        address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZORA]: {
        address: "0x2986d9721A49838ab4297b695858aF7F17f38014",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {},
  },
  [CONTRACT_ENUM.POOL_V3]: {
    interface: new ethers.Interface(PoolAbi.abi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: ethers.ZeroAddress,
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.ROUTER_V3_01]: {
    interface: new ethers.Interface(SwapRouter01Abi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
    },
    events: {},
  },
  [CONTRACT_ENUM.ROUTER_V3_02]: {
    interface: new ethers.Interface(SwapRouter02Abi),
    deployments: {
      [CHAIN_ID.AVALANCHE]: {
        address: "0xbb00FF08d01D300023C629E8fFfFcb65A5a578cE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x2626664c2603336E57B271c5C0b26F421741e481",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0x549FEB8c9bd4c12Ad2AB27022dA12492aC452B66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.CELO]: {
        address: "0x5615CDAb10dc425a742d643d949a7F474C01abc4",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.WORLDCHAIN]: {
        address: "0x091AD9e2e6e5eD44c1c66dB50e49A601F9f36cF6",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x99c56385daBCE3E81d8499d0b8d0257aBC07E8A3",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
      [CHAIN_ID.ZORA]: {
        address: "0x7De04c96BE5159c3b5CeffC82aa176dc81281557",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING],
      },
    },
    events: {},
  },
};
