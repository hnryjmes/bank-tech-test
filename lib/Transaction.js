class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
    this.date = new Date();
  }

  getReadableAmount() {
    return this.amount.toFixed(2);
  }

  getReadableDate() {
    return this.date.toLocaleDateString();
  }

  getType() {
    return this.type;
  }

  getAmount() {
    return this.amount;
  }
}

module.exports = Transaction;
