export type ITransaction = {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
  logs: ITransactionLog[];
};

export type ITransactionLog = {
  contractAddress: string;
  topics: string[];
  data: string;
};
