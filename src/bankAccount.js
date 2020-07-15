class BankAccount {
  constructor() {
    this.balance = 0
  }

  deposit = function (amount) {
    this.balance += amount
  };

  withdraw = function (amount) {
    this.balance -= amount
  };

};
module.exports = BankAccount