const { expect } = require("chai");
const { sameFrequency } = require("../codingExercise3_sameFrequency");
const { log } = require("../helpers");

describe("#Exercise 3 same frequency", () => {
  it("182, 281: should be true", () => {
    var result = sameFrequency(182, 281); // true
    // log({ result });
    expect(result).to.be.true;
  });

  it("34, 14: should be false", () => {
    var result = sameFrequency(34, 14); // false
    expect(result).to.be.false;
  });

  it("22, 222: should be false", () => {
    var result = sameFrequency(22, 222); // false
    expect(result).to.be.false;
  });

  it("3589578, 5879385: should be true", () => {
    var result = sameFrequency(3589578, 5879385); // true
    expect(result).to.be.true;
  });
});
