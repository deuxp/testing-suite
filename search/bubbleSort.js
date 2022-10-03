/*
 * Start looping from the end of the array towards the beginning with a variable called i
 *     We do this because then you can use i in the inner loop as the length.. which will shrink the comparison loop with
 *     each pass. This works because every pass brings the largest number to the end. So you dont need to compare that one.
 *     so one less comparison is made each time.
 *      While (j < i)
 * Start an inner loop with a variable called j from the beginning until i - 1 (so there is space for the comparer)
 * if arr[i] is greater than arr[j+1], swap those two values
 * return the sorted array
 * */

/** Side effect function that swaps 2 items on a given array
 * @param {[]} Array to be operated on
 * @param {num} number the index of the first item to swap with
 * @param {num} number the index of the second item to swap
 * */
const swap = (arr, index1, index2) => {
  let temp = arr[index1]; // save one of them
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

// Mutates the array
const bubbleSort = (arr) => {
  let alreadySorted;
  // number of passes
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!alreadySorted) {
      alreadySorted = true;
      // compare & swap
      for (let j = 0; j < i; j++) {
        if (arr.at(j) > arr.at(j + 1)) swap(arr, j, j + 1);
        alreadySorted = false;
      }
    }
    if (alreadySorted) break;
  }
  return arr;
};

console.log(bubbleSort([5, 99, 88, 45, 10, 3, 67, 23, 7, 11]));

/*
 *
 * Optimization: The following is a classic Optimization that can be added to many algorithms
 *
 * Short circuit your code.. If no swaps were made, that means the array is sorted and you can retrun the array.
 * This brings the time complexity from O(n^2) to O(n) - linear time
 * But linear in the best case scenario an quadratic time in the worst case.
 * So this is a good candidate for arrays that you know are nearly sorted
 * */
