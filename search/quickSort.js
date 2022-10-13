////////////
// Intro //
//////////

/*
 * Exploits the fact that arrays of 1 or 0 are already sorted
 *
 * Works by selecting one element (called the 'pivot' or 'partition') and
 * finding the index where the pivot should end up in the sorted array
 *
 * The runtime of quick sort depends in part on how one selects the pivot
 * Ideally, the pivot should be chosen so that it's roughly the median value in the data set you are sorting
 * You can chose the first element to be the pivot while you are learning, but there is a consequence to the runtime
 * */

//////////////////
// Pseudo Code //
////////////////

/*
 * 1. Write a Pivot Helper which arranges elements in an array on either side of a pivot
 *   a. Takes in an Array as the parameter
 *   b. Then rearrange elements in the array so that all values less than the pivot are moved to the
 *      left, and all values greater than the pivot are to the right of the pivot.
 *      The order on either side does not matter
 *   c. This should be done in place. Do not create a new array
 *   d. Returns the index of the pivot
 * 2.
 * */

const { swap, pivot } = require("../helpers");

const quickSort = (arr) => {
  let partition = pivot(arr);
  swap(arr, partition, 0);
  let left = quickSort(arr.slice(0, partition));
  let right = quickSort(arr.slice(partition));
  if (arr.length <= 1) return arr;
  return left.concat([arr[partition]].concat(right));
};

// console.log(quickSort([2, 3, 1]));
let a = [5, 2, 4, 8, 1, 7, 3];
console.log(pivot(a)); // return 4; [2, 4, 1, 3, 5, 7, 8]
console.log(a);
