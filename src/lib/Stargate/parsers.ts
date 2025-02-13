import { ACTION_ENUM, CHAIN_ID } from "../../enums";
import { ProtocolHelper } from "../../helpers";
import { ethers, ZeroAddress } from "ethers";
import {
  IBridgeInAction,
  IBridgeOutAction,
  ITransaction,
  ITransactionAction,
  ITransactionLog,
} from "../../types";
import { contracts, CONTRACT_ENUM } from "./contracts";
import { ChildProcess } from "child_process";
enum CONTRACT_FUNCTION_NAMES {
  SWAP = "swap",
  SWAP_ETH = "swapETH",
  SWAP_TOKENS = "swapTokens",
  SEND = "send",
}

const STARGATE_TO_CHAIN_ID_V1: Record<number, CHAIN_ID> = {
  101: CHAIN_ID.ETHEREUM,
  102: CHAIN_ID.BSC,
  106: CHAIN_ID.AVALANCHE,
  109: CHAIN_ID.POLYGON,
  110: CHAIN_ID.ARBITRUM,
  111: CHAIN_ID.OPTIMISM,
  112: CHAIN_ID.FANTOM,
  151: CHAIN_ID.METIS,
  177: CHAIN_ID.KAVA,
  181: CHAIN_ID.MANTLE,
  183: CHAIN_ID.LINEA,
  184: CHAIN_ID.BASE,
};

const STARGATE_TO_CHAIN_ID_V2: Record<number, CHAIN_ID> = {
  30101: CHAIN_ID.ETHEREUM,
  30102: CHAIN_ID.BSC,
  30106: CHAIN_ID.AVALANCHE,
  30109: CHAIN_ID.POLYGON,
  30110: CHAIN_ID.ARBITRUM,
  30111: CHAIN_ID.OPTIMISM,
  30214: CHAIN_ID.SCROLL,
  30151: CHAIN_ID.METIS,
  30177: CHAIN_ID.KAVA,
  30181: CHAIN_ID.MANTLE,
  30183: CHAIN_ID.LINEA,
  30184: CHAIN_ID.BASE,
  30211: CHAIN_ID.AURORA,
  30290: CHAIN_ID.TAIKO,
  30153: CHAIN_ID.CORE,
  30150: CHAIN_ID.KAIA,
  30284: CHAIN_ID.IOTA,
  30235: CHAIN_ID.RARI,
  30280: CHAIN_ID.SEI,
  30295: CHAIN_ID.FLARE,
  30294: CHAIN_ID.GRAVIRY,
  30309: CHAIN_ID.LIGHTLINK,
  30318: CHAIN_ID.PLUME,
  30324: CHAIN_ID.ABSTRACT,
  30336: CHAIN_ID.FLOW,
  30340: CHAIN_ID.SONEIUM,
  30361: CHAIN_ID.GOAT,
  30362: CHAIN_ID.BERACHAIN,
  30333: CHAIN_ID.ROOTSTOCK,
  30329: CHAIN_ID.HEMI,
  30339: CHAIN_ID.INK,
  30342: CHAIN_ID.GLUE,
  30138: CHAIN_ID.FUSE,
  30327: CHAIN_ID.SUPERPOSITION,
  30267: CHAIN_ID.DEGEN,
  30323: CHAIN_ID.CODEX
};

const tokens = {
  "101": [
    { token: "1", address: "0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56" },
    { token: "2", address: "0x38EA452219524Bb87e18dE1C24D3bB59510BD783" },
    { token: "3", address: "0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d" },
    { token: "7", address: "0xfA0F307783AC21C39E939ACFF795e27b650F6e68" },
    { token: "11", address: "0x692953e758c3669290cb1677180c64183cEe374e" },
    { token: "13", address: "0x101816545F6bd2b1076434B54383a1E633390A2E" },
    { token: "14", address: "0x590d4f8A68583639f215f675F3a259Ed84790580" },
    { token: "15", address: "0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2" },
    { token: "16", address: "0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8" },
    { token: "17", address: "0xd8772edBF88bBa2667ed011542343b0eDDaCDa47" },
    { token: "19", address: "0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d" },
    { token: "22", address: "0xA572d137666DCbAdFA47C3fC41F15e90134C618c" },
  ],
  "102": [
    { token: "2", address: "0x9aA83081AA06AF7208Dcc7A4cB72C94d057D2cda" },
    { token: "5", address: "0x98a5737749490856b401DB5Dc27F522fC314A4e1" },
    { token: "11", address: "0x4e145a589e4c03cBe3d28520e4BF3089834289Df" },
    { token: "16", address: "0x7BfD7f2498C4796f10b6C611D9db393D3052510C" },
    { token: "19", address: "0x68C6c27fB0e02285829e69240BE16f32C5f8bEFe" },
  ],
  "106": [
    { token: "1", address: "0x1205f31718499dBf1fCa446663B532Ef87481fe1" },
    { token: "2", address: "0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c" },
    { token: "7", address: "0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea" },
    { token: "16", address: "0x8736f92646B2542B3e5F3c63590cA7Fe313e283B" },
    { token: "19", address: "0xEAe5c2F6B25933deB62f754f239111413A0A25ef" },
  ],
  "109": [
    { token: "1", address: "0x1205f31718499dBf1fCa446663B532Ef87481fe1" },
    { token: "2", address: "0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c" },
    { token: "3", address: "0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea" },
    { token: "16", address: "0x8736f92646B2542B3e5F3c63590cA7Fe313e283B" },
  ],
  "110": [
    { token: "1", address: "0x892785f33CdeE22A30AEF750F285E18c18040c3e" },
    { token: "2", address: "0xB6CfcF89a7B22988bfC96632aC2A9D6daB60d641" },
    { token: "7", address: "0xaa4BF442F024820B2C28Cd0FD72b82c63e66F56C" },
    { token: "13", address: "0x915A55e36A01285A14f05dE6e81ED9cE89772f8e" },
    { token: "15", address: "0x600E576F9d853c95d58029093A16EE49646F3ca5" },
    { token: "16", address: "0xF39B7Be294cB36dE8c510e267B82bb588705d977" },
  ],
  "111": [
    { token: "1", address: "0xDecC0c09c3B5f6e92EF4184125D5648a66E35298" },
    { token: "3", address: "0x165137624F1f692e69659f944BF69DE02874ee27" },
    { token: "7", address: "0x368605D9C6243A80903b9e326f1Cddde088B8924" },
    { token: "13", address: "0xd22363e3762cA7339569F3d33EADe20127D5F98C" },
    { token: "14", address: "0x2F8bC9081c7FCFeC25b9f41a50d97EaA592058ae" },
    { token: "15", address: "0x3533F5e279bDBf550272a199a223dA798D9eff78" },
    { token: "16", address: "0x5421FA1A48f9FF81e4580557E86C7C0D24C18036" },
  ],
  "112": [
    { token: "21", address: "0xc647ce76ec30033aa319d472ae9f4462068f2ad7" },
  ],
  "151": [
    { token: "17", address: "0xAad094F6A75A14417d39f04E690fC216f080A41a" },
    { token: "19", address: "0x2b60473a7C41Deb80EDdaafD5560e963440eb632" },
  ],
  "184": [
    { token: "1", address: "0x4c80E24119CFB836cdF0a6b53dc23F04F7e652CA" },
    { token: "13", address: "0x28fc411f9e1c480AD312b3d9C60c22b965015c6B" },
  ],
  "183": [
    { token: "13", address: "0xAad094F6A75A14417d39f04E690fC216f080A41a" },
  ],
  "177": [
    { token: "2", address: "0xAad094F6A75A14417d39f04E690fC216f080A41a" },
  ],
  "181": [
    { token: "1", address: "0xAad094F6A75A14417d39f04E690fC216f080A41a" },
    { token: "2", address: "0x2b60473a7C41Deb80EDdaafD5560e963440eb632" },
    { token: "22", address: "0xf52b354FFDB323E0667E87a0136040e3e4D9dF33" },
  ],
};

export class StargateParser {
  public static parseRouterContractTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.ROUTER_CONTRACT,
      contracts
    );

    if (!parsedTxn) return actions;

    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP) {
      actions.push(this.handleSwap(transaction, parsedTxn));
    }

    return actions;
  }

  private static getChainId = (chain: CHAIN_ID): number | undefined => {
    return Object.entries(STARGATE_TO_CHAIN_ID_V1).find(
      ([_, value]) => value === chain
    )?.[0] as unknown as number;
  };

  private static handleSwap(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction {
    const fromChain = transaction.chainId;
    const fromToken =
      tokens[this.getChainId(transaction.chainId)][parsedTxn.args._srcPoolId]
        ?.address;
    const toToken =
      tokens[this.getChainId(transaction.chainId)][parsedTxn.args._dstPoolId]
        ?.address;

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain,
      toChain: STARGATE_TO_CHAIN_ID_V1[parsedTxn.args._dstChainId],
      fromToken,
      toToken,
      fromAmount: parsedTxn.args._amountLD.toString(),
      toAmount: null,
      sender: transaction.from,
      recipient: parsedTxn.args._to,
    };
  }

  public static parseEthRouter2ContractTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.ETH_ROUTER_2,
      contracts
    );

    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP_ETH) {
      actions.push(this.handleSwapEth(transaction, parsedTxn));
    }

    return actions;
  }

  private static handleSwapEth(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction {
    const fromChain = transaction.chainId;
    const fromToken = ZeroAddress;

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain,
      toChain: STARGATE_TO_CHAIN_ID_V1[parsedTxn.args._dstChainId],
      fromToken,
      toToken: null,
      fromAmount: transaction.value.toString(),
      toAmount: null,
      sender: transaction.from,
      recipient: parsedTxn.args._toAddress || parsedTxn.args._to,
    };
  }

  private static handleSwapTokens(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction {
    const fromChain = transaction.chainId;
    const fromToken =
      tokens[this.getChainId(transaction.chainId)][parsedTxn.args._srcPoolId]
        ?.address;
    const toToken =
      tokens[this.getChainId(transaction.chainId)][parsedTxn.args._dstPoolId]
        ?.address;

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain,
      toChain: STARGATE_TO_CHAIN_ID_V1[parsedTxn.args._dstChainId],
      fromToken,
      toToken,
      fromAmount: parsedTxn.args._amountLD.toString(),
      toAmount: null,
      sender: transaction.from,
      recipient: parsedTxn.args._to,
    };
  }

  public static parseWidgetSwapContractTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.WIDGET_SWAP,
      contracts
    );

    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP_ETH) {
      actions.push(this.handleSwapEth(transaction, parsedTxn));
    } else if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SWAP_TOKENS) {
      actions.push(this.handleSwapTokens(transaction, parsedTxn));
    }

    return actions;
  }

  public static parsePoolNativeContractTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.POOL_NATIVE,
      contracts
    );

    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SEND) {
      actions.push(this.handleSend(transaction, parsedTxn));
    }

    return actions;
  }

  private static handleSend(
    transaction: ITransaction,
    parsedTxn: ethers.TransactionDescription
  ): IBridgeOutAction {
    const fromChain = transaction.chainId;
    const fromToken = ZeroAddress;
    console.log(parsedTxn.args._sendParam.dstEid);
    

    return {
      type: ACTION_ENUM.BRIDGE_OUT,
      fromChain,
      toChain: STARGATE_TO_CHAIN_ID_V2[parsedTxn.args._sendParam.dstEid.toString()],
      fromToken,
      toToken: null,
      fromAmount: transaction.value.toString(),
      toAmount: null,
      sender: transaction.from,
      recipient: ethers.getAddress(
        `0x${parsedTxn.args._sendParam.to.slice(-40)}`
      ),
    };
  }

  public static parsePoolUSDCContractTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.POOL_NATIVE,
      contracts
    );

    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SEND) {
      actions.push(this.handleSend(transaction, parsedTxn));
    }

    return actions;
  }

  public static parsePoolUSDTContractTransaction(
    transaction: ITransaction
  ): ITransactionAction[] {
    const actions: ITransactionAction[] = [];

    const parsedTxn = ProtocolHelper.parseTransaction(
      transaction,
      CONTRACT_ENUM.POOL_NATIVE,
      contracts
    );

    if (parsedTxn.name === CONTRACT_FUNCTION_NAMES.SEND) {
      actions.push(this.handleSend(transaction, parsedTxn));
    }

    return actions;
  }
}
