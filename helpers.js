// returns the an array of the remaining elements from the longer of the two arrays
// if two arrays are the same length, an empty array is returned
const suffixOfTwo = (ar1, ar2) => {
  const result = [];
  if (ar1.length > ar2.length) {
    result.push(ar1.slice(ar2.length));
  }
  if (ar1.length < ar2.length) {
    result.push(ar2.slice(ar1.length));
  }
  return result;
};

// console.log(suffixOfTwo([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])); // [5,6]

// This only merges two sorted arrays.
const merge = (arr1, arr2) => {
  const result = [];
  let leftHead = 0;
  let rightHead = 0;
  // short circuit
  while (leftHead !== arr1.length || rightHead !== arr2.length) {
    const left = arr1.at(leftHead);
    const right = arr2.at(rightHead);

    // compare - they are the same length now
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
};

// console.log(merge([1, 3, 5], [2, 4, 6]));
console.log(merge([1, 3, 5, 7, 8], [2, 4, 6]));

const alog = item => {
  let count = 0;
  return item => {
    count += 1;
    console.log(
      `\n-------------------<( ${count} )>-\n${JSON.stringify(item, null, 2)}`
    );
  };
};
const log = alog();

module.exports = {
  log,
  merge,
  /** Side effect function that swaps 2 items on a given array
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
