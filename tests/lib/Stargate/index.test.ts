import chalk from "chalk";
import { protocols } from "../../../src";
import { ProtocolParserUtils } from "../../index";
import { STARGATE_VERSIONS, stargateData } from "./data";

describe("StargateParser", () => {
  let utils: ProtocolParserUtils;

  beforeAll(async () => {
    utils = new ProtocolParserUtils(protocols.stargate.identifier);
    await utils.initialize();
  });

  it("is correctly defined", () => {
    utils.isValidProtocol();
  });

  // it("should parse v1 transactions correctly", async () => {
  //   const v1Transactions = stargateData[STARGATE_VERSIONS.V1];

  //   for (const transaction of v1Transactions) {
  //     const actions = await utils.fetchAndParseTestTxn(transaction);
  //     utils.assertTestTransactionForData(transaction, actions);

  //     console.log(
  //       chalk.green(
  //         "Successfully parsed v1 transaction with actions:",
  //         actions.map((action) => action.type).join(",")
  //       ),
  //       "and hash:",
  //       transaction.txnHash
  //     );
  //   }
  // });

  it("should parse v2 transactions correctly", async () => {
    const v2Transactions = stargateData[STARGATE_VERSIONS.V2];

    for (const transaction of v2Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green(
          "Successfully parsed v2 transaction with actions:",
          actions.map((action) => action.type).join(",")
        ),
        "and hash:",
        transaction.txnHash
      );
    }
  });
});
