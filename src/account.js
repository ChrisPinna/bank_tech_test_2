class Account {
  makeTransaction() {
    this.#updateBalance()
  }
  getTransactions() {
    return [];
  }
  #updateBalance() {

  }
}

module.exports = Account;