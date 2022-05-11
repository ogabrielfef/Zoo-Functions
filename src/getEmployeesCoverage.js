const data = require('../data/zoo_data');

function getEmployerDatas(employe) {
  const responsavel = data.species
    .filter((resident) => employe.responsibleFor.includes(resident.id))
    .map((re) => re.name);
  const responsavelLo = data.species
    .filter((resident) => employe.responsibleFor.includes(resident.id))
    .map((re) => re.location);
  return {
    id: employe.id,
    fullName: `${employe.firstName} ${employe.lastName}`,
    species: responsavel,
    locations: responsavelLo,
  };
}

function getEmployeesCoverage(id) {
  if (id) {
    const encarregado = data.employees.find(
      (val) => val.firstName === id.name || val.lastName === id.name || val.id === id.id,
    );
    if (encarregado) { return getEmployerDatas(encarregado); }
    throw new Error('Informações inválidas');
  }
  return data.employees.map((encarregado) => getEmployerDatas(encarregado));
}

module.exports = getEmployeesCoverage;
