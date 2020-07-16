class AccountActivity {
  constructor() {
    this.transactionList = []
  };

  addTransaction = function (date, credit, debit, balance) {
    this.transactionList.push([date, credit, debit, balance])
  };
};
module.exports = AccountActivity