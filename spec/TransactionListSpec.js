/* eslint-disable global-require */
/* eslint-disable no-undef */
describe('TransactionList', () => {
  const TransactionList = require('../lib/TransactionList');
  const Transaction = require('../lib/Transaction');

  it('stores a list of transactions', () => {
    const transactionList = new TransactionList();
    transactionList.append(new Transaction('deposit', 1));
    expect(transactionList.getTransactions().length).toEqual(1);
  });
});
