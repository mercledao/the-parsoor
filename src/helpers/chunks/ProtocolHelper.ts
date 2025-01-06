import { ethers, AbiCoder, toBeHex, getAddress, ZeroAddress } from "ethers";
import {
  IContractEventConfig,
  IProtocolContractDefinitions,
  ITransaction,
  ITransactionLog,
} from "../../types";
const ERC20_TOKEN_TRANSFER_EVENT_SIGNATURE =
  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
const NULL_ADDRESS = "0x0000000000000000000000000000000000000000000000000000000000000000"
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

  public static parseERC20TransferLogs(logs: ITransactionLog[]): {
    fromAddress: string;
    toAddress: string;
    value: bigint;
    contractAddress: string;
  }[] {
    const abiCoder = new AbiCoder();

    // Filter and parse logs
    const parsedLogs = logs
      .filter(
        (log) =>
          log.topics && log.topics[0] === ERC20_TOKEN_TRANSFER_EVENT_SIGNATURE && log.topics.length < 4
      )
      .map((log) => {
        // Decode `from` and `to` addresses from topics
        const fromAddress = log.topics[1] === NULL_ADDRESS ? ZeroAddress : getAddress(toBeHex(log.topics[1]));
        const toAddress = log.topics[2] === NULL_ADDRESS ? ZeroAddress :  getAddress(toBeHex(log.topics[2]));

        // Decode `value` from the data field
        const [value] = abiCoder.decode(["uint256"], log.data);
        return {
          fromAddress,
          toAddress,
          value: BigInt(value.toString()),
          contractAddress: log.contractAddress,
        };
      });

    return parsedLogs;
  }

  public static analyzeSingleSwapFromLogs(
    txLogs: ITransactionLog[],
    txn: ITransaction
  ) {
    const userAddress = txn.from.toLowerCase();
    const transfers = this.parseERC20TransferLogs(txLogs);
    

    let fromToken: string | null = null;
    let toToken: string | null = null;
    let fromAmount = BigInt(0);
    let toAmount = BigInt(0);

    transfers.forEach(({ fromAddress, toAddress, value, contractAddress }) => {
      
      // If the user is the sender, it's the amount being deducted (fromAmount)
      if (fromAddress.toLowerCase() === userAddress) {
        fromToken = contractAddress;
        fromAmount += BigInt(value);
      }

      // If the user is the recipient, it's the amount being credited (toAmount)
      if (toAddress.toLowerCase() === userAddress) {
        toToken = contractAddress;
        toAmount += BigInt(value);
      }
    });

    return {
      fromToken,
      toToken,
      fromAmount: fromAmount.toString(),
      toAmount: toAmount.toString(),
    };
  }
}
