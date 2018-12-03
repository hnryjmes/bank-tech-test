class TransactionList {
  constructor() {
    this.transactions = [];
  }

  getTransactions() {
    return this.transactions;
  }

  append(transaction) {
    this.transactions.push(transaction);
  }
}

module.exports = TransactionList;
