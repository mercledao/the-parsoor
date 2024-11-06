import { CHAIN_ID } from '../../enums';
import { ITransactionAction } from './ITransactionActions';

/**
 * @description A map of protocol versions to transactions
 */
export type IProtocolTestingData = Record<ProtocolVersion, IProtocolTestTransaction[]>;

/**
 * @description The version of the protocol
 */
export type ProtocolVersion = string;

/**
 * @description A transaction for testing
 */
export type IProtocolTestTransaction = {
  txnHash: string;
  chainId: CHAIN_ID;
  emittedActions: ITransactionAction[];
};