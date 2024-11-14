import { ethers } from 'ethers';
import { ACTION_ENUM, CHAIN_ID } from '../../enums';
import { ITransaction, ITransactionAction } from '../../types';

export class LifiParser {
  public static async parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];
    const logs = transaction.logs;

    for (const log of logs) {
      try {
        if (log.topics[0] === '0x15955c5a4cc61b8fbb05301bce47fd31c0e6f935e1ab97fdac9b134c887bb074') {
          const bridgeData = ethers.AbiCoder.defaultAbiCoder().decode(
            ['uint256', 'uint256', 'uint256', 'bytes'],
            log.data
          );

          actions.push({
            type: ACTION_ENUM.BRIDGE_OUT,
            fromChain: transaction.chainId,
            toChain: CHAIN_ID.OPTIMISM,
            fromToken: ethers.ZeroAddress,
            toToken: ethers.ZeroAddress,
            fromAmount: bridgeData[2].toString(),
            toAmount: bridgeData[2].toString(),
            sender: transaction.from,
            recipient: transaction.from
          });
          break;
        }
      } catch (e) {
        console.error('Error processing log:', e);
        continue;
      }
    }

    return actions;
  }
}
