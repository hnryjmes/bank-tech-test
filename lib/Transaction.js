class Transaction {
  constructor(type, amount, date = new Date()) {
    this.type = type;
    this.amount = amount;
    this.date = date;
  }

  getReadableDate() {
    return this.date.toLocaleDateString();
  }
}

module.exports = Transaction;
