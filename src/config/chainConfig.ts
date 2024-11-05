import { CHAIN_ID } from "../enums";

export const chainConfig = {
  [CHAIN_ID.ARBITRUM]: {
    rpcUrl: process.env.ARBITRUM_RPC_URL || "https://arb1.arbitrum.io/rpc",
  },
};
