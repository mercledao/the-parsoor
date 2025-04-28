import { ITransaction, ITransactionAction } from "../../types";
import { UniswapParser } from "../Uniswap/parsers/Uniswap";
import { CONTRACT_ENUM } from "./contracts";

export class KodiakParser {
  public static async parseV2Transaction(
    transaction: ITransaction
  ): Promise<ITransactionAction[]> {
    return await UniswapParser.parseV2Transaction(transaction);
  }

  public static async parseV3Transaction(
    transaction: ITransaction,
    routerType: CONTRACT_ENUM
  ): Promise<ITransactionAction[]> {
    return await UniswapParser.parseV3Transaction(transaction, routerType);
  }
}
