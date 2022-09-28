/**
 * Flatten
 * @param {[]} arr array of arrays
 * @returns an array of items that are no longer nested in sub-arrays
 */
const flatten = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // if item is a num then push to new array and return recursive call
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i]);
    } else {
      // new array needs the old array with the concatenation of the function digging out the next thing
      newArr = newArr.concat(flatten(arr[i]));
    }
  }
  return newArr;
};

// console.log(flatten([1])); // [1]
// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

// This one was very hard. I came really close to a solution, but in the end
// I had to peek at the answer for the loop logic. So close.
