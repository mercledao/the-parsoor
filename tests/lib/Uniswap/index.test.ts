import chalk from 'chalk';
import { ILimitOrderAction, IProtocolTestTransaction, protocols } from '../../../src';
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
    await testTransactions(v2Transactions, 'V2');
  });

  it('should parse V3 transactions correctly', async () => {
    const v3Transactions = uniswapData[UNISWAP_VERSIONS.V3];
    await testTransactions(v3Transactions, 'V3');
  });

  it('should parse limit order transactions correctly', async () => {
    const limitOrderTransactions = uniswapData[UNISWAP_VERSIONS.LIMIT_ORDER];
    
    for (const transaction of limitOrderTransactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      
      expect(actions.length).toBe(transaction.emittedActions.length);
      
      for (let i = 0; i < actions.length; i++) {
        const actualAction = actions[i] as ILimitOrderAction;
        const expectedAction = transaction.emittedActions[i] as ILimitOrderAction;
        
        utils.assertLimitOrderAction(expectedAction, actualAction);
        
        console.log(
          chalk.green(
            `Successfully parsed limit order transaction:`,
            transaction.txnHash
          )
        );
      }
    }
  });

  async function testTransactions(transactions: IProtocolTestTransaction[], version: string) {
    for (const transaction of transactions) {
      const actions = await utils.fetchAndParseTestTxn(transaction);
      utils.assertTestTransactionForData(transaction, actions);

      console.log(
        chalk.green(
          `Successfully parsed ${version} transaction with actions:`,
          actions.map((action) => action.type).join(',')
        ),
        'and hash:',
        transaction.txnHash
      );
    }
  }
});
