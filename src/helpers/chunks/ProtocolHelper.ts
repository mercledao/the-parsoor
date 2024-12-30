import { ethers, AbiCoder, toBeHex, getAddress } from "ethers";
import {
  IContractEventConfig,
  IProtocolContractDefinitions,
  ITransaction,
  ITransactionLog,
} from "../../types";
const ERC20_TOKEN_TRANSFER_EVENT_SIGNATURE = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'

export class ProtocolHelper {
  /**
   * Parses a transaction
   * @param transaction - The transaction
   * @param contractName - The name of the contract
   * @param protocolContracts - The protocol contracts
   * @returns The parsed transaction
   */
  public static parseTransaction(
    transaction: ITransaction,
    contractName: string,
    protocolContracts: IProtocolContractDefinitions
  ): ethers.TransactionDescription {
    const contractInterface = protocolContracts[contractName].interface;
    const decoded = contractInterface.parseTransaction(transaction);

    if (!decoded) {
      throw new Error("Failed to parse transaction");
    }

    return decoded;
  }

  /**
   * Parses a log
   * @param log - The log to parse
   * @param eventDefinition - The event's defintion
   * @returns The parsed log
   */
  public static parseLog(
    log: ITransactionLog,
    eventDefinition: IContractEventConfig
  ): ethers.LogDescription {
    const eventInterface = eventDefinition.abi;
    const decoded = eventInterface.parseLog({
      topics: log.topics,
      data: log.data,
    });

    if (!decoded) {
      throw new Error("Failed to parse log");
    }

    return decoded;
  }

  /**
   * Checks if the transaction from address is a listener contract for the given contract name
   * @param txn - The transaction
   * @param contractName - The name of the contract
   * @param protocolContracts - The protocol contracts
   * @returns A boolean indicating if the transaction from address is a listener contract for the given contract name
   */
  public static txnFromIsListenerContract(
    txn: ITransaction,
    contractName: string,
    protocolContracts: IProtocolContractDefinitions
  ): boolean {
    if (!protocolContracts[contractName]) {
      return false;
    }

    // Check if the transaction from address is a listener contract for the given contract name
    const hasContract =
      ethers.getAddress(
        protocolContracts[contractName].deployments[txn.chainId].address
      ) === ethers.getAddress(txn.from);

    return Boolean(hasContract);
  }

  /**
   * Checks if the transaction to address is a listener contract for the given contract name
   * @param txn - The transaction
   * @param contractName - The name of the contract
   * @param protocolContracts - The protocol contracts
   * @returns A boolean indicating if the transaction to address is a listener contract for the given contract name
   */
  public static txnToIsListenerContract(
    txn: ITransaction,
    contractName: string,
    protocolContracts: IProtocolContractDefinitions
  ): boolean {
    if (!protocolContracts[contractName]) {
      return false;
    }

    if (!protocolContracts[contractName].deployments[txn.chainId]) {
      return false;
    }

    // Check if the transaction to address is a listener contract for the given contract name
    const hasContract =
      ethers.getAddress(
        protocolContracts[contractName].deployments[txn.chainId].address
      ) === ethers.getAddress(txn.to);

    return hasContract;
  }

  /**
   * Extracts all the listener contracts from the protocol contracts
   * @param protocolContracts - The protocol contracts
   * @returns An array of listener contracts
   */
  public static extractAllContracts(
    protocolContracts: IProtocolContractDefinitions
  ): string[] {
    const listenerContracts: string[] = [];

    Object.values(protocolContracts).forEach((contracts) => {
      Object.values(contracts.deployments).forEach((deployment) => {
        listenerContracts.push(deployment.address);
      });
    });

    return listenerContracts;
  }

  public static parseERC20TransferLogs(
    logs: ITransactionLog[]
  ): {
    fromAddress: string;
    toAddress: string;
    value: bigint;
    contractAddress: string;
  }[] {
    const abiCoder = new AbiCoder();

    // Filter and parse logs
    const parsedLogs = logs
      .filter(log => log.topics && log.topics[0] === ERC20_TOKEN_TRANSFER_EVENT_SIGNATURE)
      .map(log => {
        // Decode `from` and `to` addresses from topics
        const fromAddress = getAddress(toBeHex(log.topics[1]));
        const toAddress = getAddress(toBeHex(log.topics[2]));

        // Decode `value` from the data field
        const [value] = abiCoder.decode(["uint256"], log.data);

        return {
          fromAddress,
          toAddress,
          value: BigInt(value.toString()),
          contractAddress: log.contractAddress
        };
      });

    return parsedLogs;
  }
}
