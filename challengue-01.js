const sheeps = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }
];

export default function countSheeps(initialSheeps = []) {

  const isRedColor = ({ color }) => color.toLowerCase() === 'rojo';
  const redSheeps = initialSheeps.filter(isRedColor);

  const hasSomeLetters = ({ name }) => {
    const nameToEvaluate = name.toLowerCase().trim();
    return nameToEvaluate.includes('n') && nameToEvaluate.includes('a');
  };
  const filteredSheeps = redSheeps.filter(hasSomeLetters);

  return filteredSheeps;
}

console.log(countSheeps(sheeps));
