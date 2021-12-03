"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌

// "(()) bici"
// let letter = 'peluche (bici [coche)'
let letter = '(a) (b) (c)';

function isValid(letter = '') {

  const grinchRegex = /[[\]{}()]/;
  if (!grinchRegex.test(letter)) return true;

  const firstParenthesisIndex = letter.indexOf('(');
  const lastParenthesisIndex = letter.lastIndexOf(')');
  if (firstParenthesisIndex === -1 || lastParenthesisIndex === -1) return false;

  const textModified = letter.slice(firstParenthesisIndex, lastParenthesisIndex + 1);
  if (textModified.length === 2) return false;

  const arrayGifts = textModified.split(' ');
  let flagResult = true;

  if (arrayGifts.length === 1) {
    const uniqueGift = arrayGifts[0];
    let textGiftClear = uniqueGift.substring(1, uniqueGift.length - 1);
    if (grinchRegex.test(textGiftClear)) {
      flagResult = false;
    }
  } else {
    arrayGifts.forEach(gift => {
      let textGiftClear = gift.replace('(', '').replace(')', '');
      if (grinchRegex.test(textGiftClear)) {
        flagResult = false;
      }
    });
  }

  return flagResult;

}

console.log(isValid(letter))
