describe('Account', () => {
  const Account = require('../../lib/Account');
  let account;
  let transactionList;
  let depositTransaction;
  let withdrawTransaction;

  beforeEach(() => {
    depositTransaction = jasmine.createSpyObj('depositTransaction', {
      getType: 'deposit',
      getAmount: 1
    });
    withdrawTransaction = jasmine.createSpyObj('withdrawTransaction', {
      getType: 'withdraw',
      getAmount: 1
    });
    transactionList = jasmine.createSpyObj('transactionList', ['append']);
    account = new Account(transactionList);
  });

  it('has zero balance by default', () => {
    expect(account.getBalance()).toEqual(0);
  });

  it('can make a deposit of 1', () => {
    account.update(depositTransaction);

    expect(account.getBalance()).toEqual(1);
  });

  it('can make a withdrawal of 1', () => {
    account.update(depositTransaction);
    account.update(withdrawTransaction);
    
    expect(account.getBalance()).toEqual(0);
  });
});
