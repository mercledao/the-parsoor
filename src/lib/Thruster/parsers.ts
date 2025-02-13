import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import {
  COMMAND_ENUM,
  CONTRACT_ENUM,
  contracts,
  EVENT_ENUM,
} from "./contracts";

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

export class ThrusterParser {
  private static readonly EXACT_INPUT_SINGLE = "exactInputSingle";
  private static readonly EXACT_OUTPUT_SINGLE = "exactOutputSingle";
  private static readonly EXACT_INPUT = "exactInput";
  private static readonly EXACT_OUTPUT = "exactOutput";

  public static async parseThrustRouterTransaction(
    transaction: ITransaction,
    contractName
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      contractName,
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

    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const toTxn = erc20TransferLogs.find((log) => {
      return log.contractAddress.toLowerCase() === toToken.toLowerCase();
    });

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: transaction.value.toString(),
      toAmount: toTxn.value.toString(),
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

    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const toTxn = erc20TransferLogs.find((log) => {
      return log.contractAddress.toLowerCase() === toToken.toLowerCase();
    });

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: transaction.value.toString(),
      toAmount: toTxn.value.toString(),
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

    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const toTxn = erc20TransferLogs.find((log) => {
      return log.contractAddress.toLowerCase() === toToken.toLowerCase();
    });

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: transaction.value.toString(),
      toAmount: toTxn.value.toString(),
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

    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const toTxn = erc20TransferLogs.find((log) => {
      return log.contractAddress.toLowerCase() === toToken.toLowerCase();
    });

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: parsedTxn.args.amountIn.toString(),
      toAmount: toTxn.value.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  private static handleSwapExactTokensForETHWithFee(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const toTxn = erc20TransferLogs.find((log) => {
      return log.contractAddress.toLowerCase() === toToken.toLowerCase();
    });

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: parsedTxn.args.amountIn.toString(),
      toAmount: toTxn.value.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  private static handleSwapExactTokensForTokens(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const toTxn = erc20TransferLogs.find((log) => {
      return log.contractAddress.toLowerCase() === toToken.toLowerCase();
    });

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: parsedTxn.args.amountIn.toString(),
      toAmount: toTxn.value.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  private static handleSwapExactTokensForTokensWithFee(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const toTxn = erc20TransferLogs.find((log) => {
      return log.contractAddress.toLowerCase() === toToken.toLowerCase();
    });

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: parsedTxn.args.amountIn.toString(),
      toAmount: toTxn.value.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  private static handleSwapTokensForExactETH(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const toTxn = erc20TransferLogs.find((log) => {
      return log.contractAddress.toLowerCase() === toToken.toLowerCase();
    });

    const fromTxn = erc20TransferLogs.find((log) => {
      return log.contractAddress.toLowerCase() === fromToken.toLowerCase();
    });

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: fromTxn.value.toString(),
      toAmount: toTxn.value.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  private static handleSwapTokensForExactTokens(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): ISingleSwapAction {
    const { fromToken, toToken } =
      this.getTokenTransfersFromCallData(parsedTxn);

    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const toTxn = erc20TransferLogs.find((log) => {
      return log.contractAddress.toLowerCase() === toToken.toLowerCase();
    });

    const fromTxn = erc20TransferLogs.find((log) => {
      return log.contractAddress.toLowerCase() === fromToken.toLowerCase();
    });

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: fromTxn.value.toString(),
      toAmount: toTxn.value.toString(),
      sender: transaction.from,
      recipient: parsedTxn.args.to,
    };
  }

  public static async parseSwapRouterTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const parsedTxn = contracts[
      CONTRACT_ENUM.SWAP_ROUTER
    ].interface.parseTransaction({
      data: transaction.data,
    });
  
    if (!parsedTxn) return [];

    if (parsedTxn.name !== "multicall") {
      const action = await this.createV3SwapAction(parsedTxn, transaction);
      return action ? [action] : [];
    }

    const calls =
      parsedTxn.args.length === 2 ? parsedTxn.args[1] : parsedTxn.args[0];
    const result: ITransactionAction[] = [];

    for (const callData of calls) {
      const subParsedTxn = contracts[
        CONTRACT_ENUM.SWAP_ROUTER
      ].interface.parseTransaction({ data: callData });
      if (!subParsedTxn) continue;
      const action = await this.createV3SwapAction(subParsedTxn, transaction);
      if (action) {
        result.push(action);
      }
    }
    return this.removeDuplicateSwaps(result);
  }

  private static removeDuplicateSwaps(swaps: ITransactionAction[]): ITransactionAction[] {
    const uniqueSwaps: ITransactionAction[] = [];
    const seen = new Set<string>();
  
    for (const action of swaps) {
      const singleSwapAction = action as ISingleSwapAction;
      const key = `${singleSwapAction.type}-${singleSwapAction.fromToken.toLowerCase()}-${singleSwapAction.toToken.toLowerCase()}-${singleSwapAction.fromAmount}-${singleSwapAction.toAmount}-${singleSwapAction.sender.toLowerCase()}-${singleSwapAction.recipient.toLowerCase()}`;
  
      if (!seen.has(key)) {
        seen.add(key);
        uniqueSwaps.push(action);
      }
    }
  
    return uniqueSwaps;
  }
  

  public static decodeV3Path(path: string): string[] {
    if (!path.startsWith("0x")) return [];

    const cleanPath = path.slice(2);
    const tokens: string[] = [];

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
    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const fromTxnLogs = erc20TransferLogs.filter((log) => {
      return log.contractAddress.toLowerCase() === params.tokenIn.toLowerCase();
    });
    const consolidatedFromTxns = this.consolidateFromTransactions(fromTxnLogs);

    const toTxnLogs = erc20TransferLogs.filter((log) => {
      return (
        log.contractAddress.toLowerCase() === params.tokenOut.toLowerCase()
      );
    });

    const consolidatedToTxns = this.consolidateToTransactions(toTxnLogs);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: params.tokenIn,
      toToken: params.tokenOut,
      fromAmount: consolidatedFromTxns[0].value.toString(),
      toAmount: consolidatedToTxns[0].value.toString(),
      sender: transaction.from,
      recipient: params.recipient || transaction.from,
    };
  }

  private static consolidateFromTransactions(transactions) {
    const consolidatedMap = new Map();

    transactions.forEach(({ fromAddress, value, contractAddress }) => {
      const key = `${fromAddress}-${contractAddress}`;

      if (consolidatedMap.has(key)) {
        consolidatedMap.get(key).value += value;
      } else {
        consolidatedMap.set(key, { fromAddress, value, contractAddress });
      }
    });

    return Array.from(consolidatedMap.values());
  }

  private static consolidateToTransactions(transactions) {
    const consolidatedMap = new Map();

    transactions.forEach(({ toAddress, value, contractAddress }) => {
      const key = `${toAddress}-${contractAddress}`;

      if (consolidatedMap.has(key)) {
        consolidatedMap.get(key).value += value;
      } else {
        consolidatedMap.set(key, { toAddress, value, contractAddress });
      }
    });

    return Array.from(consolidatedMap.values());
  }

  private static createMultiHopV3SwapAction(
    params: IV3SwapParams,
    isExactInput: boolean,
    transaction: ITransaction
  ): ISingleSwapAction | null {
    if (!params.path) return null;

    const decodedPath = this.decodeV3Path(params.path);
    if (decodedPath.length < 2) return null;

    const fromToken = isExactInput
      ? decodedPath[0]
      : decodedPath[decodedPath.length - 1];

    const toToken = isExactInput
      ? decodedPath[decodedPath.length - 1]
      : decodedPath[0];

    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const fromTxn = erc20TransferLogs.filter((log) => {
      return log.contractAddress.toLowerCase() === fromToken.toLowerCase();
    });

    const consolidatedFromTxns = this.consolidateFromTransactions(fromTxn);

    const toTxn = erc20TransferLogs.filter((log) => { 
      return log.contractAddress.toLowerCase() === toToken.toLowerCase();
    });

    const consolidatedToTxns = this.consolidateToTransactions(toTxn);

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: consolidatedFromTxns[0].value.toString(),
      toAmount: consolidatedToTxns[0].value.toString(),
      sender: transaction.from,
      recipient: params.recipient || transaction.from,
    };
  }
}
