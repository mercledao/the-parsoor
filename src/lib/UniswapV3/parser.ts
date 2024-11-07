import * as ethers from 'ethers';
import { ACTION_ENUM } from '../../enums';
import { ProtocolHelper } from '../../helpers';
import { ISingleSwapAction, ITransaction, ITransactionAction } from '../../types';
import { CONTRACT_ENUM, contracts } from './contracts';

export class UniswapV3Parser {
  public static async parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.POOL, contracts)) {
      const swapEvents = transaction.logs.filter(log => 
        log.topics[0] === contracts[CONTRACT_ENUM.POOL].events.Swap.signature
      );

      if (swapEvents.length > 0) {
        try {
          const parsedSwaps = await this.parseSwapEvents(swapEvents, transaction);
          actions.push(...parsedSwaps);
        } catch (error) {
          console.error('Failed to parse swap events:', error);
          return [];
        }
      }
    }

    return this.combineMultiHopSwaps(actions);
  }

  private static async parseSwapEvents(events: any[], transaction: ITransaction): Promise<ISingleSwapAction[]> {
    const parsedSwaps = await Promise.all(events.map(async event => {
      try {
        const decodedData = contracts[CONTRACT_ENUM.POOL].events.Swap.abi.decodeEventLog(
          'Swap',
          event.data,
          event.topics
        );

        const poolContract = new ethers.Contract(
          event.contractAddress,
          contracts[CONTRACT_ENUM.POOL].interface,
          null
        );

        const [token0, token1] = await Promise.all([
          poolContract.token0(),
          poolContract.token1()
        ]);

        const amount0 = decodedData.amount0;
        const amount1 = decodedData.amount1;

        const swap: ISingleSwapAction = {
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken: amount0.lt(0) ? token0 : token1,
          toToken: amount0.gt(0) ? token0 : token1,
          fromAmount: amount0.lt(0) ? (-amount0).toString() : (-amount1).toString(),
          toAmount: amount0.gt(0) ? amount0.toString() : amount1.toString(),
          recipient: decodedData.recipient,
          sender: decodedData.sender
        };

        return swap;
      } catch (error) {
        console.error('Failed to parse swap event:', error);
        throw error;
      }
    }));

    return parsedSwaps;
  }

  private static combineMultiHopSwaps(actions: ITransactionAction[]): ITransactionAction[] {
    if (actions.length <= 1) return actions;

    const result: ITransactionAction[] = [];
    let currentPath: ISingleSwapAction[] = [];

    for (let i = 0; i < actions.length; i++) {
      const action = actions[i] as ISingleSwapAction;
      const nextAction = i < actions.length - 1 ? actions[i + 1] as ISingleSwapAction : null;

      currentPath.push(action);

      if (!nextAction || action.recipient !== nextAction.recipient) {
        if (currentPath.length === 1) {
          result.push(currentPath[0]);
        } else {
          result.push({
            type: ACTION_ENUM.MULTI_SWAP,
            fromTokens: currentPath.map(a => a.fromToken),
            toTokens: currentPath.map(a => a.toToken),
            fromAmounts: currentPath.map(a => a.fromAmount),
            toAmounts: currentPath.map(a => a.toAmount),
            recipients: currentPath.map(a => a.recipient),
            sender: currentPath[0].sender
          });
        }
        currentPath = [];
      }
    }

    return result;
  }
}
