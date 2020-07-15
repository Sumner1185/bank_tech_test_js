const BankAccount = require('../bankAccount.js')

describe('BankAccount', function () {
  let account

  test('starts with balance of 0', function () {
    account = new BankAccount;
    expect(account.balance).toEqual(0);
  });
});