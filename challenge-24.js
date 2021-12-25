// @ts-check
export default function checkIsSameTree(firstTree = {}, secondTree = {}) {
  if (firstTree === null && secondTree === null) return true;
  if (firstTree?.value !== secondTree?.value) return false;
  return (
    checkIsSameTree(firstTree.left, secondTree.left) &&
    checkIsSameTree(firstTree.right, secondTree.right)
  );
}

const tree = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: null
  },
  right: {
    value: 3,
    left: null,
    right: null
  }
}

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

console.log(checkIsSameTree(tree, tree2));
