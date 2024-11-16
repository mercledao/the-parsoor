import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import L1DepositProxyAbi from "./abis/L1DepositProxy.json";
import L1WithdrawalRegistryAbi from "./abis/L1WithdrawalRegistry.json";
import RhinoFiDepositAbi from "./abis/RhinoFiDeposit.json";
import TokensAndRampingAKAL1DepositContractAbi from "./abis/TokensAndRampingAKAL1DepositContract.json";

enum CONTRACT_ENUM {
  // The deposit contract
  DEPOSIT_CONTRACT = "DVFDepositContract",

  // The deposit contract for the eth l1 chain
  RHINOFI_ETH_L1_DEPOSIT_CONTRACT = "RhinoFiEthL1DepositContract",

  // The deposit proxy for the l1 chain
  RHINOFI_L1_DEPOSIT_PROXY = "RhinoFiL1DepositProxy",

  // The l1 withdrawal registry
  L1_WITHDRAWAL_REGISTRY = "TransferRegistry",
}

enum EVENT_ENUM {
  // Event for when a deposit is done
  BRIDGED_DEPOSIT = "0x573284f4c36da6a8d8d84cd06662235f8a770cc98e8c80e304b8f382fdc3dca2",

  // Event for when a withdrawal is done
  BRIDGED_WITHDRAWAL = "0xe4f4f1fb3534fe80225d336f6e5a73007dc992e5f6740152bf13ed2a08f3851a",

  // Event for when a withdrawal is done with native + erc20
  BRIDGED_WITHDRAWAL_WITH_NATIVE = "0x0ec14d41fb8dd758c7a1fc411ce327517caf88a8b9dee8bed60869801990d22c",

  // Event for when a deposit is done on the eth l1 chain
  L1_DEPOSIT_LOG = "0x06724742ccc8c330a39a641ef02a0b419bd09248360680bb38159b0a8c2635d6",

  // Event for when a withdrawal is registered on the L1
  L1_WITHDRAWAL_LOG = "0x36c96ccc320eab9b6da1de6cc1e8ebc52a51cb114710b9c7db204cdad3067ce1",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.DEPOSIT_CONTRACT]: {
    interface: new ethers.Interface(RhinoFiDepositAbi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0x10417734001162Ea139e8b044DFe28DbB8B28ad0",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xB80A582fa430645A043bB4f6135321ee01005fEf",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0xBA4EEE20F434bC3908A0B18DA496348657133A7E",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x1fa66e2B38d0cC496ec51F81c3e05E6A6708986F",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON_ZK]: {
        address: "0x65A4b8A0927c7FD899aed24356BF83810f7b9A3f",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x0bCa65bf4b4c8803d2f0B49353ed57CAAF3d66Dc",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0xcF68a2721394dcf5dCF66F6265C1819720F24528",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BASE]: {
        address: "0x2f59E9086ec8130E21BD052065a9E6B2497bb102",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTA]: {
        address: "0x2B4553122D960CA98075028d68735cC6b15DeEB5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0x87627c7E586441EeF9eE3C28B66662e897513f33",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },

    events: {
      [EVENT_ENUM.BRIDGED_DEPOSIT]: {
        abi: new ethers.Interface([
          "event BridgedDeposit(address indexed user, address indexed token, uint256 amount)",
        ]),
      },

      [EVENT_ENUM.BRIDGED_WITHDRAWAL]: {
        abi: new ethers.Interface([
          "event BridgedWithdrawal(address indexed user, address indexed token, uint256 amount, string withdrawalId)",
        ]),
      },

      [EVENT_ENUM.BRIDGED_WITHDRAWAL_WITH_NATIVE]: {
        abi: new ethers.Interface([
          "event BridgedWithdrawalWithNative(address indexed user, address indexed token, uint256 amountToken, uint256 amountNative)",
        ]),
      },
    },
  },

  [CONTRACT_ENUM.RHINOFI_ETH_L1_DEPOSIT_CONTRACT]: {
    interface: new ethers.Interface(TokensAndRampingAKAL1DepositContractAbi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0x5d22045DAcEAB03B158031eCB7D9d06Fad24609b",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.L1_DEPOSIT_LOG]: {
        abi: new ethers.Interface([
          "event LogDeposit(address depositorEthKey, uint256 starkKey, uint256 vaultId, uint256 assetType, uint256 nonQuantizedAmount, uint256 quantizedAmount)",
        ]),
      },
    },
  },

  [CONTRACT_ENUM.RHINOFI_L1_DEPOSIT_PROXY]: {
    interface: new ethers.Interface(L1DepositProxyAbi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0xeD9d63a96c27f87B07115b56b2e3572827f21646",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.L1_DEPOSIT_LOG]: {
        abi: new ethers.Interface([
          "event LogDeposit(address depositorEthKey, uint256 starkKey, uint256 vaultId, uint256 assetType, uint256 nonQuantizedAmount, uint256 quantizedAmount)",
        ]),
      },
    },
  },

  [CONTRACT_ENUM.L1_WITHDRAWAL_REGISTRY]: {
    interface: new ethers.Interface(L1WithdrawalRegistryAbi),
    deployments: {
      [CHAIN_ID.ETHEREUM]: {
        address: "0xc3CA38091061e3E5358A52d74730F16C60cA9c26",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.L1_WITHDRAWAL_LOG]: {
        abi: new ethers.Interface([
          "event LogRegisteredTransfer(address recipient, address token, uint256 amount, uint256 salt)",
        ]),
      },
    },
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
