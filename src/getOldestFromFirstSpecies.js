const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const colaboradores = data.employees.find((employee) => employee.id === id);
  const especie = data.species.find((specie) => specie.id === colaboradores.responsibleFor[0]);
  const validaIdade = especie.residents.map((object) =>
    object.age).sort((age1, age2) => (age2 - age1))[0];
  const animalMaisVelho = Object.values(especie.residents.find((animal) => animal.age === validaIdade));
  return animalMaisVelho;
}

module.exports = getOldestFromFirstSpecies;
