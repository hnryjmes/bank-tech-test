class TransactionList {
  constructor() {
    this.transactions = [];
    this.HEADINGS = ['date', 'credit', 'debit', 'balance'];
    this.JOINER = ' || ';
  }

  getStatement() {
    let statement = this.HEADINGS.join(this.JOINER);
    this.transactions.forEach((transaction) => {
      statement += '\n';
      statement += [transaction.getReadableDate(), transaction.amount].join(this.JOINER);
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
