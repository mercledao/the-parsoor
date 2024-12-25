import chalk from "chalk";
import { protocols } from "../../../src";
import { ProtocolParserUtils } from "../../index";
import {
  DEBRIDGE_VERSIONS,
  debridgePlaceOrderData,
  debridgerulfilledOrderData,
} from "./data";

describe("DebridgeDepositParser", () => {
  let utils: ProtocolParserUtils;

  beforeAll(async () => {
    utils = new ProtocolParserUtils(protocols.debridge.identifier);
    await utils.initialize();
  });

  it("is correctly defined", () => {
    utils.isValidProtocol();
  });

  it("should parse place order transactions correctly", async () => {
    const v1Transactions = debridgePlaceOrderData[DEBRIDGE_VERSIONS.V1];

    for (const transaction of v1Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green(
          "Successfully parsed place order transaction with actions:",
          actions.map((action) => action.type).join(",")
        ),
        "and hash:",
        transaction.txnHash
      );
    }
  });

  it("should parse fulfilled order transactions correctly", async () => {
    const v1Transactions = debridgerulfilledOrderData[DEBRIDGE_VERSIONS.V1];

    for (const transaction of v1Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green(
          "Successfully parsed fulfilled order transaction with actions:",
          actions.map((action) => action.type).join(",")
        ),
        "and hash:",
        transaction.txnHash
      );
    }
  });
});
