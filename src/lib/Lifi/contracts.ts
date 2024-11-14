import { ethers } from 'ethers';
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from '../../enums';
import { IProtocolContractDefinitions } from '../../types';

export enum CONTRACT_ENUM {
  LIFI_DIAMOND = 'LIFI_DIAMOND'
}

export enum EVENT_ENUM {
  SWAP_STARTED = 'SwapStarted',
  BRIDGE_STARTED = 'BridgeStarted'
}

const EVENTS = {
  [EVENT_ENUM.SWAP_STARTED]: 'event SwapStarted(bytes32 transactionId, address fromToken, address toToken, uint256 fromAmount, uint256 toAmount, address sender)',
  [EVENT_ENUM.BRIDGE_STARTED]: 'event BridgeStarted(bytes32 transactionId, uint256 toChainId, address fromToken, address toToken, uint256 fromAmount, uint256 toAmount, address sender)'
};

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.LIFI_DIAMOND]: {
    interface: new ethers.Interface([EVENTS[EVENT_ENUM.SWAP_STARTED], EVENTS[EVENT_ENUM.BRIDGE_STARTED]]),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: '0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.OUTGOING]
      }
    },
    events: {
      [EVENT_ENUM.SWAP_STARTED]: {
        abi: new ethers.Interface([EVENTS[EVENT_ENUM.SWAP_STARTED]])
      },
      [EVENT_ENUM.BRIDGE_STARTED]: {
        abi: new ethers.Interface([EVENTS[EVENT_ENUM.BRIDGE_STARTED]])
      }
    }
  }
};
