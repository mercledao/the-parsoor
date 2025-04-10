import { ACTION_ENUM, CHAIN_ID } from "../../enums";
import { ethers } from "ethers";
import { ProtocolHelper } from "../../helpers";
import {
    IBridgeInAction,
  IBridgeOutAction,
  ISingleSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { CONTRACT_ENUM, contracts, EVENT_ENUM } from "./contracts";

enum CONTRACT_FUNCTION_NAMES {
      // Function for receiving tokens to the chain
      RECEIVETOKENS = "receiveTokens",
    
}    

export class CoreBridgeContractParser {
  private static contractDefinition = contracts[CONTRACT_ENUM.CORE_BRIDGE];
  private static chainIdToActucalChainId = {
    1:CHAIN_ID.ETHEREUM,
    2:CHAIN_ID.BSC,
    3:CHAIN_ID.TRON,
    4:CHAIN_ID.SOLANA,
    5:CHAIN_ID.POLYGON,
    6:CHAIN_ID.ARBITRUM,
    7:CHAIN_ID.STELLAR,
    8:CHAIN_ID.AVALANCHE,
    9:CHAIN_ID.BASE,
    10:CHAIN_ID.OPTIMISM,
    11:CHAIN_ID.CELO,
    13:CHAIN_ID.SUI,
  }

  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

     const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.CORE_BRIDGE,
      contracts
    );

    const hasSwap = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAP
    );
    const hasSwappedToVUSD = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.SWAPPEDTOVUSD
    );
    const hasTokensSent = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.TOKENSENT
    );

    if(parsedTxn.name == CONTRACT_FUNCTION_NAMES.RECEIVETOKENS){
        actions.push(this.parseReceiveTokens(transaction,parsedTxn))
    }else if (hasSwap) {
      actions.push(this.parseSwap(hasSwap));
    }else if (hasSwappedToVUSD && hasTokensSent) {
      actions.push(this.parseSwapAndBridge(transaction,hasSwappedToVUSD, hasTokensSent));
    }

    return actions;
  }

  private static parseSwap(log: ITransactionLog): ISingleSwapAction {
    const parsedLog = ProtocolHelper.parseLog(
      log,
      this.contractDefinition.events[EVENT_ENUM.SWAP]
    );

    return {
      type: ACTION_ENUM.SINGLE_SWAP,
      fromToken: parsedLog.args.fromToken,
      toToken: parsedLog.args.toToken,
      fromAmount: parsedLog.args.sendAmount.toString(),
      toAmount: parsedLog.args.receiveAmount.toString(),
      recipient: parsedLog.args.recipient,
      sender: parsedLog.args.sender,
    };
  }

  private static parseSwapAndBridge(
    transaction:ITransaction,
    logSwapped: ITransactionLog,
    logTokenSent: ITransactionLog
  ): IBridgeOutAction {
    const parsedLogSwapped = ProtocolHelper.parseLog(
      logSwapped,
      this.contractDefinition.events[EVENT_ENUM.SWAPPEDTOVUSD]
    );
    const parsedLogTokensSent = ProtocolHelper.parseLog(
      logTokenSent,
      this.contractDefinition.events[EVENT_ENUM.TOKENSENT]
    );

    const toChain = this.chainIdToActucalChainId[parsedLogTokensSent.args.destinationChainId]


    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain:toChain,
      fromToken: parsedLogSwapped.args.token.toString(),
      toToken: parsedLogTokensSent.args.receiveToken.toString(),
      fromAmount: parsedLogSwapped.args.amount.toString(),
      toAmount: parsedLogTokensSent.args.amount.toString(),
      sender: parsedLogSwapped.args.sender.toString(),
      recipient: parsedLogTokensSent.args.recipient.toString(),
    };
  }

  private static parseReceiveTokens(
    transaction:ITransaction,
    parsedTxn: ethers.TransactionDescription,
  ): IBridgeInAction {
    

    const fromChain = this.chainIdToActucalChainId[parsedTxn.args.destinationChainId]


    return {
      type: ACTION_ENUM.BRIDGE_IN,
      fromChain: fromChain,
      toChain:transaction.chainId,
      fromToken: null,
      toToken: parsedTxn.args.receiveToken.toString(),
      fromAmount: null,
      toAmount: parsedTxn.args.amount.toString(),
      sender: null,
      recipient: parsedTxn.args.recipient.toString(),
    };
  }
}
