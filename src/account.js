class Account {
  constructor() {
    this.transactions = []
  }
  makeTransaction(ammount) {
    this.#updateBalance();
    this.#saveTransaction();
  }
  getTransactions() {
    return this.transactions;
  }
  #updateBalance() {

  }
  #saveTransaction() {

  }
}

module.exports = Account;