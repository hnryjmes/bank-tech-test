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
    transactionList.append(new Transaction('deposit', 1));
    let statementHeader = transactionList.HEADINGS.join(transactionList.JOINER);
    let transaction = transactionList.getTransactions()[0];
    let firstStatementItem = [transaction.getReadableDate(), transaction.getReadableAmount()].join(transactionList.JOINER);
    let statement = [statementHeader, firstStatementItem].join('\n');

    expect(transactionList.getStatement()).toEqual(statement);
  });
  //TODO: Make statement same as acceptance criteria!
  it('returns a statement with multiple historical transations', () => {
    let firstTransaction = new Transaction('deposit', 1000);
    firstTransaction.date = new Date('2012-01-10');
    transactionList.append(firstTransaction);

    let secondTransaction = new Transaction('deposit', 2000);
    secondTransaction.date = new Date('2012-01-13');
    transactionList.append(secondTransaction);

    let thirdTransaction = new Transaction('withdraw', 500);
    thirdTransaction.date = new Date('2012-01-14');
    transactionList.append(thirdTransaction);

    let statementHeader = transactionList.HEADINGS.join(transactionList.JOINER);
    let firstStatementItem = [firstTransaction.getReadableDate(), firstTransaction.getReadableAmount()].join(transactionList.JOINER);
    let secondStatementItem = [secondTransaction.getReadableDate(), secondTransaction.getReadableAmount()].join(transactionList.JOINER);
    let thirdStatementItem = [thirdTransaction.getReadableDate(), thirdTransaction.getReadableAmount()].join(transactionList.JOINER);
    let statement = [statementHeader, firstStatementItem, secondStatementItem, thirdStatementItem].join('\n');

    expect(transactionList.getStatement()).toEqual(statement);
  });
});
