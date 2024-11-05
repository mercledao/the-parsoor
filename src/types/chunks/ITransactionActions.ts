import { ACTION_ENUM, CHAIN_ID } from "../../enums";

export type ITransactionAction =
  | ISingleSwapAction
  | IMultiSwapAction
  | IBridgeInAction
  | IBridgeOutAction;

export type ISingleSwapAction = {
  type: ACTION_ENUM.SINGLE_SWAP;
  fromToken: string;
  toToken: string;
  fromAmount: string;
  toAmount?: string;
  recipient?: string;
};

export type IMultiSwapAction = {
  type: ACTION_ENUM.MULTI_SWAP;
  fromTokens: string[];
  toTokens: string[];
  fromAmounts: string[];
  toAmounts?: string[];
  recipients?: string[];
};

export type IBridgeInAction = {
  type: ACTION_ENUM.BRIDGE_IN;
  /**
   * The chain the funds are coming from
   */
  fromChain?: CHAIN_ID;
  /**
   * The chain the funds are going to
   */
  toChain: CHAIN_ID;
  /**
   * The token being bridged out
   */
  fromToken?: string;
  /**
   * The token being bridged in
   */
  toToken: string;
  /**
   * The amount being bridged out
   */
  fromAmount?: string;
  /**
   * The amount being bridged in
   */
  toAmount: string;
  /**
   * The sender of the bridged funds
   */
  sender?: string;
  /**
   * The recipient of the bridged funds
   */
  recipient: string;
};

export type IBridgeOutAction = {
  type: ACTION_ENUM.BRIDGE_OUT;
  /**
   * The chain the funds are coming from
   */
  fromChain: CHAIN_ID;
  /**
   * The chain the funds are going to
   */
  toChain: CHAIN_ID | null;
  /**
   * The token being bridged out
   */
  fromToken: string;
  /**
   * The token being bridged in
   */
  toToken: string | null;
  /**
   * The amount being bridged out
   */
  fromAmount: string;
  /**
   * The amount being bridged in
   */
  toAmount: string | null;
  /**
   * The sender of the bridged funds
   */
  sender: string;
  /**
   * The recipient of the bridged funds
   */
  recipient: string | null;
};
