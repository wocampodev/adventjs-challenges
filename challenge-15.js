function checkSledJump(heights = []) {

  const result = { finalHeight: heights[0], indexFinalHeight: 0, isValid: true };
  heights.forEach((value, index) => {
    if (value > result.finalHeight) {
      result.finalHeight = value;
      result.indexFinalHeight = index;
    }
  });

  const firstHeights = heights.slice(0, result.indexFinalHeight);
  const firstHeightsEvaluated = [];
  firstHeights.forEach((value, index, originalArray) => {
    if (index && firstHeightsEvaluated.includes(value)) {
      result.isValid = false;
    }
    if (!(value < (originalArray[index + 1] || result.finalHeight))) {
      result.isValid = false;
    }
    firstHeightsEvaluated.push(value);
  });

  const lastHeights = heights.slice(result.indexFinalHeight + 1, heights.length);
  if (!lastHeights.length) {
    result.isValid = false;
  } else {
    const lastHeightsEvaluated = [];
    lastHeights.forEach(value => {
      if (value >= result.finalHeight || lastHeightsEvaluated.includes(value)) {
        result.isValid = false;
      }
      lastHeightsEvaluated.push(value);
    });
  }

  return result.isValid;

}

console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
