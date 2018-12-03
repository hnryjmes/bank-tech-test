/* eslint-disable global-require */
/* eslint-disable no-undef */
describe('Transaction', () => {
  const Transaction = require('../lib/Transaction');

  it('stores a transaction with today\'s date by default', () => {
    const transaction = new Transaction('deposit', 1);
    const today = new Date();

    expect(transaction.getReadableDate()).toEqual(today.toLocaleDateString());
  });

  it('stores a transaction with a custom date', () => {
    const myDate = new Date('2018-12-02');
    const transaction = new Transaction('deposit', 1, myDate);
    
    expect(transaction.getReadableDate()).toEqual(myDate.toLocaleDateString());
  });
});
