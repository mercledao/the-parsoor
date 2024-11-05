import { CHAIN_ID } from "../../enums";

export type ITransaction = {
  chainId: CHAIN_ID;
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
  data: string;
  logs: ITransactionLog[];
};

export type ITransactionLog = {
  contractAddress: string;
  topics: string[];
  data: string;
};
