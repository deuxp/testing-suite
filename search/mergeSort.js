const { merge, divideArray } = require("../helpers");

const mergeSort = (ar1, ar2) => {
  let result = [];
  // base case - if there is only one item in the array, it is sorted
  // merge and concat with result
  if (ar1.length <= 1 && ar2.length <= 1) {
    result = result.concat(merge(ar1, ar2));
    return result;
  }
  let ar1A = ar1;
  let ar2A = ar2;
  let ar1B = [];
  let ar2B = [];
  // else divide the array in half
  if (ar1A.length > 1) {
    [ar1A, ar1B] = divideArray(ar1);
  }
  if (ar2A.length > 1) {
    [ar2A, ar2B] = divideArray(ar2);
  }
  // pass up the value - merged with the two single item arrays; merge and concat
  result = result.concat(merge(mergeSort(ar1A, ar1B), mergeSort(ar2A, ar2B)));
  return result;
};

console.log(mergeSort([3, 1, 55, 2], [23, 4, 14, 9, 22]));
// console.log(merge([], [1, 3]));

// console.log(parseInt(0b001, 2));
// console.log((2).toString(2)); //  10

// console.log(parseInt("10", 2)); // 2
// console.log(parseInt("11", 2)); // 3
// console.log((0b011).toString(10)); // 3
