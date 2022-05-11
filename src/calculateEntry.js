const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const totalEntrants = entrants.reduce((acc, entrant) => {
    if (entrant.age < 18) {
      acc.child += 1;
      return acc;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      acc.adult += 1;
      return acc;
    }
    if (entrant.age >= 50) {
      acc.senior += 1;
      return acc;
    }
    return acc;
  }, { adult: 0, child: 0, senior: 0 });
  return totalEntrants;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (!entrants.length) return 0;
  const pessosEntraram = countEntrants(entrants);
  const preçoTotal = (pessosEntraram.adult * prices.adult)
  + (pessosEntraram.child * prices.child)
  + (pessosEntraram.senior * prices.senior);
  return preçoTotal;
}

module.exports = { calculateEntry, countEntrants };
