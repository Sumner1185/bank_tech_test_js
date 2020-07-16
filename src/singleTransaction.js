class SingleTransaction {
  constructor(credit, debit, balance) {
    this.date = new Date();
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  };

  getDate = function() {
    return this.date
  };
};
module.exports = SingleTransaction;