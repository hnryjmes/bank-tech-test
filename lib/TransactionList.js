class TransactionList {
  constructor() {
    this.transactions = [];
    this.HEADINGS = ['date', 'credit', 'debit', 'balance'];
    this.JOINER = ' || ';
  }

  getStatement() {
    let statement = this.HEADINGS.join(this.JOINER);
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
