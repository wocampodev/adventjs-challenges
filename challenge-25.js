// @ts-check
function canMouseEat(movement = '', room = []) {
  const locations = {
    mousePosition: {},
    foodPosition: [],
  };
  for (let i = 0; i < room.length; i++) {
    const row = room[i];
    for (let j = 0; j < row.length; j++) {
      const column = row[j];
      if (column === 'm') {
        locations.mousePosition.row = i;
        locations.mousePosition.column = j;
      }
      if (column === '*') {
        locations.foodPosition.push({ row: i, column: j });
      }
    }
  }
  switch (movement) {
    case 'up':
      locations.mousePosition.row--;
      break;
    case 'down':
      locations.mousePosition.row++;
      break;
    case 'right':
      locations.mousePosition.column++;
      break;
    case 'left':
      locations.mousePosition.column--;
      break;
    default:
      break;
  }
  return locations.foodPosition.some(({ row, column }) =>
    row === locations.mousePosition.row &&
    column === locations.mousePosition.column
  );
}

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up', room)   // false
canMouseEat('down', room)   // true
canMouseEat('right', room)   // false
canMouseEat('left', room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up', room2)   // false
canMouseEat('down', room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left', room2)   // false
