const letter = 'bici  coche balón _playstation bici coche bici  peluche';

export default function listGifs(letter = '') {
  const gifsColeccion = letter.toLocaleLowerCase().split(' ');
  const isPendingAndExists = item => item !== '' && !item.startsWith('_');
  const gifsPending = gifsColeccion.filter(isPendingAndExists);
  let gifsObject = {};
  gifsPending.forEach(item => {
    if (!gifsObject.hasOwnProperty(item)) {
      gifsObject[`${item}`] = 1;
    } else {
      gifsObject[`${item}`] += 1;
    }
  });
  return gifsObject;
}

console.log(listGifs(letter))
