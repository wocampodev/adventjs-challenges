function canReconfigure(from = '', to = '') {
  if (from.length !== to.length) return false;
  const changes = new Map();
  for (let index = 0; index < from.length; index++) {
    const fromChar = from[index];
    const toChar = to[index];
    if (changes.has(fromChar)) {
      if (changes.get(fromChar) !== toChar) {
        return false;
      }
    } else {
      if ([...changes.values()].includes(toChar)) {
        return false;
      }
      changes.set(fromChar, toChar);
    }
  }
  return true;
}
