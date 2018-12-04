describe('TransactionList', () => {
  const TransactionList = require('../../lib/TransactionList');
  let transactionList;
  let transaction;

  beforeEach(() => {
    transactionList = new TransactionList();
    transaction = jasmine.createSpyObj('transaction', {
      getReadableDate: '25/12/2018',
      getReadableCredit: '1.00',
      getReadableDebit: '',
      getHistoricalBalance: 1
    });
  });

  it('stores a list of transactions', () => {
    transactionList.append(transaction);

    expect(transactionList.getTransactions().length).toEqual(1);
  });

  it('returns an empty statement when there are no transactions', () => {
    let statementHeader = transactionList.makeHeader();
    
    expect(transactionList.getStatement()).toEqual(statementHeader);
  });

  it('returns a statement with one transaction', () => {
    transactionList.append(transaction);
    let statementHeader = transactionList.makeHeader();
    transaction = transactionList.getTransactions()[0];
    let statementItem = transactionList.makeStatementItem(transaction);
    let statement = [statementHeader, statementItem].join('\n');

    expect(transactionList.getStatement()).toEqual(statement);
  });
  //TODO: Make statement same as acceptance criteria!
  it('returns a statement with multiple historical transactions', () => {
    let firstTransaction = jasmine.createSpyObj('firstTransaction', {
      getReadableDate: '10/01/2012',
      getReadableCredit: '1000.00',
      getReadableDebit: '',
      getHistoricalBalance: 1000
    });
    transactionList.append(firstTransaction);

    let secondTransaction = jasmine.createSpyObj('secondTransaction', {
      getReadableDate: '13/01/2012',
      getReadableCredit: '2000.00',
      getReadableDebit: '',
      getHistoricalBalance: 3000
    });
    transactionList.append(secondTransaction);

    let thirdTransaction = jasmine.createSpyObj('thirdTransaction', {
      getReadableDate: '14/01/2012',
      getReadableCredit: '',
      getReadableDebit: '500.00',
      getHistoricalBalance: 2500    
    });
    transactionList.append(thirdTransaction);

    let statementHeader = transactionList.makeHeader();
    let firstStatementItem = transactionList.makeStatementItem(firstTransaction);
    let secondStatementItem = transactionList.makeStatementItem(secondTransaction);
    let thirdStatementItem = transactionList.makeStatementItem(thirdTransaction);
    let statement = [statementHeader, thirdStatementItem, secondStatementItem, firstStatementItem].join('\n');

    expect(transactionList.getStatement()).toEqual(statement);
  });
});
