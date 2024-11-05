import { CHAIN_ID } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import RhinoFiDepositAbi from "./abis/RhinoFiDeposit.json";
import { ethers } from "ethers";

enum CONTRACT_ENUM {
  DEPOSIT_CONTRACT = "DVFDepositContract",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.DEPOSIT_CONTRACT]: {
    interface: new ethers.Interface(RhinoFiDepositAbi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: "0x0000000000000000000000000000000000000000",
    },

    events: {
      Swap: {
        signature: "",
        abi: "",
      },
    },
  },
};

export { CONTRACT_ENUM, contracts };
