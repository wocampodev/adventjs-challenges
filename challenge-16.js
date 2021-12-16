export default function decodeNumbers(symbols = '') {
  const symbolsValues = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 };
  let totalValue = 0;
  const arrayValues = Array.from(symbols).map(character => symbolsValues[character]);
  arrayValues.forEach((value, index, originalArray) => {
    if (value < originalArray[index + 1]) {
      totalValue += -value;
    } else {
      totalValue += value;
    }
  })
  return totalValue;
}

decodeNumbers('...'); // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
