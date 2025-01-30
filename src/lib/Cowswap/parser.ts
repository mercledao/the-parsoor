import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  IMultiSwapAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { contracts } from "./contracts";

export class CowswapContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];
    const log = transaction.logs;
    const erc20Transfers = ProtocolHelper.parseERC20TransferLogs(log);
    console.log(erc20Transfers);
    return actions;
  }

  private static parseSwap(
    transaction: ITransaction,
    depositLog: ITransactionLog
  ): IBridgeOutAction {
    const parsedFilledDepositLog = ProtocolHelper.parseLog(
      depositLog,
      contracts.SPOKEPOOL_CONTRACT.events[EVENT_ENUM.DEPOSIT]
    );

    const args = parsedFilledDepositLog.args;

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain: transaction.chainId,
      toChain: args.destinationChainId.toString(),
      fromToken: args.inputToken,
      toToken: args.outputToken,
      fromAmount: args.inputAmount.toString(),
      toAmount: args.outputAmount.toString(),
      sender: args.depositor,
      recipient: args.recipient,
    };
  }
}
