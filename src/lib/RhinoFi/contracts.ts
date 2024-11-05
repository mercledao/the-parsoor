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
    },
  },
};

export { CONTRACT_ENUM, contracts };
