const frequencyCounter = require("../questions/frequencyCounter");
const { expect } = require("chai");

describe("Frequency Counter", () => {
  it("Check for all objects", () => {
    expect(frequencyCounter("aeiou")).to.have.keys(["a", "e", "i", "o", "u"]);
  });

  it("Check for vowel frequency", () => {
    expect(frequencyCounter("Surfboard")).to.deep.equal({
      a: 1,
      e: 0,
      i: 0,
      o: 1,
      u: 1,
    });
  });

  it("Check for invalid input", () => {
    expect(() => {
      frequencyCounter(123);
    }).to.throw(Error, "Invalid Input");
  });
});
