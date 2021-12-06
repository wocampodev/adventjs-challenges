/* TODO: Research some search algorithm to optimize */

export default function sumPairs(numbers, result) {
  let arrayResult = [];
  let flagContinue = false;
  numbers.forEach((value, index, originalArray) => {
    if (flagContinue) return;
    let actualNumber = value;
    let firstElements = originalArray.slice(0, index);
    let lastElements = originalArray.slice(index + 1);
    let restNumbers = firstElements.concat(lastElements);
    restNumbers.forEach((value, index, originalArray) => {
      if (flagContinue) return;
      if ((actualNumber + value) === result) {
        arrayResult = [actualNumber, originalArray[index]];
        flagContinue = true;
      }
    });
  });
  return arrayResult.length ? arrayResult : null;
}

// sumPairs([3, 5, 7, 2], 10) // [3, 7]
// sumPairs([-3, -2, 7, -5], 10) // null
// sumPairs([2, 2, 3, 1], 4) // [2, 2]
// sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
