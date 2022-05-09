const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const names = data.spedies.filter((value) => value.name === animal);
  const Idade = names[0].residents.every((value) => value.age >= age);
  return Idade;
}

module.exports = getAnimalsOlderThan;
