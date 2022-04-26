class Account {
  constructor() {
    this.transactions = []
  }
  makeTransaction() {
    this.#updateBalance()
  }
  getTransactions() {
    return this.transactions;
  }
  #updateBalance() {

  }
}

module.exports = Account;