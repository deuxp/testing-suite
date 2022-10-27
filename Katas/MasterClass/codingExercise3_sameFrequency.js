/*
Purpose:  compare numbers to see if all the digits in each are the same.
          order does not matter
inputs:int     -> numbers
output:boolean -> result of comparison
*/

const sameFrequency = (num1, num2) => {
  // short circuit for different length nums: num -> string
  let a = num1.toString();
  let b = num2.toString();
  if (a.length !== b.length) return false;

  const hash1 = {};
  const hash2 = {};

  // iterate and change the shape of the data to hash table of counted digits
  for (const digit of a) {
    hash1[digit] = ++hash1[digit] || 1;
  }
  for (const digit of b) {
    hash2[digit] = ++hash2[digit] || 1;
  }
  for (const digit of a) {
    if (hash1[digit] !== hash2[digit]) return false;
  }
  return true;
};

module.exports = { sameFrequency };
