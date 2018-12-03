/* eslint-disable no-underscore-dangle */
class Account {
  constructor(transactionList) {
    this.transactionList = transactionList;
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  update(transaction) {
    switch (transaction.type) {
      case 'deposit':
        this._deposit(transaction.amount);
        break;
      case 'withdraw':
        this._withdraw(transaction.amount);
        break;
      default:
    }
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
