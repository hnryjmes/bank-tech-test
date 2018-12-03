class Account {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(amount);
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

module.exports = Account;
