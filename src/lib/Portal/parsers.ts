import { ethers, Transaction, ZeroAddress } from "ethers";
import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IBridgeInAction,
  IBridgeOutAction,
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { contracts, CONTRACT_ENUM, EVENT_ENUM } from "./contracts";
import { CHAIN_ID } from "../../enums";

enum CONTRACT_FUNCTION_NAMES {
  WRAP_AND_TRANSFER_ETH = 'wrapAndTransferETH',
  TRANSFER_TOKENS = 'transferTokens',
  TRANSFER_TOKENS_WITH_PAYLOAD = 'transferTokensWithPayload',
  RECEIVE_MESSAGE_AND_SWAP = 'receiveMessageAndSwap'
}

const WORMHOLE_CHAIN_IDS = {
  2: "ETHEREUM",
  1: "SOLANA",
  12: "Acala",
  8: "Algorand",
  22: "APTOS",
  23: "ARBITRUM",
  6: "AVALANCHE",
  30: "BASE",
  39: "Berachain",
  36: "BLAST",
  4: "BSC",
  4004: "Celestia",
  14: "CELO",
  4000: "Cosmos Hub",
  4007: "Dymension",
  4001: "EVMOS",
  10: "FANTOM",
  25: "GNOSIS",
  47: "HyperEVM",
  19: "Injective",
  46: "Ink",
  13: "Kaia",
  11: "Karura",
  4002: "Kujira",
  38: "LINEA",
  35: "MANTLE",
  48: "Monad",
  16: "MOONBEAM",
  15: "NEAR",
  17: "NEON",
  4003: "Neutron",
  4009: "Noble",
  7: "Oasis",
  24: "OPTIMISM",
  20: "Osmosis",
  5: "POLYGON",
  4008: "Provenance",
  26: "Pythnet",
  33: "ROOTSTOCK",
  34: "SCROLL",
  4006: "SEDA",
  32: "Sei",
  40: "Seievm",
  43: "SNAXCHAIN",
  4005: "Stargaze",
  21: "SUI",
  3: "TERRA",
  18: "TERRA_2",
  44: "Unichain",
  45: "WORLDCHAIN",
  37: "X_LAYER",
  28: "XPLA",
}

export class PortalParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.TOKEN_BRIDGE,
      contracts
    );

    if (!parsedTxn) return actions;

    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.WRAP_AND_TRANSFER_ETH) {
      actions.push(this.parseWrapAndTransferETHBridge(transaction, parsedTxn));
    } else if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.TRANSFER_TOKENS){
      actions.push(this.parseTransferTokensBridge(transaction, parsedTxn));
    } else if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.TRANSFER_TOKENS_WITH_PAYLOAD){
      actions.push(this.parseTransferTokensWithPayloadBridge(transaction, parsedTxn));
    }
    return actions;
  }

  private static parseWrapAndTransferETHBridge(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction | IBridgeInAction {
    const fromChain = transaction.chainId;
    
    const toChain = CHAIN_ID[WORMHOLE_CHAIN_IDS[parsedTxn.args.recipientChain]] ?? WORMHOLE_CHAIN_IDS[parsedTxn.args.recipientChain];
    let type;
    if (
      fromChain.toString().toLowerCase() === toChain.toString().toLowerCase()
    ) {
      type = ACTION_ENUM.BRIDGE_IN;
    } else {
      type = ACTION_ENUM.BRIDGE_OUT;
    }

    return {
      type,
      fromChain,
      toChain,
      fromToken: ZeroAddress,
      toToken: null,
      fromAmount: transaction.value.toString(),
      toAmount: null,
      sender: transaction.from,
      recipient: parsedTxn.args.recipient,
    };
  }

  private static parseTransferTokensBridge(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction | IBridgeInAction {
    const fromChain = transaction.chainId;
    const fromToken = parsedTxn.args.token;
    const fromAmount = parsedTxn.args.amount.toString();
    
    const toChain = CHAIN_ID[WORMHOLE_CHAIN_IDS[parsedTxn.args.recipientChain]];
    let type;
    if (
      fromChain.toString().toLowerCase() === toChain.toString().toLowerCase()
    ) {
      type = ACTION_ENUM.BRIDGE_IN;
    } else {
      type = ACTION_ENUM.BRIDGE_OUT;
    }

    return {
      type,
      fromChain,
      toChain,
      fromToken,
      toToken: null,
      fromAmount,
      toAmount: null,
      sender: transaction.from,
      recipient: parsedTxn.args.recipient,
    };
  }

  private static parseTransferTokensWithPayloadBridge(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction | IBridgeInAction {
    const fromChain = transaction.chainId;
    const fromToken = parsedTxn.args.token;
    const fromAmount = parsedTxn.args.amount.toString();
    
    const toChain = CHAIN_ID[WORMHOLE_CHAIN_IDS[parsedTxn.args.recipientChain]];
    let type;
    if (
      fromChain.toString().toLowerCase() === toChain.toString().toLowerCase()
    ) {
      type = ACTION_ENUM.BRIDGE_IN;
    } else {
      type = ACTION_ENUM.BRIDGE_OUT;
    }

    return {
      type,
      fromChain,
      toChain,
      fromToken,
      toToken: null,
      fromAmount,
      toAmount: null,
      sender: transaction.from,
      recipient: parsedTxn.args.recipient,
    };
  }

  public static parsePorticoTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];
    const bridgeLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.PORTICO_SWAP_FINISH
    );
    
    if (bridgeLog) {
      actions.push(this.parseBridgeLog(transaction, bridgeLog));
    }
    return actions;
  }

  private static parseBridgeLog(
    transaction: ITransaction,
    bridgeLog: ITransactionLog
  ): IBridgeOutAction | IBridgeInAction {

    const parsedLog = ProtocolHelper.parseLog(
      bridgeLog,
      contracts[CONTRACT_ENUM.PORTICO].events[EVENT_ENUM.PORTICO_SWAP_FINISH]
    );
    

    return {
      type: ACTION_ENUM.BRIDGE_IN,
      fromChain: null,
      toChain: transaction.chainId,
      fromToken: null,
      toToken: parsedLog.args.data.finalTokenAddress,
      fromAmount: null,
      toAmount: parsedLog.args.finaluserAmount.toString(),
      sender: parsedLog.args.data.recipientAddress,
      recipient: parsedLog.args.data.recipientAddress,
    };
  }

}