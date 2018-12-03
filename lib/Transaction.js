class Transaction {
  constructor(type, amount, date) {
    this.type = type;
    this.amount = amount;
    this.date = date;
  }

  getReadableDate() {
    return this.date.toLocaleDateString();
  }
}

module.exports = Transaction;
