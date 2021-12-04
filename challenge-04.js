export default function createXmasTree(height) {

  if (!(height >= 1 && height <= 100)) return;

  const asteriskForRows = [];
  for (let index = 0; index < height; index++) {
    asteriskForRows[index] = !index ? 1 : (asteriskForRows[index - 1] + 2);
  }

  function generateXmasString({ quantitySide = 0, quantityCenter = 1, wordCenter = '#', lineBreak = true }) {
    const stringOutput = `${'_'.repeat(quantitySide)}${wordCenter.repeat(quantityCenter)}${'_'.repeat(quantitySide)}`;
    return lineBreak ? stringOutput.concat('\n') : stringOutput;
  }

  const treeLength = asteriskForRows[asteriskForRows.length - 1];
  let stringAbove = '';

  asteriskForRows.forEach(quantityCenter => {
    let quantitySide = (treeLength - quantityCenter) / 2;
    stringAbove += generateXmasString({ quantitySide, quantityCenter, wordCenter: '*' });
  });

  let quantitySide = (treeLength - 1) / 2;
  let stringBelow = generateXmasString({ quantitySide });
  stringBelow += generateXmasString({ quantitySide, lineBreak: false });

  const treeString = stringAbove.concat(stringBelow);
  return treeString;

}

console.log(createXmasTree(9))
