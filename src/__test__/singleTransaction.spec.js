const SingleTransaction = require('../singleTransaction.js')
var MockDate = require('mockdate');

describe('SingleTransaction', function () {
  let transaction

  beforeEach(function () {
    MockDate.set('07/15/2020');
    transaction = new SingleTransaction('100.00', '50.00', '500.00');
  });

  test('should store a date when transaction is made', function () {
    expect(transaction.getDate()).toEqual(new Date());
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