describe('Acceptance criteria feature test with literal expectation', () => {
  const Transaction = require('../../lib/Transaction');
  const TransactionList = require('../../lib/TransactionList');
  const Account = require('../../lib/Account');

  let firstTransaction;
  let secondTransaction;
  let thirdTransaction;
  let account;

  beforeEach(() => {
    // directly change date to historical date for testing purposes only
    firstTransaction = new Transaction('deposit', 1000);
    firstTransaction.date = new Date('2012-01-10');
    secondTransaction = new Transaction('deposit', 2000);
    secondTransaction.date = new Date('2012-01-13');
    thirdTransaction = new Transaction('withdraw', 500);
    thirdTransaction.date = new Date('2012-01-14');
    account = new Account(new TransactionList()); 
  });

  it('user can see bank statement with multiple historical deposits', () => {
    account.update(firstTransaction);
    account.update(secondTransaction);
    account.update(thirdTransaction);

    expect(account.transactionList.getStatement()).toEqual(
      'date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00'
    );
  });
});

