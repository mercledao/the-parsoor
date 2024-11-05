import { ACTION_ENUM } from "../../enums";

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
};

export type IMultiSwapAction = {
  type: ACTION_ENUM.MULTI_SWAP;
  fromTokens: string[];
  toTokens: string[];
  fromAmounts: string[];
  toAmounts?: string[];
};

export type IBridgeInAction = {
  type: ACTION_ENUM.BRIDGE_IN;
  fromToken: string;
  toToken: string;
  fromAmount: string;
  toAmount?: string;
};

export type IBridgeOutAction = {
  type: ACTION_ENUM.BRIDGE_OUT;
  fromToken: string;
  toToken: string;
  fromAmount: string;
  toAmount?: string;
};
