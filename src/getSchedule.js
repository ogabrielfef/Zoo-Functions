const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

function disp(day) {
  if (day === 'Monday') return 'The zoo will be closed!';
  const animais = species.filter((animal) =>
    animal.availability.includes(day)).map((animal) => animal.name);
  return animais;
}

function opened(day, schedule) {
  if (day === 'Monday') return 'CLOSED';
  return `Open from ${schedule.open}am until ${schedule.close}pm`;
}

function getSchedule(scheduleTarget) {
  const dispDay = species.find((especie) => scheduleTarget === especie.name);
  if (dispDay) return dispDay.availability;
  const schedule = {};
  Object.entries(hours).filter(([day, value]) =>
    !scheduleTarget || !Object.keys(hours).includes(scheduleTarget) || scheduleTarget === day)
    .forEach(([day, value]) => {
      schedule[day] = {
        officeHour: opened(day, value),
        exhibition: disp(day),
      };
    });
  return schedule;
}

// console.log(getSchedule('lions'));
module.exports = getSchedule;
