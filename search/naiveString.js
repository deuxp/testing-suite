/**
 * 1. loop over the linger string
 * 2. loop over the shorter string
 * 3. if the characters do match, keep going
 * 4. if the inner loop completes a match increment the count
 * 5. Return the count
 */

const naiveString = (string, target) => {
  let count = 0;

  string.split("").forEach((char, j) => {
    // 1
    if (char === target[0]) {
      // let accumulator = 0;
      for (let i = 0; i < target.length; i++) {
        if (target[i] !== string[i + j]) break;
        // accumulator++;
        if (i === target.length - 1) count++;
      }
    }
  });
  return count;
};

console.log(naiveString("owowomgowomg", "omg")); // 1
