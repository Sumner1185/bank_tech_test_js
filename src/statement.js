class Statement {
  constructor () {
    this.header = 'date || credit || debit || balance'
  };

  formatDate = function (date) {
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString();
    return `${day}/${month}/${year}`
  };
};
module.exports = Statement;