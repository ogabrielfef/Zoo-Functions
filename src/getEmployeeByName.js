const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const objEmploy = data.employees.find((value) => value.firstName === employeeName.firstName
  || value.lastName === employeeName);
  return objEmploy;
}

module.exports = getEmployeeByName;
