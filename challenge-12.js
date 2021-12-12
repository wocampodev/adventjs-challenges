export default function getMinJump(obstacles) {
  const max = Math.max(...obstacles);
  let walkWay = 0;
  let length = 1;
  while (walkWay <= max) {
    if (obstacles.includes(walkWay)) {
      length++;
      walkWay = 0;
    }
    walkWay += length;
  }
  return length;
}
