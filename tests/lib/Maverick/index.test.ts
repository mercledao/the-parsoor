import chalk from 'chalk';
import { protocols } from '../../../src';
import { ProtocolParserUtils } from '../../index';
import { MAVERICK_VERSIONS, maverickData } from './data';

describe('MaverickParser', () => {
  let utils: ProtocolParserUtils;

  beforeAll(async () => {
    utils = new ProtocolParserUtils(protocols.maverick.identifier);
    await utils.initialize();
  });

  it('is correctly defined', () => {
    utils.isValidProtocol();
  });

  it('should parse v1 transactions correctly', async () => {
    const v1Transactions = maverickData[MAVERICK_VERSIONS.V1];

    for (const transaction of v1Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green('Successfully parsed v1 swap transaction with actions:', actions.map((action) => action.type).join(',')),
        'and hash:',
        transaction.txnHash
      );
    }
  });
});