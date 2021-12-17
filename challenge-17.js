function countPackages(carriers = [], carrierID = '') {

  let accumulated = 0;

  const [, packages, subordinates] = carriers.find(carrier => carrier[0] === carrierID);
  accumulated += packages;

  if (subordinates.length) {
    subordinates.forEach(value => {
      accumulated += countPackages(carriers, value);
    })
  }

  return accumulated;

}

const ejemplo = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

console.log(countPackages(ejemplo, 'dapelu')) // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const ejemplo2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

console.log(countPackages(ejemplo2, 'camila')) // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
