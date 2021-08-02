const getObjectStructure = require("../questions/objectStructure");
const { expect } = require("chai");

describe("Object Structure", () => {
  it("Check for no arguments passed", () => {
    expect(() => {
      getObjectStructure();
    }).to.throw(Error, "Invalid Input");
  });

  it("Checks if null object is detected", () => {
    expect(getObjectStructure({})).to.deep.equal({});
  });

  it("Check for single level object", () => {
    expect(getObjectStructure({ name: "Some Name", age: 10 })).to.deep.equal({
      name: "string",
      age: "number",
    });
  });
});
