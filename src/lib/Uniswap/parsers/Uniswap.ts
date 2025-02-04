import { ethers } from "ethers";
import { ACTION_ENUM } from "../../../enums";
import { ProtocolHelper } from "../../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../../types";
import {
  COMMAND_ENUM,
  CONTRACT_ENUM,
  contracts,
  EVENT_ENUM,
} from "../contracts";
import { format } from "path";

interface IV3SwapParams {
  tokenIn: string;
  tokenOut: string;
  amountIn?: string;
  amountInMaximum?: string;
  amountOut?: string;
  amountOutMinimum?: string;
  recipient?: string;
  path?: string;
}

interface CommandConfig {
  decodeFormat: Array<string>;
  processPath: (path: any) => string[];
  getTokenOrder: (
    path: string[],
    isExactIn: boolean
  ) => { fromToken: string; toToken: string };
  getAmountOrder: (
    amounts: any[],
    isExactIn: boolean
  ) => { fromAmount: string; toAmount: string };
}

const COMMAND_CONFIGS: Partial<Record<COMMAND_ENUM, CommandConfig>> = {
  [COMMAND_ENUM.V3_SWAP_EXACT_IN]: {
    decodeFormat: ["address", "uint256", "uint256", "bytes", "bool"],
    processPath: (pathBytes: string) => UniswapParser.decodeV3Path(pathBytes),
    getTokenOrder: (path) => ({
      fromToken: path[0],
      toToken: path[path.length - 1],
    }),
    getAmountOrder: (amounts) => ({
      fromAmount: amounts[1].toString(),
      toAmount: amounts[2].toString(),
    }),
  },
  [COMMAND_ENUM.V3_SWAP_EXACT_OUT]: {
    decodeFormat: ["address", "uint256", "uint256", "bytes", "bool"],
    processPath: (pathBytes: string) => UniswapParser.decodeV3Path(pathBytes),
    getTokenOrder: (path) => ({
      fromToken: path[path.length - 1],
      toToken: path[0],
    }),
    getAmountOrder: (amounts) => ({
      fromAmount: amounts[2].toString(),
      toAmount: amounts[1].toString(),
    }),
  },
  [COMMAND_ENUM.V2_SWAP_EXACT_IN]: {
    decodeFormat: ["address", "uint256", "uint256", "address[]", "bool"],
    processPath: (path: string[]) => path,
    getTokenOrder: (path) => ({
      fromToken: path[0],
      toToken: path[path.length - 1],
    }),
    getAmountOrder: (amounts) => ({
      fromAmount: amounts[1].toString(),
      toAmount: amounts[2].toString(),
    }),
  },
  [COMMAND_ENUM.V2_SWAP_EXACT_OUT]: {
    decodeFormat: ["address", "uint256", "uint256", "address[]", "bool"],
    processPath: (path: string[]) => path,
    getTokenOrder: (path) => ({
      fromToken: path[path.length - 1],
      toToken: path[0],
    }),
    getAmountOrder: (amounts) => ({
      fromAmount: amounts[2].toString(),
      toAmount: amounts[1].toString(),
    }),
  },
};

enum CONTRACT_FUNCTION_NAMES {
  SWAP_ETH_FOR_EXACT_TOKENS = "swapETHForExactTokens",
  SWAP_EXACT_ETH_FOR_TOKENS = "swapExactETHForTokens",
  SWAP_EXACT_ETH_FOR_TOKENS_SUPPORTING_FEE = "swapExactETHForTokensSupportingFeeOnTransferTokens",
  SWAP_EXACT_TOKENS_FOR_ETH = "swapExactTokensForETH",
  SWAP_EXACT_TOKENS_FOR_ETH_SUPPORTING_FEE = "swapExactTokensForETHSupportingFeeOnTransferTokens",
  SWAP_EXACT_TOKENS_FOR_TOKENS = "swapExactTokensForTokens",
  SWAP_EXACT_TOKENS_FOR_TOKENS_SUPPORTING_FEE = "swapExactTokensForTokensSupportingFeeOnTransferTokens",
  SWAP_TOKENS_FOR_EXACT_ETH = "swapTokensForExactETH",
  SWAP_TOKENS_FOR_EXACT_TOKENS = "swapTokensForExactTokens",
}

export class UniswapParser {
  private static readonly EXACT_INPUT_SINGLE = "exactInputSingle";
  private static readonly EXACT_OUTPUT_SINGLE = "exactOutputSingle";
  private static readonly EXACT_INPUT = "exactInput";
  private static readonly EXACT_OUTPUT = "exactOutput";

  public static async parseV2Transaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.ROUTER_V2,
      contracts
    );

    if (!parsedTxn || !parsedTxn.args.path || parsedTxn.args.path.length < 2) {
      return actions;
    }

    switch (parsedTxn.name) {
      case CONTRACT_FUNCTION_NAMES.SWAP_ETH_FOR_EXACT_TOKENS:
        actions.push(this.handleSwapETHForExactTokens(transaction, parsedTxn));
        break;

      case CONTRACT_FUNCTION_NAMES.SWAP_EXACT_ETH_FOR_TOKENS:
        actions.push(this.handleSwapExactETHForTokens(transaction, parsedTxn));
        break;

      case CONTRACT_FUNCTION_NAMES.SWAP_EXACT_ETH_FOR_TOKENS_SUPPORTING_FEE:
        actions.push(
          this.handleSwapExactETHForTokensWithFee(transaction, parsedTxn)
        );
        break;

      case CONTRACT_FUNCTION_NAMES.SWAP_EXACT_TOKENS_FOR_ETH:
        actions.push(this.handleSwapExactTokensForETH(transaction, parsedTxn));
        break;

      case CONTRACT_FUNCTION_NAMES.SWAP_EXACT_TOKENS_FOR_ETH_SUPPORTING_FEE:
        actions.push(
          this.handleSwapExactTokensForETHWithFee(transaction, parsedTxn)
        );
        break;

      case CONTRACT_FUNCTION_NAMES.SWAP_EXACT_TOKENS_FOR_TOKENS:
        actions.push(
          this.handleSwapExactTokensForTokens(transaction, parsedTxn)
        );
        break;

      case CONTRACT_FUNCTION_NAMES.SWAP_EXACT_TOKENS_FOR_TOKENS_SUPPORTING_FEE:
        actions.push(
          this.handleSwapExactTokensForTokensWithFee(transaction, parsedTxn)
        );
        break;

      case CONTRACT_FUNCTION_NAMES.SWAP_TOKENS_FOR_EXACT_ETH:
        actions.push(this.handleSwapTokensForExactETH(transaction, parsedTxn));
        break;

      case CONTRACT_FUNCTION_NAMES.SWAP_TOKENS_FOR_EXACT_TOKENS:
        actions.push(
          this.handleSwapTokensForExactTokens(transaction, parsedTxn)
        );
        break;

      default:
        break;
    }
    return actions;
  }

  private static getTokenTransfersFromCallData(
    parsedTxn: ethers.TransactionDescription
  ) {
    const fromToken = parsedTxn.args.path[0];
    const toToken = parsedTxn.args.path[parsedTxn.args.path.length - 1];
    return { fromToken, toToken };
  }

  private static getIncomingOutgoingLogEvents(swapLog: ITransactionLog[]) {
    const incomingLog = swapLog[swapLog.length - 1];
    const outgoingLog = swapLog[0];

    const parsedIncomingLog = ProtocolHelper.parseLog(
      incomingLog,
      contracts[CONTRACT_ENUM.ROUTER_V2].events[EVENT_ENUM.V2_SWAP]
    );

    const parsedOutgoingLog = ProtocolHelper.parseLog(
      outgoingLog,
      contracts[CONTRACT_ENUM.ROUTER_V2].events[EVENT_ENUM.V2_SWAP]
    );

    return { parsedIncomingLog, parsedOutgoingLog };
  }

  private static getSwapLogEvents(transaction: ITransaction) {
    const swapLogs = transaction.logs.filter(
      (log) => log.topics[0] === EVENT_ENUM.V2_SWAP
    );

    if (swapLogs.length > 1) {
      swapLogs.sort((a, b) => a.logIndex - b.logIndex);
    }
    return swapLogs;
  }

  private static handleSwapETHForExactTokens(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const swapLogs = this.getSwapLogEvents(transaction);

    const { parsedIncomingLog } = this.getIncomingOutgoingLogEvents(swapLogs);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: transaction.value.toString(),
      toAmount:
        parsedIncomingLog.args.amount1Out != 0
          ? parsedIncomingLog.args.amount1Out.toString()
          : parsedIncomingLog.args.amount0Out.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  private static handleSwapExactETHForTokens(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const swapLogs = this.getSwapLogEvents(transaction);

    const { parsedIncomingLog } = this.getIncomingOutgoingLogEvents(swapLogs);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: transaction.value.toString(),
      toAmount:
        parsedIncomingLog.args.amount1Out != 0
          ? parsedIncomingLog.args.amount1Out.toString()
          : parsedIncomingLog.args.amount0Out.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  private static handleSwapExactETHForTokensWithFee(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const swapLogs = this.getSwapLogEvents(transaction);

    const { parsedIncomingLog } = this.getIncomingOutgoingLogEvents(swapLogs);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: transaction.value.toString(),
      toAmount:
        parsedIncomingLog.args.amount0Out != 0
          ? parsedIncomingLog.args.amount0Out.toString()
          : parsedIncomingLog.args.amount1Out.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  private static handleSwapExactTokensForETH(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const swapLogs = this.getSwapLogEvents(transaction);

    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const { parsedIncomingLog } = this.getIncomingOutgoingLogEvents(swapLogs);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: parsedTxn.args.amountIn.toString(),
      toAmount:
        parsedIncomingLog.args.amount1Out != 0
          ? parsedIncomingLog.args.amount1Out.toString()
          : parsedIncomingLog.args.amount0Out.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  private static handleSwapExactTokensForETHWithFee(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const swapLogs = this.getSwapLogEvents(transaction);

    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const { parsedIncomingLog } = this.getIncomingOutgoingLogEvents(swapLogs);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: parsedTxn.args.amountIn.toString(),
      toAmount:
        parsedIncomingLog.args.amount0Out != 0
          ? parsedIncomingLog.args.amount0Out.toString()
          : parsedIncomingLog.args.amount1Out.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  private static handleSwapExactTokensForTokens(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const swapLogs = this.getSwapLogEvents(transaction);

    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const { parsedIncomingLog } = this.getIncomingOutgoingLogEvents(swapLogs);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: parsedTxn.args.amountIn.toString(),
      toAmount:
        parsedIncomingLog.args.amount0Out != 0
          ? parsedIncomingLog.args.amount0Out.toString()
          : parsedIncomingLog.args.amount1Out.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  private static handleSwapExactTokensForTokensWithFee(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const swapLogs = this.getSwapLogEvents(transaction);

    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const { parsedIncomingLog } = this.getIncomingOutgoingLogEvents(swapLogs);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: parsedTxn.args.amountIn.toString(),
      toAmount:
        parsedIncomingLog.args.amount1Out != 0
          ? parsedIncomingLog.args.amount1Out.toString()
          : parsedIncomingLog.args.amount0Out.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  private static handleSwapTokensForExactETH(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const swapLogs = this.getSwapLogEvents(transaction);

    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const { parsedIncomingLog, parsedOutgoingLog } =
      this.getIncomingOutgoingLogEvents(swapLogs);

    let fromAmount = "0";
    
    const sortedPath = [...parsedTxn.args.path].sort((a, b) =>
      a.toLowerCase() > b.toLowerCase() ? 1 : -1
    );
    

    const fromTokenIndex = sortedPath.indexOf(fromToken)
    
    if(fromTokenIndex === 0 ){
      fromAmount = parsedOutgoingLog.args.amount0In.toString()
    }else {
      fromAmount = parsedOutgoingLog.args.amount1In.toString()
    }

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount,
      toAmount:
        parsedIncomingLog.args.amount1Out != 0
          ? parsedIncomingLog.args.amount1Out.toString()
          : parsedIncomingLog.args.amount0Out.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  private static handleSwapTokensForExactTokens(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const swapLogs = this.getSwapLogEvents(transaction);

    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const { parsedIncomingLog, parsedOutgoingLog } =
      this.getIncomingOutgoingLogEvents(swapLogs);

    let fromAmount = "0";

    const sortedPath = [...parsedTxn.args.path].sort((a, b) =>
      a.toLowerCase() > b.toLowerCase() ? 1 : -1
    );
    

    const fromTokenIndex = sortedPath.indexOf(fromToken)
    
    if(fromTokenIndex === 0 ){
      fromAmount = parsedOutgoingLog.args.amount0In.toString()
    }else {
      fromAmount = parsedOutgoingLog.args.amount1In.toString()
    }

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount,
      toAmount:
        parsedIncomingLog.args.amount0Out != 0
          ? parsedIncomingLog.args.amount0Out.toString()
          : parsedIncomingLog.args.amount1Out.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  public static async parseV3Transaction(
    transaction: ITransaction,
    routerType: CONTRACT_ENUM
  ): Promise<ITransactionAction[]> {
    const parsedTxn = contracts[routerType].interface.parseTransaction({
      data: transaction.data,
    });

    if (parsedTxn.name === "multicall") {
      const result = [];
      const calls =
        parsedTxn.args.length === 2 ? parsedTxn.args[1] : parsedTxn.args[0];

      for (const callData of calls) {
        const subParsedTxn = contracts[routerType].interface.parseTransaction({
          data: callData,
        });

        if (!subParsedTxn) continue;
        const action = await this.createV3SwapAction(subParsedTxn, transaction);
        if (action) {
          result.push(action);
        }
      }

      return result;
    } else {
      const action = await this.createV3SwapAction(parsedTxn, transaction);
      if (!action) return [];
      else return [action];
    }
  }

  public static decodeV3Path(path: string): string[] {
    if (!path.startsWith("0x")) return [];

    const cleanPath = path.slice(2);
    const tokens: string[] = [];

    // V3 paths are encoded as: tokenIn (20 bytes) + fee (3 bytes) + tokenOut (20 bytes)
    // For each hop: address (20 bytes) = 40 hex chars, fee (3 bytes) = 6 hex chars
    let i = 0;
    while (i < cleanPath.length) {
      const token = "0x" + cleanPath.slice(i, i + 40);
      tokens.push(token.toLowerCase());

      // Skip the token address (40 chars) and fee (6 chars)
      i += 46;
    }

    return tokens;
  }

  private static async createV3SwapAction(
    parsedTxn: ethers.TransactionDescription,
    transaction: ITransaction
  ): Promise<ISingleSwapAction | null> {
    const functionName = parsedTxn.name.toLowerCase();
    const params: IV3SwapParams = {
      tokenIn: parsedTxn.args.tokenIn || parsedTxn.args.params?.tokenIn,
      tokenOut: parsedTxn.args.tokenOut || parsedTxn.args.params?.tokenOut,
      amountIn:
        parsedTxn.args.amountIn?.toString() ||
        parsedTxn.args.params?.amountIn?.toString(),
      amountInMaximum:
        parsedTxn.args.amountInMaximum?.toString() ||
        parsedTxn.args.params?.amountInMaximum?.toString(),
      amountOut:
        parsedTxn.args.amountOut?.toString() ||
        parsedTxn.args.params?.amountOut?.toString(),
      amountOutMinimum:
        parsedTxn.args.amountOutMinimum?.toString() ||
        parsedTxn.args.params?.amountOutMinimum?.toString(),
      recipient: parsedTxn.args.recipient || parsedTxn.args.params?.recipient,
      path: parsedTxn.args.path || parsedTxn.args.params?.path,
    };
    const isExactInput = functionName.includes("exactinput");

    if (
      functionName === this.EXACT_INPUT_SINGLE.toLowerCase() ||
      functionName === this.EXACT_OUTPUT_SINGLE.toLowerCase()
    ) {
      return this.createSingleV3SwapAction(params, isExactInput, transaction);
    }

    if (
      functionName === this.EXACT_INPUT.toLowerCase() ||
      functionName === this.EXACT_OUTPUT.toLowerCase()
    ) {
      return this.createMultiHopV3SwapAction(params, isExactInput, transaction);
    }

    return null;
  }

  private static createSingleV3SwapAction(
    params: IV3SwapParams,
    isExactInput: boolean,
    transaction: ITransaction
  ): ISingleSwapAction {
    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: params.tokenIn,
      toToken: params.tokenOut,
      fromAmount: (isExactInput
        ? params.amountIn
        : params.amountInMaximum
      ).toString(),
      toAmount: (isExactInput
        ? params.amountOutMinimum
        : params.amountOut
      ).toString(),
      recipient: params.recipient || transaction.from,
    };
  }

  private static createMultiHopV3SwapAction(
    params: IV3SwapParams,
    isExactInput: boolean,
    transaction: ITransaction
  ): ISingleSwapAction | null {
    if (!params.path) return null;

    const decodedPath = this.decodeV3Path(params.path);
    if (decodedPath.length < 2) return null;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: isExactInput
        ? decodedPath[0]
        : decodedPath[decodedPath.length - 1],
      toToken: isExactInput
        ? decodedPath[decodedPath.length - 1]
        : decodedPath[0],
      fromAmount: (isExactInput
        ? params.amountIn
        : params.amountInMaximum || transaction.value
      ).toString(),
      toAmount: (isExactInput
        ? params.amountOutMinimum
        : params.amountOut || "0"
      ).toString(),
      recipient: params.recipient || transaction.from,
    };
  }

  public static async parseUniversalRouterTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const decoded = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.UNIVERSAL_ROUTER,
      contracts
    );

    if (!decoded) {
      throw new Error("Failed to parse Universal Router transaction");
    }

    const commands = ethers.getBytes(decoded.args[0]);
    const inputs = decoded.args[1];

    const actions: ITransactionAction[] = [];

    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      const input = inputs[i];

      const commandType = command & 0x1f;
      const config = COMMAND_CONFIGS[commandType];

      if (config) {
        const decodedInput = ethers.AbiCoder.defaultAbiCoder().decode(
          config.decodeFormat,
          input
        );

        const path = config.processPath(decodedInput[3]);
        const { fromToken, toToken } = config.getTokenOrder(path, true);
        const { fromAmount, toAmount } = config.getAmountOrder(
          decodedInput,
          true
        );

        actions.push({
          type: ACTION_ENUM.SINGLE_SWAP,
          fromToken,
          toToken,
          fromAmount,
          toAmount,
          recipient: decodedInput[0],
        });
      }
    }

    return actions;
  }
}
