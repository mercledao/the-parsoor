import { ethers } from "ethers";
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from "../../enums";
import { IProtocolContractDefinitions } from "../../types";
import GPV2SettlementAbi from "./abis/GPV2Settlement.json";

enum CONTRACT_ENUM {
  GP_V2_SETTLEMENT = "GP_V2_SETTLEMENT",
}
enum EVENT_ENUM {
  TRADE = "0xa07a543ab8a018198e99ca0184c93fe9050a79400a0a723441f84de1d972cc17"
}
const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.GP_V2_SETTLEMENT]: {
    interface: new ethers.Interface(GPV2SettlementAbi),
    deployments: {
      [CHAIN_ID.BASE]: {
        address: "0x9008D19f58AAbD9eD0D60971565AA8510560ab41",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ARBITRUM]: {
        address: "0x9008D19f58AAbD9eD0D60971565AA8510560ab41",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.ETHEREUM]: {
        address: "0x9008D19f58AAbD9eD0D60971565AA8510560ab41",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      },
      [CHAIN_ID.POLYGON]: {
        address: "0x9008D19f58AAbD9eD0D60971565AA8510560ab41",
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING],
      }
    },
    events: {
      [EVENT_ENUM.TRADE]: {
        abi: new ethers.Interface([
          "event Trade(address indexed owner, address sellToken, address buyToken, uint256 sellAmount, uint256 buyAmount, uint256 feeAmount, bytes orderUid)",
        ]),
      },
    },
  },
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
