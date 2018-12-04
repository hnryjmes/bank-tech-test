describe('TransactionList', () => {
  const TransactionList = require('../../lib/TransactionList');
  let transactionList;
  let transaction;

  beforeEach(() => {
    transactionList = new TransactionList();
    transaction = jasmine.createSpyObj('transaction', {
      getReadableDate: '25/12/2018',
      getReadableAmount: '1.00'
    });
  });

  it('stores a list of transactions', () => {
    transactionList.append(transaction);

    expect(transactionList.getTransactions().length).toEqual(1);
  });

  it('returns an empty statement when there are no transactions', () => {
    let statementHeader = transactionList.HEADINGS.join(transactionList.JOINER);
    
    expect(transactionList.getStatement()).toEqual(statementHeader);
  });

  it('returns a statement with one transaction', () => {
    transactionList.append(transaction);
    let statementHeader = transactionList.HEADINGS.join(transactionList.JOINER);
    transaction = transactionList.getTransactions()[0];
    let firstStatementItem = [transaction.getReadableDate(), transaction.getReadableAmount()].join(transactionList.JOINER);
    let statement = [statementHeader, firstStatementItem].join('\n');

    expect(transactionList.getStatement()).toEqual(statement);
  });
  //TODO: Make statement same as acceptance criteria!
  it('returns a statement with multiple historical transations', () => {
    let firstTransaction = jasmine.createSpyObj('firstTransaction', {
      getReadableDate: '10/01/2012',
      getReadableAmount: '1000.00'
    });
    transactionList.append(firstTransaction);

    let secondTransaction = jasmine.createSpyObj('secondTransaction', {
      getReadableDate: '13/01/2012',
      getReadableAmount: '2000.00'
    });
    transactionList.append(secondTransaction);

    let thirdTransaction = jasmine.createSpyObj('thirdTransaction', {
      getReadableDate: '14/01/2012',
      getReadableAmount: '500.00'
    });
    transactionList.append(thirdTransaction);

    let statementHeader = transactionList.HEADINGS.join(transactionList.JOINER);
    let firstStatementItem = [firstTransaction.getReadableDate(), firstTransaction.getReadableAmount()].join(transactionList.JOINER);
    let secondStatementItem = [secondTransaction.getReadableDate(), secondTransaction.getReadableAmount()].join(transactionList.JOINER);
    let thirdStatementItem = [thirdTransaction.getReadableDate(), thirdTransaction.getReadableAmount()].join(transactionList.JOINER);
    let statement = [statementHeader, firstStatementItem, secondStatementItem, thirdStatementItem].join('\n');

    expect(transactionList.getStatement()).toEqual(statement);
  });
});
