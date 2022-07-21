const { expect } = require("chai");
const { score } = require("../dice");

describe("Scorer Function", function () {
  it("should value this as worthless: 0", function () {
    let result = score([2, 3, 4, 6, 2]);
    expect(result).to.equal(0);
  });

  it("should value this triplet correctly: 400", function () {
    let result = score([4, 4, 4, 3, 3]);
    expect(result).to.equal(400);
  });

  it("should value this mixed set correctly: 450", function () {
    let result = score([2, 4, 4, 5, 4]);
    expect(result).to.equal(450);
  });
});
