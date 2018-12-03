/* eslint-disable global-require */
/* eslint-disable no-undef */
describe('Account', () => {
  const Account = require('../lib/Account');

  it('has zero balance by default', () => {
    const account = new Account();
    expect(account.balance).toEqual(0);
  });

  it('can make a deposit of 1', () => {
    const account = new Account();
    account.deposit(1);
    expect(account.balance).toEqual(1);
  });
});
