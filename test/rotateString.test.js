const rotateString = require("../questions/stringRotation");
const { expect } = require("chai");

describe("Check String rotation", () => {
  it("Check input ", () => {
    expect(() => {
      rotateString();
    }).to.throw("Invalid Input");
  });
  it("Checks for invalid direction", () => {
    expect(() => {
      rotateString("Surfboard", 1, "some");
    }).to.throw("Invalid Direction");
  });
  it("Left rotation", () => {
    expect(rotateString("Surfboard", 1, "left")).to.be.equal("urfboardS");
  });
  it("Right rotation", () => {
    expect(rotateString("Surfboard", 1, "right")).to.be.equal("dSurfboar");
  });
});
