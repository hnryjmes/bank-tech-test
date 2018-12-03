class TransactionList {
  constructor() {
    this.transactions = [];
    this.HEADINGS = ['date', 'credit', 'debit', 'balance'];
  }

  getStatement() {
    let statement = this.HEADINGS.join(' || ');
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
