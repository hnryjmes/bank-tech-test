/* eslint-disable global-require */
/* eslint-disable no-undef */
describe('Transaction', () => {
  const Transaction = require('../lib/Transaction');

  it('stores a transaction with today\'s date by default', () => {
    const transaction = new Transaction('deposit', 1);
    const today = new Date().toLocaleDateString();
    expect(transaction.getDate()).toEqual(today);
  });
});
