module.exports = {
  /* - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - --*
   * Returns an Array of two
   * @param {[]} ar1 Array to be disected in half
   * */
  divideArray(ar1) {
    const half = Math.floor(ar1.length / 2);
    const left = ar1.slice(0, half);
    const right = ar1.slice(half);
    return [left, right];
  },

  /** Merges two sorted arrays of any length - - - - - - - - - - - - - - - - - - - -
   * @param {[]} arr1 Sorted Array to be merged with arr2
   * @param {[]} arr2 Sorted Array to be merged with arr1
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

  /** Side effect function that swaps 2 items on a given array - - - - - - - - - - - - - - - - - - - -
   * @param {[]} Array to be operated on
   * @param {num} number the index of the first item to swap with
   * @param {num} number the index of the second item to swap
   * */
  swap(arr, index1, index2) {
    let temp = arr[index1]; // save one of them
    arr[index1] = arr[index2];
    arr[index2] = temp;
  },
};
