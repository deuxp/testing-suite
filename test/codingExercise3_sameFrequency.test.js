const { expect } = require("chai");
const { sameFrequency } = require("../codingExercise3_sameFrequency");

describe("#Exercise 3 same frequency", () => {
  it("should be true", () => {
    var result = sameFrequency(182, 281); // true
    expect(result).to.be.true;
  });

  it("should be false", () => {
    var result = sameFrequency(34, 14); // false
    expect(result).to.be.false;
  });

  it("should be false", () => {
    var result = sameFrequency(22, 222); // false
    expect(result).to.be.false;
  });

  it("should be true", () => {
    var result = sameFrequency(3589578, 5879385); // true
    expect(result).to.be.true;
  });
});
