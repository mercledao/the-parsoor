import { ethers } from "ethers";
import { ACTION_ENUM } from "../../../enums";
import { ProtocolHelper } from "../../../helpers";
import {
    ILimitOrderAction,
    ITransaction,
    ITransactionAction
} from "../../../types";
import { CONTRACT_ENUM, contracts } from "../contracts";

export class LimitOrderParser {
  private static readonly TRANSFER_EVENT_TOPIC = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
  private static readonly FILL_EVENT_INTERFACE = new ethers.Interface([
    "event Fill(bytes32 indexed orderHash, address indexed filler, address indexed swapper, uint256 nonce)"
  ]);

  public static parseTransaction(transaction: ITransaction): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    if (!ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.LIMIT_ORDER_ROUTER, contracts) &&
        !ProtocolHelper.txnToIsListenerContract(transaction, CONTRACT_ENUM.EXCLUSIVE_LIMIT_ORDER_ROUTER, contracts)) {
      return actions;
    }

    // Look for Fill events in the transaction logs
    for (const log of transaction.logs || []) {
      if (log.topics[0] === this.FILL_EVENT_INTERFACE.getEvent('Fill').topicHash) {
        const action = this.parseFillEvent(transaction, log);
        if (action) {
          actions.push(action);
        }
      }
    }

    return actions;
  }

  private static parseFillEvent(transaction: ITransaction, fillLog: any): ILimitOrderAction | null {
    // Get all token transfer events
    const transferLogs = transaction.logs.filter(l => 
      l.topics[0] === this.TRANSFER_EVENT_TOPIC && 
      l.topics.length === 3
    );

    if (transferLogs.length < 2) return null;

    // Get the swapper address from the Fill event
    const swapper = `0x${fillLog.topics[3].slice(-40)}`;
    
    // Find the input and output transfers
    const inputTransfer = transferLogs.find(l => 
      `0x${l.topics[1].slice(-40)}`.toLowerCase() === swapper.toLowerCase()
    );
    
    const outputTransfer = transferLogs.find(l => 
      `0x${l.topics[2].slice(-40)}`.toLowerCase() === swapper.toLowerCase()
    );

    if (!inputTransfer || !outputTransfer) return null;

    return {
      type: ACTION_ENUM.LIMIT_ORDER,
      fromToken: ethers.getAddress(`0x${inputTransfer.topics[1].slice(-40)}`),
      toToken: ethers.getAddress(`0x${outputTransfer.topics[1].slice(-40)}`),
      fromAmount: ethers.getBigInt(inputTransfer.data || '0').toString(),
      toAmount: ethers.getBigInt(outputTransfer.data || '0').toString(),
      priceLimit: '0',
      deadline: 0,
      recipient: ethers.getAddress(swapper)
    };
  }
}