class Account {
  constructor(transactionList) {
    this.transactionList = transactionList;
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  update(transaction) {
    switch (transaction.getType()) {
      case 'deposit':
        this._deposit(transaction.getAmount());
        break;
      case 'withdraw':
        this._withdraw(transaction.getAmount());
        break;
      default:
    }
    transaction.setHistoricalBalance(this.getBalance());
    this.transactionList.append(transaction);
  }

  _deposit(amount) {
    this.balance += amount;
  }

  _withdraw(amount) {
    this.balance -= amount;
  }
}

module.exports = Account;
