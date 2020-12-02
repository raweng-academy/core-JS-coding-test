const rgbToHexConversion = require("../questions/rgbHexConverter");
const { expect } = require("chai");

describe("RGB Converter", () => {
  // check if length of the input is 6
  it("Check if 7 digit output is sent ", () => {
    expect(rgbToHexConversion(10, 10, 10).length).to.be.equal(7);
  });

  //check if it return correct values
  it("Returns rgb value", () => {
    expect(rgbToHexConversion(10, 10, 10)).to.equal("#0a0a0a");
  });

  // check if input is greater than 255 and less than 0
  it("Checks if input is greater than 255", () => {
    expect(() => {
      rgbToHexConversion(300, 200, 200);
    }).to.throw("Invalid Input");
  });
  // check for more than 3 inputs

  it("Takes only three inputs", () => {
    expect(() => {
      rgbToHexConversion(100, 100, 100, 100);
    }).to.throw("Invalid Input");
  });
  // check if alphabets throw an error
  it("Only takes integer input", () => {
    expect(() => {
      rgbToHexConversion("a", 10, 10);
    }).to.throw("Invalid Input");
  });
});
