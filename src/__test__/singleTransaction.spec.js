const SingleTransaction = require('../singleTransaction.js')

describe('SingleTransaction', function () {
  let transaction

  beforeEach(function () {
    transaction = new SingleTransaction('16/07/2020', '100.00', '50.00', '500.00');
  });

  test('should store a date when transaction is made', function () {
    expect(transaction.date).toEqual('16/07/2020')
  });

  test('should store a credit amount when transaction is made', function () {
    expect(transaction.credit).toEqual('100.00');
  });

  test('should store a debit amount when transaction is made', function () {
    expect(transaction.debit).toEqual('50.00');
  });

  test('should store the resulting balance when transaction is made', function () {
    expect(transaction.balance).toEqual('500.00');
  });
});