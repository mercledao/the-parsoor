import chalk from 'chalk';
import { ProtocolParserUtils } from '../..';
import { protocols } from '../../../src';
import { RHINOFI_VERSIONS, rhinofiData } from './data';

describe('RhinofiParser', () => {
  let utils: ProtocolParserUtils;

  beforeAll(async () => {
    utils = new ProtocolParserUtils(protocols.rhinofi.identifier);
    await utils.initialize();
  });

  it('is correctly defined', () => {
    utils.isValidProtocol();
  });

  it('should parse the data correctly', async () => {
    const v1Transactions = rhinofiData[RHINOFI_VERSIONS.V1];

    for (const transaction of v1Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green('Successfully parsed transaction with actions :', actions.map((action) => action.type).join(',')),
        ' and hash : ',
        transaction.txnHash
      );
    }
  });
});
