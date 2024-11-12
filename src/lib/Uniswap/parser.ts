import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  ILimitOrderAction,
  IMultiSwapAction,
  ISingleSwapAction,
  ITransaction,
  ITransactionAction
} from "../../types";
import { COMMAND_ENUM, CONTRACT_ENUM, contracts } from "./contracts";

enum CONTRACT_FUNCTION_NAMES {
  SWAP_EXACT_TOKENS_FOR_TOKENS = "swapExactTokensForTokens",
  SWAP_TOKENS_FOR_EXACT_TOKENS = "swapTokensForExactTokens",
  SWAP_EXACT_ETH_FOR_TOKENS = "swapExactETHForTokens",
  SWAP_TOKENS_FOR_EXACT_ETH = "swapTokensForExactETH",
  SWAP_EXACT_TOKENS_FOR_ETH = "swapExactTokensForETH",
  SWAP_ETH_FOR_EXACT_TOKENS = "swapETHForExactTokens",
  SWAP_EXACT_TOKENS_FOR_TOKENS_SUPPORTING_FEE = "swapExactTokensForTokensSupportingFeeOnTransferTokens",
  SWAP_EXACT_ETH_FOR_TOKENS_SUPPORTING_FEE = "swapExactETHForTokensSupportingFeeOnTransferTokens",
  SWAP_EXACT_TOKENS_FOR_ETH_SUPPORTING_FEE = "swapExactTokensForETHSupportingFeeOnTransferTokens"
}

interface V3SwapParams {
  recipient: string;
  tokenIn: string;
  tokenOut: string;
  fee: number;
  sender: string;
  amountIn?: string;
  amountOutMinimum?: string;
  amountOut?: string;
  amountInMaximum?: string;
}

export class UniswapParser {
  // V2 Parser Methods
  public static parseV2Transaction(transaction: ITransaction): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.ROUTER_V2,
      contracts
    );

    switch (parsedTxn.name) {
      case CONTRACT_FUNCTION_NAMES.SWAP_EXACT_TOKENS_FOR_TOKENS:
      case CONTRACT_FUNCTION_NAMES.SWAP_EXACT_TOKENS_FOR_TOKENS_SUPPORTING_FEE:
        actions.push(this.parseSwapExactTokensForTokens(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.SWAP_TOKENS_FOR_EXACT_TOKENS:
        actions.push(this.parseSwapTokensForExactTokens(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.SWAP_EXACT_ETH_FOR_TOKENS:
      case CONTRACT_FUNCTION_NAMES.SWAP_EXACT_ETH_FOR_TOKENS_SUPPORTING_FEE:
        actions.push(this.parseSwapExactETHForTokens(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.SWAP_TOKENS_FOR_EXACT_ETH:
        actions.push(this.parseSwapTokensForExactETH(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.SWAP_EXACT_TOKENS_FOR_ETH:
      case CONTRACT_FUNCTION_NAMES.SWAP_EXACT_TOKENS_FOR_ETH_SUPPORTING_FEE:
        actions.push(this.parseSwapExactTokensForETH(transaction, parsedTxn));
        break;
      case CONTRACT_FUNCTION_NAMES.SWAP_ETH_FOR_EXACT_TOKENS:
        actions.push(this.parseSwapETHForExactTokens(transaction, parsedTxn));
        break;
    }

    return actions;
  }

  // V3 Parser Methods
  public static async parseV3Transaction(transaction: ITransaction): Promise<ITransactionAction[]> {
    if (!transaction?.data) {
      console.error('Invalid transaction: missing data');
      return [];
    }
    const actions: ITransactionAction[] = [];

    if (!ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.ROUTER_V3, contracts)) {
      return actions;
    }

    try {
      const routerActions = await this.parseRouterCalldata(transaction);
      if (routerActions.length > 0) {
        return this.combineMultiHopSwaps(routerActions);
      }
    } catch (error) {
      console.error('Failed to parse router calldata:', error);
    }

    return actions;
  }

  // Private V2 Methods
  private static parseSwapExactTokensForTokens(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const path = parsedTxn.args.path;
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: path[0],
      toToken: path[path.length - 1],
      fromAmount: parsedTxn.args.amountIn.toString(),
      toAmount: parsedTxn.args.amountOutMin.toString(),
      recipient: parsedTxn.args.to
    };
  }

  private static parseSwapTokensForExactTokens(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const path = parsedTxn.args.path;
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: path[0],
      toToken: path[path.length - 1],
      fromAmount: parsedTxn.args.amountInMax.toString(),
      toAmount: parsedTxn.args.amountOut.toString(),
      recipient: parsedTxn.args.to
    };
  }

  private static parseSwapExactETHForTokens(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const path = parsedTxn.args.path;
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: ethers.ZeroAddress,
      toToken: path[path.length - 1],
      fromAmount: transaction.value,
      toAmount: parsedTxn.args.amountOutMin.toString(),
      recipient: parsedTxn.args.to
    };
  }

  private static parseSwapTokensForExactETH(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const path = parsedTxn.args.path;
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: path[0],
      toToken: ethers.ZeroAddress,
      fromAmount: parsedTxn.args.amountInMax.toString(),
      toAmount: parsedTxn.args.amountOut.toString(),
      recipient: parsedTxn.args.to
    };
  }

  private static parseSwapExactTokensForETH(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const path = parsedTxn.args.path;
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: path[0],
      toToken: ethers.ZeroAddress,
      fromAmount: parsedTxn.args.amountIn.toString(),
      toAmount: parsedTxn.args.amountOutMin.toString(),
      recipient: parsedTxn.args.to
    };
  }

  private static parseSwapETHForExactTokens(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const path = parsedTxn.args.path;
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: ethers.ZeroAddress,
      toToken: path[path.length - 1],
      fromAmount: transaction.value,
      toAmount: parsedTxn.args.amountOut.toString(),
      recipient: parsedTxn.args.to
    };
  }

  // Private V3 Methods
  private static async parseRouterCalldata(transaction: ITransaction): Promise<ITransactionAction[]> {
    try {
      const decodedData = contracts[CONTRACT_ENUM.ROUTER_V3].interface.parseTransaction({
        data: transaction.data
      });

      if (decodedData.name !== 'execute' || !decodedData.args || decodedData.args.length < 2) {
        console.warn('Not a valid execute transaction');
        return [];
      }

      const commands = decodedData.args[0] as string;
      const inputs = decodedData.args[1] as string[];
      
      if (!commands || !inputs || commands.length % 2 !== 0 || commands.length === 0) {
        console.error('Invalid commands or inputs format');
        return [];
      }

      const actions: ITransactionAction[] = [];
      let inputIndex = 0;

      for (let i = 0; i < commands.length; i += 2) {
        const commandId = parseInt(commands.slice(i, i + 2), 16);
        
        if (inputIndex >= inputs.length) {
          console.error('Input index out of bounds');
          break;
        }

        switch (commandId) {
          case COMMAND_ENUM.V3_SWAP_EXACT_IN:
          case COMMAND_ENUM.V3_SWAP_EXACT_OUT: {
            const swapAction = this.decodeSwapData(inputs[inputIndex], commandId);
            if (swapAction) actions.push(swapAction);
            break;
          }
          case COMMAND_ENUM.V2_SWAP_EXACT_IN:
          case COMMAND_ENUM.V2_SWAP_EXACT_OUT: {
            const swapAction = this.decodeV2SwapData(inputs[inputIndex], commandId);
            if (swapAction) actions.push(swapAction);
            break;
          }
          case COMMAND_ENUM.ROUTE: {
            const routeAction = this.decodeRouteData(inputs[inputIndex]);
            if (routeAction) actions.push(routeAction);
            break;
          }
          case COMMAND_ENUM.LIMIT_ORDER: {
            const limitOrderAction = this.parseLimitOrder(inputs[inputIndex]);
            if (limitOrderAction) actions.push(limitOrderAction);
            break;
          }
        }
        inputIndex++;
      }

      return actions;
    } catch (error) {
      console.error('Failed to parse router calldata:', error);
      return [];
    }
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
        toAmount: isExactIn ? swapParams.amountOutMinimum! : swapParams.amountOut!,
        recipient: swapParams.recipient,
        sender: swapParams.sender
      };
    } catch (error) {
      console.error('Failed to decode swap data:', error);
      return null;
    }
  }

  private static decodeV2SwapData(input: string, commandId: number): ISingleSwapAction | null {
    try {
      const abiCoder = new ethers.AbiCoder();
      
      const isExactIn = commandId === COMMAND_ENUM.V2_SWAP_EXACT_IN;
      const params = abiCoder.decode(
        [
          'address', // recipient
          'address', // tokenIn
          'address', // tokenOut
          'uint256', // amount
          'uint256', // amountLimit
          'address'  // sender
        ],
        input
      ) as unknown[];

      return {
        type: ACTION_ENUM.SINGLE_SWAP,
        fromToken: params[1] as string,
        toToken: params[2] as string,
        fromAmount: isExactIn ? (params[3] as bigint).toString() : (params[4] as bigint).toString(),
        toAmount: isExactIn ? (params[4] as bigint).toString() : (params[3] as bigint).toString(),
        recipient: params[0] as string,
        sender: params[5] as string
      };
    } catch (error) {
      console.error('Failed to decode V2 swap data:', error);
      return null;
    }
  }

  private static decodeRouteData(input: string): IMultiSwapAction | null {
    try {
      const abiCoder = new ethers.AbiCoder();
      const decoded = abiCoder.decode(['bytes'], input)[0] as string;
      
      if (!this.isMultiHop(input)) {
        return null;
      }

      const { recipient, sender } = this.decodeSwapRecipientAndSender(input);
      const path = this.decodeMultiHopPath(decoded);

      if (!path || path.tokens.length < 2) {
        return null;
      }

      return {
        type: ACTION_ENUM.MULTI_SWAP,
        fromTokens: path.tokens.slice(0, -1),
        toTokens: path.tokens.slice(1),
        fromAmounts: path.fees.map(fee => fee.toString()),
        toAmounts: path.fees.map(fee => fee.toString()),
        recipients: [recipient],
        sender
      };
    } catch (error) {
      console.error('Failed to decode route data:', error);
      return null;
    }
  }

  private static combineMultiHopSwaps(actions: ITransactionAction[]): ITransactionAction[] {
    const combinedActions: ITransactionAction[] = [];
    let currentMultiSwap: IMultiSwapAction | null = null;

    for (const action of actions) {
      if (action.type === ACTION_ENUM.SINGLE_SWAP) {
        if (!currentMultiSwap) {
          currentMultiSwap = {
            type: ACTION_ENUM.MULTI_SWAP,
            fromTokens: [action.fromToken],
            toTokens: [action.toToken],
            fromAmounts: [action.fromAmount],
            toAmounts: [action.toAmount || '0'],
            recipients: [action.recipient || ethers.ZeroAddress],
            sender: action.sender
          };
        } else {
          currentMultiSwap.toTokens.push(action.toToken);
          currentMultiSwap.fromTokens.push(action.fromToken);
          currentMultiSwap.fromAmounts.push(action.fromAmount);
          currentMultiSwap.toAmounts?.push(action.toAmount || '0');
          currentMultiSwap.recipients?.push(action.recipient || ethers.ZeroAddress);
        }
      } else {
        if (currentMultiSwap) {
          combinedActions.push(currentMultiSwap);
          currentMultiSwap = null;
        }
        combinedActions.push(action);
      }
    }

    if (currentMultiSwap) {
      combinedActions.push(currentMultiSwap);
    }

    return combinedActions;
  }

  private static decodeMultiHopPath(path: string): { tokens: string[]; fees: number[] } | null {
    try {
      return this.decodeV3Path(path);
    } catch (error) {
      console.error('Failed to decode multi-hop path:', error);
      return null;
    }
  }

  private static decodeV3Path(path: string): { tokens: string[]; fees: number[] } {
    const tokens: string[] = [];
    const fees: number[] = [];

    for (let i = 0; i < path.length; i += 46) {
      const token = `0x${path.slice(i + 2, i + 42)}`;
      tokens.push(token);

      if (i + 46 <= path.length) {
        const fee = parseInt(path.slice(i + 42, i + 46), 16);
        fees.push(fee);
      }
    }

    return { tokens, fees };
  }

  private static isMultiHop(input: string): boolean {
    try {
      const abiCoder = new ethers.AbiCoder();
      const decoded = abiCoder.decode(['bytes'], input)[0] as string;
      return decoded.length >= 86;
    } catch {
      return false;
    }
  }

  private static decodeSwapRecipientAndSender(input: string): { recipient: string; sender: string } {
    try {
      const abiCoder = new ethers.AbiCoder();
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

      return {
        recipient: params[0] as string,
        sender: params[6] as string
      };
    } catch (error) {
      console.error('Failed to decode recipient and sender:', error);
      return {
        recipient: ethers.ZeroAddress,
        sender: ethers.ZeroAddress
      };
    }
  }

  private static parseLimitOrder(input: string): ILimitOrderAction | null {
    try {
      const abiCoder = new ethers.AbiCoder();
      const decoded = abiCoder.decode(
        [
          'address', // recipient
          'address', // tokenIn
          'address', // tokenOut
          'uint256', // amountIn
          'uint256', // minAmountOut
          'uint256', // priceLimit
          'uint256'  // deadline
        ],
        input
      ) as unknown[];

      return {
        type: ACTION_ENUM.LIMIT_ORDER,
        fromToken: decoded[1] as string,
        toToken: decoded[2] as string,
        fromAmount: (decoded[3] as bigint).toString(),
        toAmount: (decoded[4] as bigint).toString(),
        priceLimit: (decoded[5] as bigint).toString(),
        deadline: Number(decoded[6]),
        recipient: decoded[0] as string
      };
    } catch (error) {
      console.error('Failed to decode limit order data:', error);
      return null;
    }
  }
}