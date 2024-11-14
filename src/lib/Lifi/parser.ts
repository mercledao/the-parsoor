import { ethers } from 'ethers';
import { ACTION_ENUM } from '../../enums';
import { ProtocolHelper } from '../../helpers';
import { ITransaction, ITransactionAction } from '../../types';
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from './contracts';

export class LifiParser {
  public static async parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];
    const logs = transaction.logs;

    console.log('Transaction logs:', logs);

    for (const log of logs) {
      try {
        if (!ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.LIFI_DIAMOND, contracts)) {
          console.log('No contract found for address:', log.contractAddress);
          continue;
        }

        const contract = contracts[CONTRACT_ENUM.LIFI_DIAMOND];
        const event = contract.interface.parseLog(log);
        if (!event) {
          console.log('Failed to parse event for log:', log);
          continue;
        }

        console.log('Parsed event:', event.name, event.args);

        if (event.name === EVENT_ENUM.SWAP_STARTED) {
          actions.push({
            type: ACTION_ENUM.SINGLE_SWAP,
            fromToken: event.args.fromToken || ethers.ZeroAddress,
            toToken: event.args.toToken,
            fromAmount: event.args.fromAmount.toString(),
            toAmount: event.args.toAmount.toString(),
            sender: event.args.sender,
            recipient: event.args.sender
          });
        } else if (event.name === EVENT_ENUM.BRIDGE_STARTED) {
          actions.push({
            type: ACTION_ENUM.BRIDGE_OUT,
            fromChain: transaction.chainId,
            toChain: event.args.toChainId,
            fromToken: event.args.fromToken || ethers.ZeroAddress,
            toToken: event.args.toToken || ethers.ZeroAddress,
            fromAmount: event.args.fromAmount.toString(),
            toAmount: event.args.toAmount.toString(),
            sender: event.args.sender,
            recipient: event.args.sender
          });
        }
      } catch (e) {
        console.error('Error parsing log:', e);
        continue;
      }
    }

    console.log('Parsed actions:', actions);
    return actions;
  }
}
