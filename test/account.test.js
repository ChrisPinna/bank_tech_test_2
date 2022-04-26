const Account = require('../src/account')

describe('makeTransaction method', () => {
  test('makeTransaction method should not throw error', () => {  
    const account = new Account;
    expect( () => { account.makeTransaction() }).not.toThrow()
  });
});
describe('getTransaction method', () => {
  test('getTransaction method should return the transactions', () => {  
    const account = new Account;
    expect(account.getTransactions()).toEqual([])
  });
});