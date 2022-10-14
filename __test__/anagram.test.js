const { expect } = require("chai");
const { validAnagram } = require("../anagram");

describe("#Anagram Validity", () => {
  it("should return true if both inputs are a blank spaces", () => {
    const aa = " ";
    const bb = " ";
    expect(validAnagram(aa, bb)).to.be.true;
  });
  it("should be false: rat !== car", () => {
    const aa = "rat";
    const bb = "car";
    expect(validAnagram(aa, bb)).to.be.false;
  });
  it("should be true: tar === rat", () => {
    const aa = "tar";
    const bb = "rat";
    expect(validAnagram(aa, bb)).to.be.true;
  });
  it("should be false: tar === tart", () => {
    const aa = "tar";
    const bb = "tart";
    expect(validAnagram(aa, bb)).to.be.false;
  });
  it("should be true: Bad Credit === Debit Card", () => {
    const aa = "Bad Credit";
    const bb = "Debit Card";
    expect(validAnagram(aa, bb)).to.be.true;
  });
});
