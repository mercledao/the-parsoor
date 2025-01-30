import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import GPV2SettlementAbi from "./abis/GPV2Settlement.json";

enum CONTRACT_ENUM {
  GP_V2_SETTLEMENT = "GP_V2_SETTLEMENT",
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.GP_V2_SETTLEMENT]: {
    interface: new ethers.Interface(GPV2SettlementAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x09aea4b2242abC8bb4BB78D537A67a245A7bEC64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0xe35e9842fceaca96570b734083f4a58e8f7c5f2a",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x5c7BCd6E7De5423a257D81B442095A1a6ced35C5",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x6f26Bf09B1C792e3228e5467807a900A503c0281",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BLAST]: {
        address: "0x2D509190Ed0172ba588407D4c2df918F955Cc6E1",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0xE0B015E54d54fc84a6cB9B666099c46adE9335FF",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ALEPH_ZERO]: {
        address: "0x13fDac9F9b4777705db45291bbFF3c972c6d1d97",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LINEA]: {
        address: "0x7E63A5f1a8F0B4d0934B2f2327DAED3F6bb2ee75",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.LISK]: {
        address: "0x9552a0a6624A23B848060AE5901659CDDa1f83f8",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MODE]: {
        address: "0x3baD7AD0728f9917d1Bf08af5782dCbD516cDd96",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x9295ee1d8C5b022Be115A2AD3c30C72E34e7F096",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.READ_STONE]: {
        address: "0x13fDac9F9b4777705db45291bbFF3c972c6d1d97",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SCROLL]: {
        address: "0x3bad7ad0728f9917d1bf08af5782dcbd516cdd96",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.WORLDCHAIN]: {
        address: "0x09aea4b2242abC8bb4BB78D537A67a245A7bEC64",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ZORA]: {
        address: "0x13fDac9F9b4777705db45291bbFF3c972c6d1d97",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
    },

    events: {},
  },
};

export { CONTRACT_ENUM, contracts };
