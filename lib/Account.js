/* eslint-disable no-underscore-dangle */
class Account {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactions = [];
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
    this.transactions.push(transaction);
  }

  _deposit(amount) {
    this.balance += amount;
  }

  _withdraw(amount) {
    this.balance -= amount;
  }
}

module.exports = Account;
