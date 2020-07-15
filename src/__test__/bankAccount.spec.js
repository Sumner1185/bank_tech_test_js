const BankAccount = require('../bankAccount.js')

describe('BankAccount', function () {
  let account

  beforeEach(() => {
    account = new BankAccount();
  });

  test('starts with balance of 0', function () {
    expect(account.balance).toEqual(0);
  });

  test('allows user to deposit to their account', function () {
    account.deposit(50);
    expect(account.balance).toEqual(50);
  });

  test('allows user to withdraw from their account', function () {
    account.deposit(100);
    account.withdraw(50);
    expect(account.balance).toEqual(50);
  });
});