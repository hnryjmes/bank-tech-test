class TransactionList {
  constructor() {
    this.transactions = [];
    this.HEADINGS = ['date', 'credit', 'debit', 'balance'];
    this.JOINER = ' || ';
  }

  makeStatementItem(transaction) {
    let statementItem = [transaction.getReadableDate(transaction.date), transaction.getReadableCredit(), transaction.getReadableDebit(), transaction.getHistoricalBalance().toFixed(2)].join(this.JOINER);
    return statementItem.replace(/\s\s/, ' ');
  }

  makeHeader() {
    return this.HEADINGS.join(this.JOINER);
  }

  getStatement() {
    let statement = this.makeHeader();
    this.transactions.reverse().forEach((transaction) => {
      statement += '\n';
      statement += this.makeStatementItem(transaction);
    });
    return statement;
  }

  getTransactions() {
    return this.transactions;
  }

  append(transaction) {
    this.transactions.push(transaction);
  }
}

module.exports = TransactionList;
