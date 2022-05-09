const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const entries = entrants.reduce((acc, entrant) => {
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
    return null;
  }, { adult: 0, child: 0, senior: 0 });
  return entries;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (!entrants.length) return 0;
  return entrants.adult * prices.adult + entrants.child * prices.child
   + entrants.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
