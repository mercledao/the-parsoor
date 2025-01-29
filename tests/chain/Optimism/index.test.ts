import chalk from 'chalk';
import { CHAIN_ID } from "../../../src/enums";
import { ChainParserUtils } from '../../index';
import { OPTIMISM_VERSIONS, optimiseBridgeData } from './data';

describe('OptimismParser', () => {
  let utils: ChainParserUtils;

  beforeAll(async () => {
    utils = new ChainParserUtils(CHAIN_ID.OPTIMISM);
    await utils.initialize();
  });

  it('should parse v1 transactions correctly', async () => {
    const v1Transactions = optimiseBridgeData[OPTIMISM_VERSIONS.V1];

    for (const transaction of v1Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green('Successfully parsed bridge transaction with actions:', actions.map((action) => action.type).join(',')),
        'and hash:',
        transaction.txnHash
      );
    }
  });
});