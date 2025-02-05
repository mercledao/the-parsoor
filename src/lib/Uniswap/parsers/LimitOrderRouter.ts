import { ethers } from "ethers";
import { ACTION_ENUM } from "../../../enums";
import { ProtocolHelper } from "../../../helpers";
import {
  ITransaction,
  ITransactionAction
} from "../../../types";
import { CONTRACT_ENUM, contracts } from "../contracts";
import { log } from "node:console";

export class LimitOrderParser {
  private static readonly TRANSFER_EVENT_TOPIC = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
  private static readonly FILL_EVENT_INTERFACE = new ethers.Interface([
    "event Fill(bytes32 indexed orderHash, address indexed filler, address indexed swapper, uint256 nonce)"
  ]);

  public static parseTransaction(transaction: ITransaction): ITransactionAction[] {
    if (!ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.LIMIT_ORDER_ROUTER, contracts) &&
        !ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.EXCLUSIVE_LIMIT_ORDER_ROUTER, contracts)) {
      throw new Error("Transaction is not from a limit order router contract");
    }

    const fillEvents = transaction.logs?.filter(log => 
      log.topics[0] === this.FILL_EVENT_INTERFACE.getEvent('Fill').topicHash
    );

    if (!fillEvents || fillEvents.length === 0) {
      throw new Error("No Fill events found in transaction");
    }

    return fillEvents
      .map(log => this.parseFillEvent(transaction, log))
      .filter((action): action is ITransactionAction => action !== null);
  }

  private static parseFillEvent(transaction: ITransaction, fillLog: any): ITransactionAction | null {
    const transferLogs = transaction.logs.filter(l => 
      l.topics[0] === this.TRANSFER_EVENT_TOPIC && 
      l.topics.length === 3
    );

    if (transferLogs.length < 2) {
      throw new Error("Insufficient transfer events found");
    }

    const parsedFillLog = this.FILL_EVENT_INTERFACE.parseLog({
      topics: fillLog.topics,
      data: fillLog.data
    });

    const swapper = parsedFillLog.args.swapper;

    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );

    const fromTxn = erc20TransferLogs.filter((log) => {
      return log.fromAddress.toLowerCase() === swapper.toLowerCase();
    });
  
    const toTxn = erc20TransferLogs.filter((log) => {
      return log.toAddress.toLowerCase() === swapper.toLowerCase();
    });

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: fromTxn[0].contractAddress,
      toToken: toTxn[0].contractAddress,
      fromAmount: fromTxn[0].value.toString(),
      toAmount: toTxn[0].value.toString(),
      recipient: ethers.getAddress(swapper),
      sender: ethers.getAddress(swapper)
    };
  }
}