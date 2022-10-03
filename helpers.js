const alog = (item) => {
  let count = 0;
  return (item) => {
    count += 1;
    console.log(
      `\n-------------------<( ${count} )>-\n${JSON.stringify(item, null, 2)}`
    );
  };
};
const log = alog();

module.exports = {
  log,

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
