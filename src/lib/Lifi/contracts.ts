import { ethers } from 'ethers';
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from '../../enums';
import { IProtocolContractDefinitions } from '../../types';
import LifiDiamondABI from './abis/LifiDiamond.json';

export enum CONTRACT_ENUM {
  LIFI_DIAMOND = 'LIFI_DIAMOND'
}

export enum EVENT_ENUM {
  SWAP_STARTED = 'SwapStarted',
  BRIDGE_STARTED = 'BridgeStarted',
  BRIDGE_COMPLETED = 'BridgeCompleted'
}

const EVENTS = {
  [EVENT_ENUM.SWAP_STARTED]: 'event SwapStarted(bytes32 transactionId, address fromToken, address toToken, uint256 fromAmount, uint256 toAmount, address sender)',
  [EVENT_ENUM.BRIDGE_STARTED]: 'event BridgeStarted(bytes32 transactionId, uint256 toChainId, address fromToken, address toToken, uint256 fromAmount, uint256 toAmount, address sender)',
  [EVENT_ENUM.BRIDGE_COMPLETED]: 'event BridgeCompleted(bytes32 transactionId, string status)'
};

export const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.LIFI_DIAMOND]: {
    interface: new ethers.Interface(LifiDiamondABI),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: '0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE',
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
