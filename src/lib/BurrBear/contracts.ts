import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import VaultAbi from "./abis/Vault.json";

enum CONTRACT_ENUM {
  VAULT = "Vault",
}
enum EVENT_ENUM {
  SWAP = "0x2170c741c41531aec20e7c107c24eecfdd15e69c9bb0a8dd37b1840b9e0b207b"
}
const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.VAULT]: {
    interface: new ethers.Interface(VaultAbi),
    deployments: {
      [CHAIN_ID.BERACHAIN]: {
        address: "0xBE09E71BDc7b8a50A05F7291920590505e3C7744",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {
      [EVENT_ENUM.SWAP]: {
        abi: new ethers.Interface([
          "event Swap (bytes32 indexed poolId, address indexed tokenIn, address indexed tokenOut, uint256 amountIn, uint256 amountOut)",
        ]),
      },
    },
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
