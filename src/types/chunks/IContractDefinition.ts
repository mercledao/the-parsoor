import { CHAIN_ID } from "../../config/chains";

/** Mapping of a protocol's contract names to their configurations */
export type IProtocolContractDefinitions = Record<string, IContractConfig>;

/** Configuration for a smart contract */
export type IContractConfig = {
  /** Contract ABI (Application Binary Interface) */
  abi: any;

  /** Mapping of chain IDs to contract deployments */
  deployments: Record<CHAIN_ID, string>;
};

