function fixFiles(files = []) {
  const objectRecord = {};
  const finalArray = [];
  files.forEach(value => {
    if (!Object.getOwnPropertyNames(objectRecord).includes(value)) {
      objectRecord[value] = 0;
      finalArray.push(value);
    } else {
      objectRecord[value] += 1;
      finalArray.push(`${value}(${objectRecord[value]})`);
    }
  });
  return finalArray;
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
