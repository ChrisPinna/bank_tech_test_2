const BankInterface = require('../../src/bankInterface')

describe('Bank Program', () => {
 test('it should be able to make a deposit and get a bank statement with transaction in it', () => {
  const bankInterface = new BankInterface;
  bankInterface.deposit(1000);
  expect(bankInterface.printBankStatement()).toBe('date || credit || debit || balance\n26/04/2022 || 500.00 || || 1000.00');
 });
});