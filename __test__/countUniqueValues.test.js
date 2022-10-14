const { countUniqueValues } = require("../countUniqueValues");
const { expect } = require("chai");

/* -------------------------------------------------------------------------- */
/*             WARNING: MOCHA does not play well with while loops             */
/* -------------------------------------------------------------------------- */

// describe("#Count Unique Values", () => {
//   it.only("should be 2 values: [1, 1, 1, 1, 1, 2]", () => {
//     var arr = [1, 1, 1, 1, 1, 2];
//     expect(countUniqueValues(arr)).to.equal(2);
//   });
//   it.only("should be 5 values: [1,1,1,1,3,3,3,4,4,7,7,7,7,7,5]", () => {
//     var arr = [1, 1, 1, 1, 3, 3, 3, 4, 4, 7, 7, 7, 7, 7, 5];
//     expect(countUniqueValues(arr)).to.equal(5);
//   });
//   it.only("should be 0 values: []", () => {
//     var arr = [];
//     expect(countUniqueValues(arr)).to.equal(0);
//   });
// });
