const addition = require("../questions/addition");
const { expect } = require("chai");

describe("Addition test", function () {
  // beforeEach(function () {
  //   console.log("Running addition test");
  // });
  it("Return sum ", function () {
    expect(addition(10, 20, 30)).to.equal(60);
  });
  it("Detect empty inputs", () => {
    expect(function () {
      addition();
    }).to.throw(Error, "Invalid Input");
  });

  it("Detects alphabet inputs", () => {
    expect(() => {
      addition("a", "b");
    }).to.throw(Error, "Invalid Input");
  });
});
