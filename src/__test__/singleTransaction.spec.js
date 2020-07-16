const SingleTransaction = require('../singleTransaction.js')

describe('SingleTransaction', function () {
  let transaction

  test('should store a date when transaction is made', function () {
    transaction = new SingleTransaction('16/07/2020');
    expect(transaction.date).toEqual('16/07/2020')
  });

  test('should store a credit amount when transaction is made', function () {
    transaction = new SingleTransaction('date', '100.00');
    expect(transaction.credit).toEqual('100.00');
  });

  test('should store a debit amount when transaction is made', function () {
    transaction = new SingleTransaction('date', '', '50.00');
    expect(transaction.debit).toEqual('50.00');
  });

  test('should store the resulting balance when transaction is made', function () {
    transaction = new SingleTransaction('date', '', '50.00', '500.00');
    expect(transaction.balance).toEqual('500.00');
  });
});