import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import LimitOrderRouterAbi from "./abis/LimitOrderRouter.json";
import SwapRouter01Abi from "./abis/SwapRouter01.json";
import SwapRouter02Abi from "./abis/SwapRouter02.json";
import UniswapUniversalRouterAbi from "./abis/UniswapUniversalRouter.json";
import UniswapV2RouterAbi from "./abis/UniswapV2Router.json";

export enum CONTRACT_ENUM {
  ROUTER_V2 = "RouterV2",
  ROUTER_V3_01 = "RouterV3_01",
  ROUTER_V3_02 = "RouterV3_02",
  UNIVERSAL_ROUTER = "UniversalRouter",
  LIMIT_ORDER_ROUTER = "DutchOrderReactorV2",
  EXCLUSIVE_LIMIT_ORDER_ROUTER = "ExclusiveDutchOrderReactor",
}

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
      [EVENT_ENUM.V2_SWAP]: {
        abi: new ethers.Interface([
          "event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.UNIVERSAL_ROUTER]: {
    interface: new ethers.Interface([
      ...UniswapUniversalRouterAbi,
      "function execute(bytes commands, bytes[] inputs) payable",
      "function execute(bytes commands, bytes[] inputs, uint256 deadline) payable",
    ]),
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
    events: {
      [EVENT_ENUM.COMMAND_EXECUTED]: {
        abi: new ethers.Interface([
          "event CommandExecuted(bytes32 indexed commandHash, uint256 indexed commandType)",
        ]),
      },
      [EVENT_ENUM.NATIVE_TRANSFER_RECEIVED]: {
        abi: new ethers.Interface([
          "event NativeTransferReceived(address indexed recipient, uint256 amount)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.ROUTER_V3_01]: {
    interface: new ethers.Interface(SwapRouter01Abi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
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
      [CHAIN_ID.AVALANCHE]: {
        address: "0xbb00FF08d01D300023C629E8fFfFcb65A5a578cE",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x2626664c2603336E57B271c5C0b26F421741e481",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0x549FEB8c9bd4c12Ad2AB27022dA12492aC452B66",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.CELO]: {
        address: "0x5615CDAb10dc425a742d643d949a7F474C01abc4",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.WORLDCHAIN]: {
        address: "0x091AD9e2e6e5eD44c1c66dB50e49A601F9f36cF6",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x99c56385daBCE3E81d8499d0b8d0257aBC07E8A3",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZORA]: {
        address: "0x7De04c96BE5159c3b5CeffC82aa176dc81281557",
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
  [CONTRACT_ENUM.LIMIT_ORDER_ROUTER]: {
    interface: new ethers.Interface(LimitOrderRouterAbi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x00000011F84B9aa48e5f8aA8B9897600006289Be",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.LIMIT_ORDER_FILL]: {
        abi: new ethers.Interface([
          "event LimitOrderFilled(bytes32 indexed orderHash, address indexed maker, address inputToken, address outputToken, uint256 inputAmount, uint256 outputAmount, uint256 deadline)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.EXCLUSIVE_LIMIT_ORDER_ROUTER]: {
    interface: new ethers.Interface(LimitOrderRouterAbi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x6000da47483062A0D734Ba3dc7576Ce6A0B645C4",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.LIMIT_ORDER_FILL]: {
        abi: new ethers.Interface([
          "event LimitOrderFilled(bytes32 indexed orderHash, address indexed maker, address inputToken, address outputToken, uint256 inputAmount, uint256 outputAmount, uint256 deadline)",
        ]),
      },
    },
  },
};
