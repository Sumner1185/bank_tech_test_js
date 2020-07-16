const Activity = require('../accountActivity.js')

describe('AccountActivity', function () {
  let activity

  test('should instantiate with an empty array', function () {
    activity = new Activity();

    expect(activity.transactionList.length).toEqual(0);
  });

  test('should add a credit transaction to the array', function () {
    activity = new Activity();
    activity.addTransaction('16/07/2020', '100.00', '', '100.00');

    expect(activity.transactionList.length).toEqual(1);
    expect(activity.transactionList[0]).toEqual(['16/07/2020', '100.00', '', '100.00']);
  });

  test('should add a debit transaction to the array', function () {
    activity = new Activity();
    activity.addTransaction('17/07/2020', '', '50.00', '50.00');

    expect(activity.transactionList.length).toEqual(1);
    expect(activity.transactionList[0]).toEqual(['17/07/2020', '', '50.00', '50.00']);
  });
});