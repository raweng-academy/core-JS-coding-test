const convertTime = require("../questions/hourMinuteSeconds");
const { expect } = require("chai");

describe("Time Converter", () => {
  it("Checks for invalid input", () => {
    expect(() => {
      convertTime("A");
    }).to.throw("Invalid Input");
  });

  it("Contains properties {hours, minutes, seconds}", () => {
    // expect(convertTime(3600)).to.have.property("hours");
    // expect(convertTime(3600)).to.have.property("minutes");
    // expect(convertTime(3600)).to.have.property("seconds");
    expect(convertTime(3600)).to.have.keys(["hours", "minutes", "seconds"]);
  });
  it("Check correct conversion", () => {
    // expect(convertTime(3600).hours).to.be.equal(1);
    expect(convertTime(3600)).to.deep.equal({
      hours: 1,
      minutes: 0,
      seconds: 0,
    });
  });
});
