import { ACTION_ENUM } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import {
  ITransactionAction,
  ITransaction,
} from "../../types";

export class MaverickContractParser {
  public static parseTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const sender = transaction.from;
    const erc20TransferLogs = ProtocolHelper.parseERC20TransferLogs(
      transaction.logs
    );
    console.log(erc20TransferLogs);
    
    const outgoingLog = erc20TransferLogs.filter(
      (log) => log.fromAddress === sender
    );
    const incomingLog = erc20TransferLogs.filter(
      (log) => log.toAddress === sender
    );
    const fromToken = outgoingLog[0].contractAddress;
    const toToken = incomingLog[0].contractAddress;
    const fromAmount = outgoingLog[0].value.toString();
    const toAmount = incomingLog[0].value.toString();

    return [
      {
        type: ACTION_ENUM.SINGLE_SWAP,
        fromToken,
        toToken,
        fromAmount,
        toAmount,
        sender,
        recipient: sender,
      },
    ];
  }
}
