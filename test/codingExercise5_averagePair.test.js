const { expect } = require("chai");
const { averagePair } = require("../codingExercise5_averagePair");

describe("#Exercise 5 average pair?", () => {
  it.only("([1,2,3],2.5) // true", () => {
    const result = averagePair([1, 2, 3], 2.5);
    expect(result).to.be.true;
  });
  it.only("([1,3,3,5,6,7,10,12,19],8) // true", () => {
    const result = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
    expect(result).to.be.true;
  });
  it.only("([-1,0,3,4,5,6], 4.1) // false", () => {
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).to.be.false;
  });
  it.only("empty array should be false", () => {
    expect(averagePair([], 4)).to.be.false;
  });
});
