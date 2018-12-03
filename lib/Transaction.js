class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
    this.date = new Date();
  }

  getReadableDate() {
    return this.date.toLocaleDateString();
  }
}

module.exports = Transaction;
