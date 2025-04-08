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

// enum CONTRACT_FUNCTION_NAMES {
//   // Function for depositing tokens to the bridge
//   DEPOSIT = "deposit",

//   // Function for depositing native tokens to the bridge
//   DEPOSIT_NATIVE = "depositNative",

//   // Function for withdrawing tokens from the bridge
//   WITHDRAW = "withdrawV2",

//   // Function for withdrawing native tokens from the bridge
//   WITHDRAW_NATIVE = "withdrawNativeV2",

//   // Function for withdrawing tokens from the bridge with native + erc20
//   WITHDRAW_WITH_NATIVE = "withdrawV2WithNative",
// }

export class DepositContractParser {
  private static contractDefinition = contracts[CONTRACT_ENUM.DEPOSIT_CONTRACT];
  
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    // const parsedTxn = ProtocolHelper.parseTransaction(
    //   transaction,
    //   CONTRACT_ENUM.DEPOSIT_CONTRACT,
    //   contracts
    // );

    // switch (parsedTxn.name) {
    //   case CONTRACT_FUNCTION_NAMES.DEPOSIT:
    //     actions.push(this.parseDeposit(transaction, parsedTxn));
    //     break;
    //   case CONTRACT_FUNCTION_NAMES.DEPOSIT_NATIVE:
    //     actions.push(this.parseDepositNative(transaction, parsedTxn));
    //     break;
    //   case CONTRACT_FUNCTION_NAMES.WITHDRAW:
    //     actions.push(this.parseWithdraw(transaction, parsedTxn));
    //     break;
    //   case CONTRACT_FUNCTION_NAMES.WITHDRAW_NATIVE:
    //     actions.push(this.parseWithdrawNative(transaction, parsedTxn));
    //     break;
    //   case CONTRACT_FUNCTION_NAMES.WITHDRAW_WITH_NATIVE:
    //     actions.push(...this.parseWithdrawWithNative(transaction, parsedTxn));
    //     break;
    // }

    const hasBirdgeIN = transaction.logs.find(
          (log) => log.topics[0] === EVENT_ENUM.BRIDGED_WITHDRAWAL
        );
    const hasBridgeOut = transaction.logs.find(
          (log) => log.topics[0] === EVENT_ENUM.BRIDGED_DEPOSIT_WITH_ID
        );
    const hasDeposit = transaction.logs.find(
          (log) => log.topics[0] === EVENT_ENUM.BRIDGED_DEPOSIT
        );
        const hasWithdraw = transaction.logs.find(
          (log) => log.topics[0] === EVENT_ENUM.BRIDGED_WITHDRAWAL_WITH_NATIVE
        );
    
        if (hasBirdgeIN) {
          actions.push(this.parseBridgeIn(transaction,hasBirdgeIN));
        } else if(hasBridgeOut) {
        actions.push(this.parseBridgeOut(transaction, hasBridgeOut));
        } else if(hasDeposit) {
          actions.push(this.parseDeposit(transaction, hasDeposit));
        } else if(hasWithdraw) {
            actions.push(this.parseWithdraw(transaction, hasWithdraw));
        }

    return actions;
  }

  private static parseBridgeIn( transaction: ITransaction,log: ITransactionLog): IBridgeInAction {
      const parsedLog = ProtocolHelper.parseLog(
        log,
        this.contractDefinition.events[EVENT_ENUM.BRIDGED_WITHDRAWAL]
      );
  
      return {
        type: ACTION_ENUM.BRIDGE_IN,
  
        fromChain: null,
        toChain: transaction.chainId,
  
        fromToken: null,
        toToken: parsedLog.args.token,
  
        fromAmount: null,
        toAmount: parsedLog.args.amount.toString(),
  
        sender:null,
        recipient: parsedLog.args.user,
      };
      
    }

    private static parseBridgeOut( transaction: ITransaction,log: ITransactionLog): IBridgeOutAction {
        const parsedLog = ProtocolHelper.parseLog(
          log,
          this.contractDefinition.events[EVENT_ENUM.BRIDGED_DEPOSIT_WITH_ID]
        );
    
        return {
          type: ACTION_ENUM.BRIDGE_OUT,
    
          fromChain: transaction.chainId,
          toChain: null,
    
          fromToken: parsedLog.args.token,
          toToken: null,
    
          fromAmount: parsedLog.args.amount.toString(),
          toAmount: null,
    
          sender:  parsedLog.args.sender,
          recipient: parsedLog.args.origin,
        };
      }

      private static parseDeposit( transaction: ITransaction,log: ITransactionLog): IBridgeOutAction {
        const parsedLog = ProtocolHelper.parseLog(
          log,
          this.contractDefinition.events[EVENT_ENUM.BRIDGED_DEPOSIT]
        );
    
        return {
          type: ACTION_ENUM.BRIDGE_OUT,
    
          fromChain: transaction.chainId,
          toChain: null,
    
          fromToken: parsedLog.args.token,
          toToken: null,
    
          fromAmount: parsedLog.args.amount.toString(),
          toAmount: null,
    
          sender:  parsedLog.args.user,
          recipient: null,
        };
      }

      private static parseWithdraw( transaction: ITransaction,log: ITransactionLog): IBridgeInAction {
        const parsedLog = ProtocolHelper.parseLog(
          log,
          this.contractDefinition.events[EVENT_ENUM.BRIDGED_WITHDRAWAL_WITH_NATIVE]
        );
    
        return {
        type: ACTION_ENUM.BRIDGE_IN,

        fromChain: null,
        toChain: transaction.chainId,

        fromToken: null,
        toToken: parsedLog.args.token,

        fromAmount: null,
        toAmount: parsedLog.args.amountToken.toString(),

        sender: null,
        recipient: parsedLog.args.user,
      };
      }


  // private static parseWithdraw(
  //   transaction: ITransaction,
  //   parsedTxn: ethers.TransactionDescription
  // ): IBridgeInAction {
  //   return {
  //     type: ACTION_ENUM.BRIDGE_IN,

  //     fromChain: null,
  //     toChain: transaction.chainId,

  //     fromToken: null,
  //     toToken: parsedTxn.args.token,

  //     fromAmount: null,
  //     toAmount: parsedTxn.args.amount.toString(),

  //     sender: null,
  //     recipient: parsedTxn.args.to,
  //   };
  // }

  // private static parseWithdrawNative(
  //   transaction: ITransaction,
  //   parsedTxn: ethers.TransactionDescription
  // ): IBridgeInAction {
  //   return {
  //     type: ACTION_ENUM.BRIDGE_IN,

  //     fromChain: null,
  //     toChain: transaction.chainId,

  //     fromToken: null,
  //     toToken: ethers.ZeroAddress,

  //     fromAmount: null,
  //     toAmount: parsedTxn.args.amount.toString(),

  //     sender: null,
  //     recipient: parsedTxn.args.to,
  //   };
  // }

  // private static parseWithdrawWithNative(
  //   transaction: ITransaction,
  //   parsedTxn: ethers.TransactionDescription
  // ): IBridgeInAction[] {
  //   return [
  //     {
  //       type: ACTION_ENUM.BRIDGE_IN,

  //       fromChain: null,
  //       toChain: transaction.chainId,

  //       fromToken: null,
  //       toToken: parsedTxn.args.token,

  //       fromAmount: null,
  //       toAmount: parsedTxn.args.amountToken.toString(),

  //       sender: null,
  //       recipient: parsedTxn.args.to,
  //     },
  //     {
  //       type: ACTION_ENUM.BRIDGE_IN,

  //       fromChain: null,
  //       toChain: transaction.chainId,

  //       fromToken: null,
  //       toToken: ethers.ZeroAddress,

  //       fromAmount: null,
  //       toAmount: parsedTxn.args.amountNative.toString(),

  //       sender: null,
  //       recipient: parsedTxn.args.to,
  //     },
  //   ];
  // }

  // private static parseDeposit(
  //   transaction: ITransaction,
  //   parsedTxn: ethers.TransactionDescription
  // ): IBridgeOutAction {
  //   return {
  //     type: ACTION_ENUM.BRIDGE_OUT,

  //     fromChain: transaction.chainId,
  //     toChain: null,

  //     fromToken: parsedTxn.args.token,
  //     toToken: null,

  //     fromAmount: parsedTxn.args.amount.toString(),
  //     toAmount: null,

  //     sender: transaction.from,
  //     recipient: null,
  //   };
  // }

  // private static parseDepositNative(
  //   transaction: ITransaction,
  //   parsedTxn: ethers.TransactionDescription
  // ): IBridgeOutAction {
  //   return {
  //     type: ACTION_ENUM.BRIDGE_OUT,

  //     fromChain: transaction.chainId,
  //     toChain: null,

  //     fromToken: ethers.ZeroAddress,
  //     toToken: null,

  //     fromAmount: transaction.value.toString(),
  //     toAmount: null,

  //     sender: transaction.from,
  //     recipient: null,
  //   };
  // }
}

export class RhinoFiEthL1DepositContractParser {
  private static contractDefiniton =
    contracts[CONTRACT_ENUM.RHINOFI_ETH_L1_DEPOSIT_CONTRACT];
  private static assetTypesToTokenAddress = {
    // ETH
    "316623735692853304525146192642758839706355829840274185964789512850136103846":
      ethers.ZeroAddress,

    // USDC
    "1147032829293317481173155891309375254605214077236177772270270553197624560221":
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",

    // USDT
    "1269275113502683198091459784363068703822460788394621599952252545182480283333":
      "0xdAC17F958D2ee523a2206206994597C13D831ec7",

    // MATIC
    "1185226704337141674006093426533180511074316762223073934096998563450566746144":
      "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",

    // WBNB
    "96015668771000514794597866745001602613849475661094490757698210630013973673":
      "0x418D75f65a02b3D53B2418FB8E1fe493759c7605",

    // YFI
    "1744965180054291264381444568283831268850780558100531687196082006490436268837":
      "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
  };

  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const hasDepositLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.L1_DEPOSIT_LOG
    );
    const hasWithdrawlLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.L1_WITHDRAWAL
    );

    if (hasDepositLog) {
      actions.push(this.parseDeposit(transaction, hasDepositLog));
    }
    if(hasWithdrawlLog){
      actions.push(this.parseWithdrawl(transaction,hasWithdrawlLog))
    }

    return actions;
  }

  private static parseDeposit(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): IBridgeOutAction {
    const parsedLog = ProtocolHelper.parseLog(
      depositLog,
      this.contractDefiniton.events[EVENT_ENUM.L1_DEPOSIT_LOG]
    );

    const fromToken =
      this.assetTypesToTokenAddress[parsedLog.args.assetType.toString()];

    if (!fromToken) {
      throw new Error(
        `No token found for asset type ${parsedLog.args.assetType.toString()}`
      );
    }

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: null,
      fromToken,
      toToken: null,
      fromAmount: parsedLog.args.nonQuantizedAmount.toString(),
      toAmount: null,
      sender: transaction.from,
      recipient: null,
    };
  }
  private static parseWithdrawl(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): IBridgeInAction {
    const parsedLog = ProtocolHelper.parseLog(
      depositLog,
      this.contractDefiniton.events[EVENT_ENUM.L1_DEPOSIT_LOG]
    );

    const fromToken =
      this.assetTypesToTokenAddress[parsedLog.args.assetType.toString()];

    if (!fromToken) {
      throw new Error(
        `No token found for asset type ${parsedLog.args.assetType.toString()}`
      );
    }

    return {
      type: ACTION_ENUM.BRIDGE_IN,
      fromChain: null,
      toChain: transaction.chainId,
      fromToken,
      toToken: null,
      fromAmount: parsedLog.args.nonQuantizedAmount.toString(),
      toAmount: null,
      sender: transaction.from,
      recipient: parsedLog.args.recipient,
    };
  }
}


export class RhinofiL1WithdrawalRegistryParser {
  private static contractDefiniton =
    contracts[CONTRACT_ENUM.L1_WITHDRAWAL_REGISTRY];

  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const hasWithdrawalLog = transaction.logs.find(
      (log) => log.topics[0] === EVENT_ENUM.L1_WITHDRAWAL_LOG
    );

    if (hasWithdrawalLog) {
      actions.push(this.parseWithdrawal(transaction, hasWithdrawalLog));
    }

    return actions;
  }

  private static parseWithdrawal(
    transaction: ITransaction,
    withdrawalLog: ITransactionLog
  ): IBridgeInAction {
    const parsedLog = ProtocolHelper.parseLog(
      withdrawalLog,
      this.contractDefiniton.events[EVENT_ENUM.L1_WITHDRAWAL_LOG]
    );

    return {
      type: ACTION_ENUM.BRIDGE_IN,
      fromChain: null,
      toChain: transaction.chainId,
      fromToken: null,
      toToken: parsedLog.args.token.toString(),
      fromAmount: null,
      toAmount: parsedLog.args.amount.toString(),
      sender: null,
      recipient: parsedLog.args.recipient.toString(),
    };
  }
}
