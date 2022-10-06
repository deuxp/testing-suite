const { merge, divideArray } = require("../helpers");

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  const [left, right] = divideArray(arr);
  return merge(mergeSort(left), mergeSort(right));
};

// OR

const mergeSort2 = arr => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(left, right);
};
// console.log(mergeSort([3, 1, 55, 2]));
