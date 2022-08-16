const { expect } = require("chai");
const { areThereDuplicates } = require("../codingExercise4_areThereDuplicates");

describe("#Exercise 4 are there duplicates?", () => {
  it.only("1, 2, 3: should be false", () => {
    const result = areThereDuplicates(1, 2, 3);
    expect(result).to.be.false;
  });

  it.only("1, 2, 2: should be true", () => {
    const result = areThereDuplicates(1, 2, 2);
    expect(result).to.be.true;
  });

  it.only("'a', 'b', 'c', 'a': should be true", () => {
    expect(areThereDuplicates("a", "b", "c", "a")).to.be.true;
  });
});
