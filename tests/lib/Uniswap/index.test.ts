import chalk from 'chalk';
import { protocols } from '../../../src';
import { ProtocolParserUtils } from '../../index';
import { UNISWAP_VERSIONS, uniswapData } from './data';

describe('UniswapParser', () => {
  let utils: ProtocolParserUtils;

  beforeAll(async () => {
    utils = new ProtocolParserUtils(protocols.uniswap.identifier);
    await utils.initialize();
  });

  it('is correctly defined', () => {
    utils.isValidProtocol();
  });

  it('should parse V2 transactions correctly', async () => {
    const v2Transactions = uniswapData[UNISWAP_VERSIONS.V2];

    for (const transaction of v2Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green(
          'Successfully parsed V2 transaction with actions:',
          actions.map((action) => action.type).join(',')
        ),
        'and hash:',
        transaction.txnHash
      );
    }
  });

  it('should parse V3 transactions correctly', async () => {
    const v3Transactions = uniswapData[UNISWAP_VERSIONS.V3];

    for (const transaction of v3Transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green(
          'Successfully parsed V3 transaction with actions:',
          actions.map((action) => action.type).join(',')
        ),
        'and hash:',
        transaction.txnHash
      );
    }
  });
});
