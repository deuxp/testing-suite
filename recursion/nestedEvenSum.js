/**
 * Returns the sum of all even numbers in an object which may contain nested objects.
 * @param {{{}}} obj nested objects, containing numbers
 */
const nestedEvenSum = obj => {};

const obj = { outer: 2, outer2: 2 };

// test first by seeing an output of an iteration

console.log(nestedEvenSum(obj));

// const keys = Object.keys(obj); // array
// const key1 = keys[0];
// const key2 = keys[1];
// console.log(typeof obj[key1]);
// console.log(typeof obj[key2]);
