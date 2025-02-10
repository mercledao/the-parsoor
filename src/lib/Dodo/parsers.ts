import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import { ethers } from "ethers";
import {
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";

enum CONTRACT_FUNCTION_NAMES {
  DODO_SWAP_V2_ETH_TO_TOKEN = "dodoSwapV2ETHToToken",
  DODO_SWAP_V2_TOKEN_TO_ETH = "dodoSwapV2TokenToETH",
  DODO_SWAP_V2_TOKEN_TO_TOKEN = "dodoSwapV2TokenToToken",
  DODO_SWAP_V1 = "dodoSwapV1",
  MIX_SWAP = "mixSwap",
  EXTERNAL_SWAP = "externalSwap",
  DODO_MULTI_SWAP = "dodoMutliSwap"
}

export class TransactionParser {
  public static parseTransaction(
    transaction: ITransaction,
    contractType: CONTRACT_ENUM
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      contractType,
      contracts
    );

    if (!parsedTxn) {
      return actions;
    }

    if (Object.values(CONTRACT_FUNCTION_NAMES).includes(parsedTxn.name as CONTRACT_FUNCTION_NAMES)) {
      const matchedSwapOrderLog = transaction.logs.find(
        (log) => log.topics[0] === EVENT_ENUM.ORDER_HISTORY
      );

      if (matchedSwapOrderLog) {
        actions.push(this.handleContractFunction(matchedSwapOrderLog, contractType));
      }
    }

    return actions;
  }

  private static handleContractFunction(
    log: ITransactionLog,
    contractType: CONTRACT_ENUM
  ): ISingleSwapAction {
    const parsedLog = ProtocolHelper.parseLog(
      log,
      contracts[contractType].events[EVENT_ENUM.ORDER_HISTORY]
    );

    const { fromToken, toToken, sender, fromAmount } = parsedLog.args;

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken,
      toToken,
      fromAmount: fromAmount.toString(),
      toAmount: parsedLog.args.returnAmount.toString(),
      sender,
      recipient: sender
    };
  }
}
