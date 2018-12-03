/* eslint-disable global-require */
/* eslint-disable no-undef */
describe('TransactionList', () => {
  const TransactionList = require('../lib/TransactionList');
  const Transaction = require('../lib/Transaction');
  let transactionList;

  beforeEach(() => {
    transactionList = new TransactionList();
  });

  it('stores a list of transactions', () => {
    transactionList.append(new Transaction('deposit', 1));

    expect(transactionList.getTransactions().length).toEqual(1);
  });

  it('returns an empty statement when there are no transactions', () => {
    expect(transactionList.getStatement()).toEqual(transactionList.HEADINGS.join(' || '));
  });
});
