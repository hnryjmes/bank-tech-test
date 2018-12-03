describe('Account', () => {
  let Account = require('../lib/Account');

  it('can create an account', () => {
    let account = new Account();
    expect(account instanceof Account).toBe(true);
  });
});