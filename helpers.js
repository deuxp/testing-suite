/** Side effect function that swaps 2 items on a given array - - - - - - - - - - - - - - - - - - - -
 * @param {arr:Array} to be operated on
 * @param {index1:Number} the index of the first item to swap with
 * @param {index2:Number}  the index of the second item to swap
 * */
const swap = (arr, index1, index2) => {
  let temp = arr[index1]; // save one of them
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

module.exports = {
  /**- - - - - - - - - -- - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - -
   * Returns an Array of two
   * @param {arr:Array} to be disected in half
   * */
  divideArray(arr) {
    const half = Math.floor(arr.length / 2);
    const left = arr.slice(0, half);
    const right = arr.slice(half);
    return [left, right];
  },

  range: (start, stop, step) =>
    Array.from({ length: stop - start / step + 1 }, (_, i) => i + start * step),

  /** Merges two sorted arrays of any length - - - - - - - - - - - - - - - - - - - -
   * @param {arr1:Array} Sorted Array to be merged with arr2
   * @param {arr2:Array} Sorted Array to be merged with arr1
   * */
  merge(arr1, arr2) {
    const result = [];
    let leftHead = 0;
    let rightHead = 0;

    while (leftHead !== arr1.length || rightHead !== arr2.length) {
      const left = arr1.at(leftHead);
      const right = arr2.at(rightHead);
      if (right < left || left === undefined) {
        result.push(right);
        rightHead++;
      }
      if (left < right || right === undefined) {
        result.push(left);
        leftHead++;
      }
    }
    return result;
  },

  swap,

  /** Pivot Pseudo- ~- ~- ~- ~- ~- ~- ~- ~- ~- ~- ~- ~- ~- ~- ~- ~- ~- ~- ~- ~-
   * accepts 3 arguments: arr, startIdx, endIdx
   * Grab the pivot from the start of the array
   * Store the current pivot index in a variable (keeps track of where the pivot should end up)
   * Loop throuth the array from the start undtil the end
   *  -- If the pivot > current element, increment the pivot index, and swap the current element with the element at the pivot index
   * Swap the startin element (pivot) with the pivot index
   */

  /**
   *   Does 2 things:
   *       (a) Returns the sorted index # of the pivot and
   *       (b) swaps the lower values to the left of the pivot. So the array is altered after..
   *           the pivot is in its proper index position.
   *   ** This should be done in place. Do not create a new array
   * @param {arr:Array} The array to be sifted through
   */
  pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
      const elem = arr[i];
      if (pivot > elem) {
        swapIdx++;
        swap(arr, i, swapIdx);
      }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
  },

  ////////////////////////
  // RadixSort Helpers //
  //////////////////////

  getDigit(num, digit) {
    const shiftTargetBelowDecimal = num / 10 ** (digit + 1);
    const clearWholeNumbers =
      shiftTargetBelowDecimal - Math.floor(shiftTargetBelowDecimal);
    return Math.floor(clearWholeNumbers * 10);
  },
};
