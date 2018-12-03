/* eslint-disable global-require */
/* eslint-disable no-undef */
describe('Account', () => {
  const Account = require('../lib/Account');
  let account;

  beforeEach(() => {
    account = new Account();
  });

  it('has zero balance by default', () => {
    expect(account.balance).toEqual(0);
  });

  it('can make a deposit of 1', () => {
    account.deposit(1);
    expect(account.balance).toEqual(1);
  });

  it('can make a withdrawal of 1', () => {
    account.deposit(1);
    account.withdraw(1);
    expect(account.balance).toEqual(0);
  });

  it('stores a transaction history', () => {
    account.deposit(1);
    expect(account.transactions.length).toEqual(1);
  });
});
