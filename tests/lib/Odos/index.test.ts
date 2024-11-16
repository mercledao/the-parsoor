import chalk from "chalk";
import { ProtocolParserUtils } from "../..";
import { protocols } from "../../../src";
import { ODOS_VERSIONS, odosLimitOrderRouter, odosRouter } from "./data";

describe("OdosParser", () => {
  let utils: ProtocolParserUtils;

  beforeAll(async () => {
    utils = new ProtocolParserUtils(protocols.odos.identifier);
    await utils.initialize();
  });

  it("is correctly defined", () => {
    utils.isValidProtocol();
  });

  it("should parse limit order router correctly", async () => {
    const limitOrderTransactions = odosLimitOrderRouter[ODOS_VERSIONS.V1];

    for (const transaction of limitOrderTransactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green(
          "Successfully parsed transaction with actions :",
          actions.map((action) => action.type).join(",")
        ),
        " and hash : ",
        transaction.txnHash
      );
    }
  });

  it("should parse v1 router correctly", async () => {
    const v1Transactions = odosRouter[ODOS_VERSIONS.V1];

    for (const transaction of v1Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green(
          "Successfully parsed transaction with actions :",
          actions.map((action) => action.type).join(",")
        ),
        " and hash : ",
        transaction.txnHash
      );
    }
  });

  it("should parse v2 router correctly", async () => {
    const v2Transactions = odosRouter[ODOS_VERSIONS.V2];

    for (const transaction of v2Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green(
          "Successfully parsed transaction with actions :",
          actions.map((action) => action.type).join(",")
        ),
        " and hash : ",
        transaction.txnHash
      );
    }
  });
});
