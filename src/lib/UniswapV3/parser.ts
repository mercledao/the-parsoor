import * as ethers from 'ethers';
import { ACTION_ENUM } from '../../enums';
import { ProtocolHelper } from '../../helpers';
import { ISingleSwapAction, ITransaction, ITransactionAction } from '../../types';
import { COMMAND_ENUM, CONTRACT_ENUM, contracts } from './contracts';

interface V3SwapParams {
  recipient: string;
  sender: string;
  tokenIn: string;
  tokenOut: string;
  fee: number;
  amountIn?: string;
  amountOut?: string;
  amountInMaximum?: string;
  amountOutMinimum?: string;
}

export class UniswapV3Parser {
  public static async parseTransaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    // First try to parse router calldata
    if (ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.ROUTER, contracts)) {
      try {
        const routerActions = await this.parseRouterCalldata(transaction);
        if (routerActions.length > 0) {
          return this.combineMultiHopSwaps(routerActions);
        }
      } catch (error) {
        console.warn('Failed to parse router calldata:', error);
      }
    }

    // Fallback to parsing pool events
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

  private static async parseRouterCalldata(transaction: ITransaction): Promise<ITransactionAction[]> {
    const decodedData = contracts[CONTRACT_ENUM.ROUTER].interface.parseTransaction({
      data: transaction.data
    });

    if (decodedData.name !== 'execute') {
      return [];
    }

    const commands = decodedData.args[0] as string;
    const inputs = decodedData.args[1] as string[];
    
    const actions: ITransactionAction[] = [];
    let inputIndex = 0;

    for (let i = 0; i < commands.length; i += 2) {
      const commandId = parseInt(commands.slice(i, i + 2), 16);
      
      switch (commandId) {
        case COMMAND_ENUM.V3_SWAP_EXACT_IN:
        case COMMAND_ENUM.V3_SWAP_EXACT_OUT: {
          const swapData = this.decodeSwapData(inputs[inputIndex], commandId);
          if (swapData) {
            actions.push(swapData);
          }
          inputIndex++;
          break;
        }

        case COMMAND_ENUM.PERMIT2_TRANSFER_FROM:
        case COMMAND_ENUM.WRAP_ETH:
        case COMMAND_ENUM.UNWRAP_WETH:
        case COMMAND_ENUM.V3_MINT:
        case COMMAND_ENUM.V3_COLLECT:
        case COMMAND_ENUM.V3_BURN:
        case COMMAND_ENUM.SWEEP:
        case COMMAND_ENUM.TRANSFER:
          inputIndex++;
          break;

        default:
          inputIndex++;
          break;
      }
    }

    return actions;
  }

  private static decodeSwapData(input: string, commandId: number): ISingleSwapAction | null {
    try {
      const abiCoder = new ethers.AbiCoder();
      
      const isExactIn = commandId === COMMAND_ENUM.V3_SWAP_EXACT_IN;
      const params = abiCoder.decode(
        [
          'address', // recipient
          'address', // tokenIn
          'address', // tokenOut
          'uint24', // fee
          'uint256', // amount
          'uint256', // amountLimit
          'address'  // sender
        ],
        input
      ) as unknown[];

      const swapParams: V3SwapParams = {
        recipient: params[0] as string,
        tokenIn: params[1] as string,
        tokenOut: params[2] as string,
        fee: Number(params[3]),
        sender: params[6] as string
      };

      if (isExactIn) {
        swapParams.amountIn = (params[4] as bigint).toString();
        swapParams.amountOutMinimum = (params[5] as bigint).toString();
      } else {
        swapParams.amountOut = (params[4] as bigint).toString();
        swapParams.amountInMaximum = (params[5] as bigint).toString();
      }

      return {
        type: ACTION_ENUM.SINGLE_SWAP,
        fromToken: swapParams.tokenIn,
        toToken: swapParams.tokenOut,
        fromAmount: isExactIn ? swapParams.amountIn! : swapParams.amountInMaximum!,
        toAmount: isExactIn ? swapParams.amountOutMinimum : swapParams.amountOut,
        recipient: swapParams.recipient,
        sender: swapParams.sender
      };
    } catch (error) {
      console.error('Failed to decode swap data:', error);
      return null;
    }
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

      if (!nextAction || nextAction.fromToken !== action.toToken) {
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
