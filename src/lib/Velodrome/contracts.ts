import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import RouterAbi from "./abis/Router.json";

export enum CONTRACT_ENUM {
  ROUTER = "ROUTER",
}

export enum EVENT_ENUM {
  ROUTER_SWAP = "0xb3e2773606abfd36b5bd91394b3a54d1398336c65005baf7bf7a05efeffaf75b",
}

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER]: {
    interface: new ethers.Interface(RouterAbi),
    deployments: {
      [CHAIN_ID.OPTIMISM]: {
        address: "0xa062aE8A9c5e11aaA026fc2670B0D65cCc8B2858",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },
    events: {},
  },
};
