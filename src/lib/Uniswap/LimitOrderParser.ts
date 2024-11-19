import { ethers } from "ethers";
import { ACTION_ENUM } from "../../enums";
import {
    ILimitOrderAction,
    ITransaction,
    ITransactionAction
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";

export class LimitOrderParser {
  private static readonly contractDefinition = contracts[CONTRACT_ENUM.LIMIT_ORDER_ROUTER];
  private static readonly TRANSFER_EVENT_TOPIC = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';

  public static parseTransaction(transaction: ITransaction): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    // Check if transaction is to the Dutch Order Reactor V2 contract
    if (transaction.to !== '0x00000011F84B9aa48e5f8aA8B9897600006289Be') {
      return actions;
    }

    // Parse the Fill event logs to get order details
    const fillEventInterface = new ethers.Interface([
      "event Fill(bytes32 indexed orderHash, address indexed filler, address indexed swapper, uint256 nonce)"
    ]);

    // Look for Fill events in the transaction logs
    for (const log of transaction.logs || []) {
      try {
        if (log.topics[0] === fillEventInterface.getEvent('Fill').topicHash) {
          // Get all token transfer events
          const transferLogs = transaction.logs.filter(l => 
            l.topics[0] === this.TRANSFER_EVENT_TOPIC && 
            l.topics.length === 3 // Standard ERC20 transfer has 3 topics
          );

          if (transferLogs.length >= 2) {
            // Get the swapper address from the Fill event
            const swapper = `0x${log.topics[3].slice(-40)}`;
            
            // Find the input and output transfers
            const inputTransfer = transferLogs.find(l => 
              `0x${l.topics[1].slice(-40)}`.toLowerCase() === swapper.toLowerCase()
            );
            
            const outputTransfer = transferLogs.find(l => 
              `0x${l.topics[2].slice(-40)}`.toLowerCase() === swapper.toLowerCase()
            );

            if (inputTransfer && outputTransfer) {
              const action: ILimitOrderAction = {
                type: ACTION_ENUM.LIMIT_ORDER,
                fromToken: ethers.getAddress(`0x${inputTransfer.topics[1].slice(-40)}`),
                toToken: ethers.getAddress(`0x${outputTransfer.topics[1].slice(-40)}`),
                fromAmount: ethers.getBigInt(inputTransfer.data || '0').toString(),
                toAmount: ethers.getBigInt(outputTransfer.data || '0').toString(),
                priceLimit: '0', // Dutch auctions don't have a fixed price limit
                deadline: 0, // Dutch auctions expire based on price decay, not time
                recipient: ethers.getAddress(swapper)
              };
              actions.push(action);
            }
          }
        }
      } catch (error) {
        console.error('Error parsing Fill event:', error);
      }
    }

    return actions;
  }
}