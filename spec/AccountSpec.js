/* eslint-disable global-require */
/* eslint-disable no-undef */
describe('Account', () => {
  const Account = require('../lib/Account');
  const Transaction = require('../lib/Transaction');
  let account;

  beforeEach(() => {
    account = new Account();
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

  it('stores a transaction history', () => {
    account.update(new Transaction('deposit', 1));
    expect(account.transactions.length).toEqual(1);
  });
});
