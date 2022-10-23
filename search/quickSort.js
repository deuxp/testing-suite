////////////
// Intro //
//////////
/**
 * Exploits the fact that arrays of 1 or 0 are already sorted
 *
 * Works by selecting one element (called the 'pivot' or 'partition') and
 * finding the index where the pivot should end up in the sorted array
 *
 * The runtime of quick sort depends in part on how one selects the pivot
 * Ideally, the pivot should be chosen so that it's roughly the median value in the data set you are sorting
 * You can chose the first element to be the pivot while you are learning, but there is a consequence to the runtime
 */
//////////////////
// Pseudo Code //
////////////////

/**
 * 1. call the pivot helper on the array
 * 2. recursively call the pivot helper on the right and left side,
 * 3. using the returned partition index to divide and conquer
 */

const { pivot } = require("../helpers");

const divideAndConquerQuickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let partition = pivot(arr);
  let left = quickSort(arr.slice(0, partition));
  // partition + 1 since the arr is altered to have the 'middle' number
  // in its proper index position
  let right = quickSort(arr.slice(partition + 1));
  let middle = [arr[partition]];
  // pass up the stack one Array
  return left.concat(middle.concat(right));
};
/**
 * The above implementation works, but its space complexity is growing with each callstack
 * We want to sort in place. In order to achieve this we must use the partition
 * index to delimit left and right sides and treat them like HEADs pointing to
 * data instead of creating new smaller arrays each time..
 * that way you are just passing up the same array,
 * a little more sorted than the last time it went in,
 * until you get to the bottom: 1 item: ie., the left side is equal to the right side
 */
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left        start  end
    quickSort(arr, left, pivotIndex - 1); // -1 to end before the sorted partition
    //right          start         end
    quickSort(arr, pivotIndex + 1, right); // +1 to start after the sorted partition
  }
  return arr;
};
console.log(quickSort([2, 3, 1, 7, 6, 4, 8, 5]));
/**
 * The same partially sorted array is being passed to every recursive call in the stack
 * That is how it is able to pass up an array sorted in place in a divide and conquer
 * recursive strategy with a space complexity of O(log n)
 */

// right on
