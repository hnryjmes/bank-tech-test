/* eslint-disable global-require */
/* eslint-disable no-undef */
describe('Account', () => {
  const Account = require('../lib/Account');
  const Transaction = require('../lib/Transaction');
  const TransactionList = require('../lib/TransactionList');
  let account;

  beforeEach(() => {
    transactionList = new TransactionList();
    account = new Account(transactionList);
  });

  it('has zero balance by default', () => {
    expect(account.getBalance()).toEqual(0);
  });

  it('can make a deposit of 1', () => {
    account.update(new Transaction('deposit', 1));
    expect(account.getBalance()).toEqual(1);
  });

  it('can make a withdrawal of 1', () => {
    account.update(new Transaction('deposit', 1));
    account.update(new Transaction('withdraw', 1));
    expect(account.getBalance()).toEqual(0);
  });
});
