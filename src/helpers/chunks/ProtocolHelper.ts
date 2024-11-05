import { contracts } from "../../lib/RhinoFi/contracts";
import { ITransaction, ITransactionAction } from "../../types";
import { IProtocolContractDefinitions } from "../../types/chunks/IContractDefinition";
import { ethers } from "ethers";

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

    // Check if the transaction to address is a listener contract for the given contract name
    const hasContract = Object.values(
      protocolContracts[contractName].deployments
    ).find(
      (deployment) =>
        ethers.getAddress(deployment) === ethers.getAddress(txn.from)
    );

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

    // Check if the transaction to address is a listener contract for the given contract name
    const hasContract =
      ethers.getAddress(contracts[contractName].deployments[txn.chainId]) ===
      ethers.getAddress(txn.to);

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
        listenerContracts.push(deployment);
      });
    });

    return listenerContracts;
  }
}
