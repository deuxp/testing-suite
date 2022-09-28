// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

/**
 * The function returns true if a single value in the array returns true when
 * passed to the callback. Otherwise it returns false.
 * @param {Array} arr
 * @param {callback} cb
 * @returns boolean
 */
const someRecursive = (arr, cb) => {
  // what is the condition that ends
  if (arr.length === 0) return false;

  if (cb(arr[0])) {
    return true;
  }
  return someRecursive(arr.slice(1), cb);
};

console.log(someRecursive([1, 2, 3, 4], isOdd)); //true

console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
// someRecursive([4,6,8], val => val > 10); // false
