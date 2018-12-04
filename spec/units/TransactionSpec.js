describe('Transaction', () => {
  const Transaction = require('../../lib/Transaction');

  it('stores a transaction with today\'s date by default', () => {
    const today = new Date();
    const transaction = new Transaction('deposit', 1);

    expect(transaction.getReadableDate(transaction.date)).toEqual(transaction.getReadableDate(today));
  });
});
