export default function daysToXmas(date) {
  const dateXmas = new Date('Dec 25, 2021');
  const timeBetweenInMs = dateXmas.getTime() - date.getTime();
  const factorMsToDay = 1000 * 60 * 60 * 24;
  return Math.ceil(timeBetweenInMs / factorMsToDay);
}

const dateToTest = new Date('Dec 31, 2021')
daysToXmas(dateToTest) // -6
