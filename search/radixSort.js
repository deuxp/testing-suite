//////////////////
// Methodology //
////////////////
// TODO: For every algorithm, it helps to think in terms of what helper function
// I need to write for each pseudo action of the algorithm

/**
 * Uses the special properties of numbers. Never compares items.. all of the
 * sorts that we have used so far are 'comparison sort'
 *
 * Exploit: numbers with more digits are larger than numbers
 * */

////////////////////////
// RadixSort Helpers //
//////////////////////

// const getDigitMine = function (num, digit) {
//   const shiftTargetBelowDecimal = Math.abs(num) / 10 ** (digit + 1);
//   const clearWholeNumbers =
//     shiftTargetBelowDecimal - Math.floor(shiftTargetBelowDecimal);
//   return Math.floor(clearWholeNumbers * 10);
// };

// const numberOfDigitsMine = function (num) {
//   let digits = 0;
//   while (Math.floor(num / Math.pow(10, digits)) !== 0) {
//     digits++;
//   }
//   return digits;
// };

//////////////////
// Pseudo Code //
////////////////

/**
 * Define a function that accepts a list of numbers
 * Figure out how many digits the largest number has
 * Loop from k=0 up to this largest number of digits
 * For each iteration of the loop:
 *  - create buchets for each digit 0-9
 *  - place each number in the corresponding bucket based on 'k'th digit
 *  - Replace our existing array  withe the values in the buckets 0-9
 *  - return the list at the end
 */

const getDigit = function (num, digit) {
  return Math.floor((Math.abs(num) / Math.pow(10, digit)) % 10);
};

const numberOfDigits = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
};

const maxDigits = arr => {
  return arr.map(num => numberOfDigits(num)).reduce((k, v) => Math.max(k, v));
};

const radixSort = arr => {
  const iterations = maxDigits(arr);
  let result = arr;

  for (let k = 0; k < iterations; k++) {
    // let buckets = [[], [], [], [], [], [], [], [], [], []];
    let buckets = Array.from({ length: 10 }, () => []);
    //Looking at the kth digit
    for (let i = 0; i < arr.length; i++) {
      let number = result[i];
      let targetBucket = getDigit(number, k);
      buckets[targetBucket].push(number);
    }
    result = buckets.reduce((k, v) => k.concat(v));
  }
  return result;
};
console.log(radixSort([11, 233, 2, 888, 32, 31, 7, 14, 77, 8]));
