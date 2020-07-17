const Statement = require('../statement.js')

describe('Statement', function () {
  let statement

  test('should have a header in the constructor', function () {
    statement = new Statement();

    expect(statement.statementList).toEqual(['date || credit || debit || balance']);
  });

  test('should be responsible for formatting date correctly', function () {
    statement = new Statement();
    const date = () => new Date(Date.now());
    jest
      .spyOn(global.Date, 'now')
      .mockImplementationOnce(() =>
        new Date('2020-07-16T11:01:58.135Z').valueOf()
      );

    expect(statement.formatDate(date())).toEqual('16/07/2020')
  });

  test('should return a printed statement', function () {
    statement = new Statement();
    const transactions = [
      ['16/07/2020', '50.00', '', '50.00'],
      ['16/07/2020', '', '25.00', '25.00']
    ]

    expect(statement.print(transactions)).toEqual('')
  });
});