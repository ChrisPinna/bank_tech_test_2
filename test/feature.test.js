const BankInterface = require('../src/bankInterface')

describe('Bank Program', () => {
 test('it should be able to make a deposit of 1000 and get a bank statement with transaction in it', () => {
  const bankInterface = new BankInterface;
  bankInterface.deposit(1000);
  expect(bankInterface.printBankStatement())
  .toBe('date || credit || debit || balance\n26/04/2022 || 1000.00 || || 1000.00');
 });
 test('it should be able to make a deposit of 500 and get a bank statement with transaction in it', () => {
  const bankInterface = new BankInterface;
  bankInterface.deposit(500);
  expect(bankInterface.printBankStatement())
  .toBe('date || credit || debit || balance\n26/04/2022 || 500.00 || || 500.00');
 });
});