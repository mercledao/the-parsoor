import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import AugustusV5Abi from "./abis/AugustusV5.json";
import AugustusV6Abi from "./abis/AugustusV6.json";
import AugustusRFQAbi from "./abis/AugustusRFQ.json";
import DeltaV2Abi from "./abis/DeltaV2.json";

enum CONTRACT_ENUM {
  AUGUSTUS_V5 = "AUGUSTUS_V5",
  AUGUSTUS_V6 = "AUGUSTUS_V6.2",
  AUGUSTUS_RFQ = "AUGUSTUS_RFQ",
  DELTA_V2 = "DELTA_V2",
}

enum EVENT_ENUM {
  SWAPPED_V3 = "0xe00361d207b252a464323eb23d45d42583e391f2031acdd2e9fa36efddd43cb0",
  SWAPPED_DIRECT = "0xd2d73da2b5fd52cd654d8fd1b514ad57355bad741de639e3a1c3a20dd9f17347",
  ORDER_FILLED = "0x6621486d9c28838df4a87d2cca5007bc2aaf6a5b5de083b1db8faf709302c473",
  ORDER_SETTLED = "0x75d5267369ab1e5d036f575e588260a9d604f045d27109fdc44442c4f12bd61a",
  SWAP = "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
  BOUGHT_V3 = "0x4cc7e95e48af62690313a0733e93308ac9a73326bc3c29f1788b1191c376d5b6"
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.AUGUSTUS_V5]: {
    interface: new ethers.Interface(AugustusV5Abi),
    deployments: {
      [CHAIN_ID.AVALANCHE]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x59C7C832e96D2568bea6db468C1aAdcbbDa08A52",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x7E63A5f1a8F0B4d0934B2f2327DAED3F6bb2ee75",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON_ZK]: {
        address: "0xb83b554730d29ce4cb55bb42206c3e2c03e4a40a",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.SWAPPED_V3]: {
        abi: new ethers.Interface([
          "event SwappedV3 (bytes16 uuid, address partner, uint256 feePercent, address initiator, address indexed beneficiary, address indexed srcToken, address indexed destToken, uint256 srcAmount, uint256 receivedAmount, uint256 expectedAmount)",
        ]),
      },
      [EVENT_ENUM.SWAPPED_DIRECT]: {
        abi: new ethers.Interface([
          "event SwappedDirect (bytes16 uuid, address partner, uint256 feePercent, address initiator, uint8 kind, address indexed beneficiary, address indexed srcToken, address indexed destToken, uint256 srcAmount, uint256 receivedAmount, uint256 expectedAmount)",
        ]),
      },
      [EVENT_ENUM.SWAP]: {
        abi: new ethers.Interface([
          "event Swap (address indexed sender, uint256 amount0In, uint256 amount1In, uint256 amount0Out, uint256 amount1Out, address indexed to)",
        ]),
      },
      [EVENT_ENUM.BOUGHT_V3]: {
        abi: new ethers.Interface([
          "event BoughtV3 (bytes16 uuid, address partner, uint256 feePercent, address initiator, address indexed beneficiary, address indexed srcToken, address indexed destToken, uint256 srcAmount, uint256 receivedAmount, uint256 expectedAmount)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.AUGUSTUS_V6]: {
    interface: new ethers.Interface(AugustusV6Abi),
    deployments: {
      [CHAIN_ID.AVALANCHE]: {
        address: "0x6A000F20005980200259B80c5102003040001068",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x6A000F20005980200259B80c5102003040001068",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x6A000F20005980200259B80c5102003040001068",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x6A000F20005980200259B80c5102003040001068",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x6A000F20005980200259B80c5102003040001068",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x6A000F20005980200259B80c5102003040001068",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x6A000F20005980200259B80c5102003040001068",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x6A000F20005980200259B80c5102003040001068",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON_ZK]: {
        address: "0x6A000F20005980200259B80c5102003040001068",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0x6A000F20005980200259B80c5102003040001068",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.SWAPPED_V3]: {
        abi: new ethers.Interface([
          "event SwappedV3 (bytes16 uuid, address partner, uint256 feePercent, address initiator, address indexed beneficiary, address indexed srcToken, address indexed destToken, uint256 srcAmount, uint256 receivedAmount, uint256 expectedAmount)",
        ]),
      },
      [EVENT_ENUM.SWAPPED_DIRECT]: {
        abi: new ethers.Interface([
          "event SwappedDirect (bytes16 uuid, address partner, uint256 feePercent, address initiator, uint8 kind, address indexed beneficiary, address indexed srcToken, address indexed destToken, uint256 srcAmount, uint256 receivedAmount, uint256 expectedAmount)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.AUGUSTUS_RFQ]: {
    interface: new ethers.Interface(AugustusRFQAbi),
    deployments: {
      [CHAIN_ID.AVALANCHE]: {
        address: "0x34302c4267d0dA0A8c65510282Cc22E9e39df51f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x0927FD43a7a87E3E8b81Df2c44B03C4756849F6D",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0xe92b586627ccA7a83dC919cc7127196d70f55a06",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0xa003dFBA51C9e1e56C67ae445b852bdEd7aC5EEd",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0x8DcDfe88EF0351f27437284D0710cD65b20288bb",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x2DF17455B96Dde3618FD6B1C3a9AA06D6aB89347",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x0927FD43a7a87E3E8b81Df2c44B03C4756849F6D",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0xF3CD476C3C4D3Ac5cA2724767f269070CA09A043",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON_ZK]: {
        address: "0x7Ee1F7fa4C0b2eDB0Fdd5944c14A07167700486E",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0x92EaD5bACf6F0E995FA46Ad8215A9b11f67ca241",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.ORDER_FILLED]: {
        abi: new ethers.Interface([
          "event OrderFilled (bytes32 indexed orderHash, address indexed maker, address makerAsset, uint256 makerAmount, address indexed taker, address takerAsset, uint256 takerAmount)",
        ]),
      },
    },
  },
  [CONTRACT_ENUM.DELTA_V2]: {
    interface: new ethers.Interface(DeltaV2Abi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x0000000000bbf5c5fd284e657f01bd000933c96d",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x0000000000bbf5c5fd284e657f01bd000933c96d",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.ORDER_SETTLED]: {
        abi: new ethers.Interface([
          "event OrderSettled (address indexed owner, address indexed beneficiary, address srcToken, address destToken, uint256 srcAmount, uint256 destAmount, uint256 returnAmount, uint256 protocolFee, uint256 partnerFee, bytes32 indexed orderHash)",
        ]),
      },
    },
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
