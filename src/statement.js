class Statement {
  constructor () {
    this.statementList = ['date || credit || debit || balance']
  };

  print = function(transactions) {
    transactions.forEach( item => {
      this.statementList.push(item.toString())
    });
    this.statementList.forEach( item => {
      console.log(item)
    });
  };

  formatDate = function (date) {
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString();
    return `${day}/${month}/${year}`
  };
};
module.exports = Statement;