const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const objEmployee = data.employees.find((value) => value.firstName === employeeName
  || value.lastName === employeeName);
  return objEmployee;
}

module.exports = getEmployeeByName;
