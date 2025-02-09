import { protocols } from "../../config";
import { ProtocolHelper } from "../../helpers";
import {
  IProtocolContractDefinitions,
  IProtocolParserExport,
  ITransaction,
  ITransactionAction,
} from "../../types";
import { CONTRACT_ENUM, contracts } from "./contracts";
import { SocketGatewayParser } from "./parsers";

export default class Bungee implements IProtocolParserExport {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.bungee.identifier;
  }

  public async parseTransaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    const actions: ITransactionAction[] = [];
    
    if (
      ProtocolHelper.txnToIsListenerContract(
        transaction,
        CONTRACT_ENUM.SOCKET_GATEWAY,
        contracts
      )
    ) {
      const action = SocketGatewayParser.parseTransaction(transaction);
      actions.push(...action);
    }
    return actions;
  }

  public getProtocolContracts(): IProtocolContractDefinitions {
    return contracts;
  }
}
