import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import Routerv1 from "./abis/Routerv1.1.json";

enum CONTRACT_ENUM {
  ROUTER_V1 = "ROUTER_V1",
}
enum EVENT_ENUM {
  EXCHANGE = "0x56d0661e240dfb199ef196e16e6f42473990366314f0226ac978f7be3cd9ee83",
}
const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.ROUTER_V1]: {
    interface: new ethers.Interface(Routerv1),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x4f37A9d177470499A2dD084621020b023fcffc1F",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x2191718CD32d02B8E60BAdFFeA33E4B5DD9A0A0D",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x16C6521Dff6baB339122a0FE25a9116693265353",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x0DCDED3545D565bA3B19E683431381007245d983",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.GNOSIS]: {
        address: "0x0DCDED3545D565bA3B19E683431381007245d983",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.AVALANCHE]: {
        address: "0x0DCDED3545D565bA3B19E683431381007245d983",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.FANTOM]: {
        address: "0x0DCDED3545D565bA3B19E683431381007245d983",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.BSC]: {
        address: "0xA72C85C258A81761433B4e8da60505Fe3Dd551CC",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.MANTLE]: {
        address: "0x4f37A9d177470499A2dD084621020b023fcffc1F",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      // [CHAIN_ID.KAVA]: {
      //   address: "0x0DCDED3545D565bA3B19E683431381007245d983",
      //   listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      // },
      // [CHAIN_ID.X_LAYER]: {
      //   address: "0xBFab8ebc836E1c4D81837798FC076D219C9a1855",
      //   listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      // },
      [CHAIN_ID.ZKSYNC_ERA]: {
        address: "0x7C915390e109CA66934f1eB285854375D1B127FA",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.SONIC]: {
        address: "0x5eeE3091f747E60a045a2E715a4c71e600e31F6E",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.TAIKO]: {
        address: "0xd2002373543Ce3527023C75e7518C274A51ce712",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.OPTIMISM]: {
        address: "0x0DCDED3545D565bA3B19E683431381007245d983",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      // [CHAIN_ID.CORN]: {
      //   address: "0xe61Fb97Ef6eBFBa12B36Ffd7be785c1F5A2DE66b",
      //   listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      // },
      // [CHAIN_ID.INK]: {
      //   address: "0xd7E72f3615aa65b92A4DBdC211E296a35512988B",
      //   listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      // },
    },
    events: {
      [EVENT_ENUM.EXCHANGE]: {
        abi: new ethers.Interface([
          "event Exchange (address indexed sender, address indexed receiver, address[11] route, uint256[5][5] swap_params, address[5] pools, uint256 in_amount, uint256 out_amount)",
        ]),
      },
    },
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
