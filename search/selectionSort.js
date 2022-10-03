const { swap } = require("../helpers");
/*
 * Similar to bubble sort, but instead of first blacing large values into sorted position,
 * it places small values into sorted position.
 *
 * Sorted data accumulates at the beginning
 *
 * Algorithm:
 * Find minimum element linearly, swap at the end
 * There is a pointer at which index you are swappin the min to.
 * This is incremented up at each pass (loop)
 * */

/**
 * @param {[]} the Array to be sorted
 * Returns the same array
 * */
const selectionSort = arr => {
  // index to be swapped with the minimum of remaining numbers
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    let minimum = arr.at(i);
    // looks for the minimum
    for (let j = i + 1; j < arr.length; j++) {
      let current = arr.at(j);
      if (current < minimum) {
        minimum = current;
        index = j;
      }
    }
    // if index is not changed then the minimum is already in the correct order
    if (index > i) swap(arr, i, index);
  }
  return arr;
};

// [69, ]

console.log(selectionSort([69, 33, 55, 24, 12, 34, 1, -2, 5]));
/*
 * Steps:
 * 1. keeping track of the min
 * 2. outer loop is the position to be swapped with the min
 * 3. inner loop looks ahead for the new minimum.. stores the value
 * 4. when the inner has exhausted, swap the outer index with the minimum
 * 5. The start position of the inner loop is the current position of the outer loop.
 * 6. This way you are not making unneccessary comparisons with the already cemented minimum values of the array
 * */
