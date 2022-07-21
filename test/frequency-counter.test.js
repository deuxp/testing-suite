const { expect } = require("chai");
const { frequency } = require("../frequency-counter");

describe("#Frequency Counter", () => {
  it("returns true for: [1,2,3,5] and [1,4,9,25]", () => {
    const arr = [1, 2, 3, 5];
    const target = [1, 4, 9, 25];
    expect(frequency(arr, target)).to.be.true;
  });
  it("returns false for: [1, 5, 5, 2] and [1, 1, 1, 1]", () => {
    const arr = [1, 5, 5, 2];
    const target = [1, 1, 1, 1];
    expect(frequency(arr, target)).to.be.false;
  });
  it("returns false for: [1, 5, 5] and [1, 25, 25, 25]", () => {
    const arr = [1, 5, 5];
    const target = [1, 25, 25, 25];
    expect(frequency(arr, target)).to.be.false;
  });
  it("returns false for: [1, 1, 5] and [1, 25, 25]", () => {
    const arr = [1, 1, 5];
    const target = [1, 25, 25];
    expect(frequency(arr, target)).to.be.false;
  });
});
