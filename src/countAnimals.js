const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const spec = species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
    return spec;
  }
  const speciesFind = species.find(((value) => animal.specie.includes(value.name)));
  const speciesSexFilter = speciesFind.residents.filter((value) => animal.sex === value.sex);
  if (!animal.sex) {
    return speciesFind.residents.length;
  }
  return speciesSexFilter.length;
}

module.exports = countAnimals;
