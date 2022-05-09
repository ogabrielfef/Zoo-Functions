const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((value) => value.managers.includes(id));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const manager = data.employees.filter((value) => value.managers.includes(managerId));
    const imprimeNomes = manager.map((value) => `${value.firstName} ${value.lastName}`);
    return imprimeNomes;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
