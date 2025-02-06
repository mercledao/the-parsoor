import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IBridgeInAction,
  IBridgeOutAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";

enum CONTRACT_FUNCTION_NAMES {
  SEND = "send",
  CLAIM = "claim",
  SWAP_CALL = "strictlySwapAndCall",
  SWAP_CALL_DLN = "strictlySwapAndCallDln",
}


export class RouterContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];
    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.ROUTER,
      contracts
    );

    if (!parsedTxn) {
      return actions;
    }

    switch (parsedTxn.name) {
      case CONTRACT_FUNCTION_NAMES.UNSAFE_SWAP_EXACT_TOKENS_FOR_TOKENS:
        actions.push(
          this.handleUnsafeSwapExactTokensForTokens(transaction, parsedTxn)
        );
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

      default:
        break;
    }

    return actions;
  }

  private static getTokenTransfersFromCallData(
    parsedTxn: ethers.TransactionDescription
  ) {
    const fromToken = parsedTxn.args.routes[0].from;
    const toToken = parsedTxn.args.routes[0].to;
    return { fromToken, toToken };
  }

  private static handleUnsafeSwapExactTokensForTokens(
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
}
