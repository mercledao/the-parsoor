import chalk from "chalk";
import { protocols } from "../../../src";
import { ProtocolParserUtils } from "../../index";
import {
  DEBRIDGE_VERSIONS,
  debridgePlaceOrderData,
  debridgeFilledOrderData,
  debridgeCrossChainOrderData,
  debridgeBridgeOrderData
} from "./data";

describe("DebridgeParser", () => {
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
    const v1Transactions = debridgeFilledOrderData[DEBRIDGE_VERSIONS.V1];

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

  it("should parse cross chain order transactions correctly", async () => {
    const v1Transactions = debridgeCrossChainOrderData[DEBRIDGE_VERSIONS.V1];

    for (const transaction of v1Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green(
          "Successfully parsed cross chain order transaction with actions:",
          actions.map((action) => action.type).join(",")
        ),
        "and hash:",
        transaction.txnHash
      );
    }
  });

  it("should parse debridge gate order transactions correctly", async () => {
    const v1Transactions = debridgeBridgeOrderData[DEBRIDGE_VERSIONS.V1];

    for (const transaction of v1Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green(
          "Successfully parsed bridge order transaction with actions:",
          actions.map((action) => action.type).join(",")
        ),
        "and hash:",
        transaction.txnHash
      );
    }
  });
});
