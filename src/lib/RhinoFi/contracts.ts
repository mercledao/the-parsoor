import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import RhinoFiDepositAbi from "./abis/RhinoFiDeposit.json";
import { ethers } from "ethers";

enum CONTRACT_ENUM {
  // The deposit contract
  DEPOSIT_CONTRACT = "DVFDepositContract",
}

enum EVENT_ENUM {
  // Event for when a deposit is done
  BRIDGED_DEPOSIT = "BridgedDeposit",

  // Event for when a withdrawal is done
  BRIDGED_WITHDRAWAL = "BridgedWithdrawal",

  // Event for when a withdrawal is done with native + erc20
  BRIDGED_WITHDRAWAL_WITH_NATIVE = "BridgedWithdrawalWithNative",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.DEPOSIT_CONTRACT]: {
    interface: new ethers.Interface(RhinoFiDepositAbi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: "0x10417734001162Ea139e8b044DFe28DbB8B28ad0",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },

    events: {
      [EVENT_ENUM.BRIDGED_DEPOSIT]: {
        signature:
          "0x573284f4c36da6a8d8d84cd06662235f8a770cc98e8c80e304b8f382fdc3dca2",
        abi: new ethers.Interface([
          "event BridgedDeposit(address indexed user, address indexed token, uint256 amount)",
        ]),
      },

      [EVENT_ENUM.BRIDGED_WITHDRAWAL]: {
        signature:
          "0xe4f4f1fb3534fe80225d336f6e5a73007dc992e5f6740152bf13ed2a08f3851a",
        abi: new ethers.Interface([
          "event BridgedWithdrawal(address indexed user, address indexed token, uint256 amount, string withdrawalId)",
        ]),
      },

      [EVENT_ENUM.BRIDGED_WITHDRAWAL_WITH_NATIVE]: {
        signature:
          "0x0ec14d41fb8dd758c7a1fc411ce327517caf88a8b9dee8bed60869801990d22c",
        abi: new ethers.Interface([
          "event BridgedWithdrawalWithNative(address indexed user, address indexed token, uint256 amountToken, uint256 amountNative)",
        ]),
      },
    },
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
