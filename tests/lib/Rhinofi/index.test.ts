import chalk from 'chalk';
import { ProtocolParserUtils } from '../..';
import { protocols } from '../../../src';
import { RHINOFI_VERSIONS, rhinofiL2Contracts, rhinoL1WithdrawalRegistry, rhiofiEthL1DepositContract } from './data';

describe('RhinofiParser', () => {
  let utils: ProtocolParserUtils;

  beforeAll(async () => {
    utils = new ProtocolParserUtils(protocols.rhinofi.identifier);
    await utils.initialize();
  });

  it('is correctly defined', () => {
    utils.isValidProtocol();
  });

  it('should parse v1 L1 Deposit contract correctly', async () => {
    const v1Transactions = rhiofiEthL1DepositContract[RHINOFI_VERSIONS.V1];

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

  it('should parse v1 L2 contracts correctly', async () => {
    const v1Transactions = rhinofiL2Contracts[RHINOFI_VERSIONS.V1];

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

  it('should parse v1 L1 Withdrawal Registry correctly', async () => {
    const v1Transactions = rhinoL1WithdrawalRegistry[RHINOFI_VERSIONS.V1];

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
