import { CHAIN_ID } from "../../config/chains";
import { IProtocolContractDefinitions } from "../../types/chunks/IContractDefinition";
import RhinoFiDepositAbi from "./abis/RhinoFiDeposit.json";

const contracts: IProtocolContractDefinitions = {
  RhinoFiDepositContract: {
    abi: RhinoFiDepositAbi,
    deployments: {
      [CHAIN_ID.ARBITRUM]: "0x0000000000000000000000000000000000000000",
    },
  },
};

export default contracts;
