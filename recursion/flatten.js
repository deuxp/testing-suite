/**
 * Flatten
 * @param {[]} arr array of arrays
 * @returns an array of items that are no longer nested in sub-arrays
 */
const flatten = arr => {
  const newArr = [];
  // what is the condition that says this operation should finish
  if (!Array.isArray(arr[0])) {
    return arr[0];
  }
  // if it is an array // dig it out (the first index)
  // recall - this will be called until first item is not an array
  return newArr.concat(flatten(arr[0]));
};

console.logflatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
