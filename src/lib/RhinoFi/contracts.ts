import { ethers } from 'ethers';
import { CHAIN_ID, LISTEN_FOR_TRANSACTIONS } from '../../enums';
import { IProtocolContractDefinitions } from '../../types';
import RhinoFiDepositAbi from './abis/RhinoFiDeposit.json';

enum CONTRACT_ENUM {
  // The deposit contract
  DEPOSIT_CONTRACT = 'DVFDepositContract'
}

enum EVENT_ENUM {
  // Event for when a deposit is done
  BRIDGED_DEPOSIT = 'BridgedDeposit',

  // Event for when a withdrawal is done
  BRIDGED_WITHDRAWAL = 'BridgedWithdrawal',

  // Event for when a withdrawal is done with native + erc20
  BRIDGED_WITHDRAWAL_WITH_NATIVE = 'BridgedWithdrawalWithNative'
}

const contracts: IProtocolContractDefinitions = {
  [CONTRACT_ENUM.DEPOSIT_CONTRACT]: {
    interface: new ethers.Interface(RhinoFiDepositAbi),
    deployments: {
      [CHAIN_ID.ARBITRUM]: {
        address: '0x10417734001162Ea139e8b044DFe28DbB8B28ad0',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.BSC]: {
        address: '0xB80A582fa430645A043bB4f6135321ee01005fEf',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.POLYGON]: {
        address: '0xBA4EEE20F434bC3908A0B18DA496348657133A7E',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.ZKSYNC]: {
        address: '0x1fa66e2B38d0cC496ec51F81c3e05E6A6708986F',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.POLYGON_ZK]: {
        address: '0x65A4b8A0927c7FD899aed24356BF83810f7b9A3f',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.OPTIMISM]: {
        address: '0x0bCa65bf4b4c8803d2f0B49353ed57CAAF3d66Dc',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.LINEA]: {
        address: '0xcF68a2721394dcf5dCF66F6265C1819720F24528',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.BASE]: {
        address: '0x2f59E9086ec8130E21BD052065a9E6B2497bb102',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.MANTA]: {
        address: '0x2B4553122D960CA98075028d68735cC6b15DeEB5',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      },
      [CHAIN_ID.SCROLL]: {
        address: '0x87627c7E586441EeF9eE3C28B66662e897513f33',
        listenForTransactions: [LISTEN_FOR_TRANSACTIONS.INCOMING]
      }
    },

    events: {
      [EVENT_ENUM.BRIDGED_DEPOSIT]: {
        signature: '0x573284f4c36da6a8d8d84cd06662235f8a770cc98e8c80e304b8f382fdc3dca2',
        abi: new ethers.Interface(['event BridgedDeposit(address indexed user, address indexed token, uint256 amount)'])
      },

      [EVENT_ENUM.BRIDGED_WITHDRAWAL]: {
        signature: '0xe4f4f1fb3534fe80225d336f6e5a73007dc992e5f6740152bf13ed2a08f3851a',
        abi: new ethers.Interface([
          'event BridgedWithdrawal(address indexed user, address indexed token, uint256 amount, string withdrawalId)'
        ])
      },

      [EVENT_ENUM.BRIDGED_WITHDRAWAL_WITH_NATIVE]: {
        signature: '0x0ec14d41fb8dd758c7a1fc411ce327517caf88a8b9dee8bed60869801990d22c',
        abi: new ethers.Interface([
          'event BridgedWithdrawalWithNative(address indexed user, address indexed token, uint256 amountToken, uint256 amountNative)'
        ])
      }
    }
  }
};

export { CONTRACT_ENUM, contracts, EVENT_ENUM };
