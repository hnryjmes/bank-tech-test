class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
    this.date = new Date();
  }

  getHistoricalBalance() {
    return this.historicalBalance;
  }

  setHistoricalBalance(balance) {
    this.historicalBalance = balance;
  }

  getReadableCredit() {
    if (this.type == 'deposit') {
      return this.amount.toFixed(2);
    }
  }

  getReadableDebit() {
    if (this.type == 'withdraw') {
      return this.amount.toFixed(2);
    }
  }

  getReadableDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (month < 10) {
      month = '0' + month;
    }
    return `${day}/${month}/${year}`;
  }

  getType() {
    return this.type;
  }

  getAmount() {
    return this.amount;
  }
}

module.exports = Transaction;
