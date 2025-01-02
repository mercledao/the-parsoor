import chalk from "chalk";
import { protocols } from "../../../src";
import { ProtocolParserUtils } from "../../index";
import {
  MODE_VERSIONS,
  ModeL1BridgeData,
} from "./data";

describe("ModeParser", () => {
  let utils: ProtocolParserUtils;

  beforeAll(async () => {
    utils = new ProtocolParserUtils(protocols.mode.identifier);
    await utils.initialize();
  });

  it("is correctly defined", () => {
    utils.isValidProtocol();
  });

  it("should parse bridge transactions correctly", async () => {
    const v1Transactions = ModeL1BridgeData[MODE_VERSIONS.V1];

    for (const transaction of v1Transactions) {
      
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green(
          "Successfully parsed bridge transaction with actions:",
          actions.map((action) => action.type).join(",")
        ),
        "and hash:",
        transaction.txnHash
      );
    }
  });
});
