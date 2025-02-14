import chalk from "chalk";
import { protocols } from "../../src";
import { ProtocolParserUtils } from "../../src/index";
import { THRUSTER_VERSIONS, thrusterData } from "./data";

describe("ThrusterParser", () => {
  let utils: ProtocolParserUtils;

  beforeAll(async () => {
    utils = new ProtocolParserUtils(protocols.thruster.identifier);
    await utils.initialize();
  });

  it("is correctly defined", () => {
    utils.isValidProtocol();
  });

  it("should parse v2 transactions correctly", async () => {
    const v2Transactions = thrusterData[THRUSTER_VERSIONS.V2];

    for (const transaction of v2Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green(
          "Successfully parsed filled deposit transaction with actions:",
          actions.map((action) => action.type).join(",")
        ),
        "and hash:",
        transaction.txnHash
      );
    }
  });
});
