/* eslint-disable global-require */
/* eslint-disable no-undef */
describe('Account', () => {
  const Account = require('../lib/Account');

  it('can create an account', () => {
    const account = new Account();
    expect(account instanceof Account).toBe(true);
  });
});
