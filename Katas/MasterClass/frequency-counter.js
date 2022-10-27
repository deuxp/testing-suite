const { log } = require("./helpers");

/**
 * Purpose: for each num in array there must be a
 *          corresponding square represented in the target array. 1:1 match,
 *          no duplicate matches
 * input: [], []
 * output: bool
 */

module.exports = {
  frequency(arr, target) {
    if (arr.length !== target.length) return false;
    const targetObject = {};

    target.forEach(num => {
      targetObject[num] = ++targetObject[num] || 1;
    });

    for (var num of arr) {
      const key = num ** 2;
      if (!targetObject[key]) {
        return false;
      }
      if (targetObject[key] <= 0) {
        return false;
      }
      --targetObject[key];
    }
    return true;
  },
};
