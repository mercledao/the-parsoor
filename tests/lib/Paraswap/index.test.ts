import chalk from 'chalk';
import { protocols } from '../../../src';
import { ProtocolParserUtils } from '../../index';
import { PARASWAP_VERSIONS, paraswapSimpleSwappedData } from './data';

describe('ParaswapParser', () => {
  let utils: ProtocolParserUtils;

  beforeAll(async () => {
    utils = new ProtocolParserUtils(protocols.paraswap.identifier);
    await utils.initialize();
  });

  it('is correctly defined', () => {
    utils.isValidProtocol();
  });

  it('should parse v5 transactions correctly', async () => {
    const v3Transactions = paraswapSimpleSwappedData[PARASWAP_VERSIONS.V5];

    for (const transaction of v3Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green('Successfully parsed simple swapped transaction with actions:', actions.map((action) => action.type).join(',')),
        'and hash:',
        transaction.txnHash
      );
    }
  });
});