describe('TransactionList', () => {
  const TransactionList = require('../lib/TransactionList');
  const Transaction = require('../lib/Transaction');
  let transactionList;

  beforeEach(() => {
    transactionList = new TransactionList();
  });

  it('stores a list of transactions', () => {
    transactionList.append(new Transaction('deposit', 1, new Date()));

    expect(transactionList.getTransactions().length).toEqual(1);
  });

  it('returns an empty statement when there are no transactions', () => {
    let statementHeader = transactionList.HEADINGS.join(transactionList.JOINER);
    
    expect(transactionList.getStatement()).toEqual(statementHeader);
  });

  it('returns a statement with one transaction', () => {
    transactionList.append(new Transaction('deposit', 1, new Date()));
    let statementHeader = transactionList.HEADINGS.join(transactionList.JOINER);
    let transaction = transactionList.getTransactions()[0];
    let firstStatementItem = [transaction.getReadableDate(), 1].join(transactionList.JOINER);
    let statement = [statementHeader, firstStatementItem].join('\n');

    expect(transactionList.getStatement()).toEqual(statement);
  });
});
