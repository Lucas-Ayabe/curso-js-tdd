const { expect } = require("chai");
const calc = require("../src/main.js");

describe("Calc", function () {
  // smoke test
  describe("Smoke tests", function () {
    it("should exist the calc lib", function () {
      expect(calc).to.exist;
    });

    it("should exist the method `sum`", function () {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a("function");
    });

    it("should exist the method `sub`", function () {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a("function");
    });

    it("should exist the method `mul`", function () {
      expect(calc.mul).to.exist;
      expect(calc.mul).to.be.a("function");
    });

    it("should exist the method `div`", function () {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a("function");
    });
  });

  describe("Sum", function () {
    it("should return 4 when `sum(2, 2)`", function () {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe("Sub", function () {
    it("should return 2 when `sub(6, 4)`", function () {
      expect(calc.sub(6, 4)).to.be.equal(2);
    });

    it("should return -2 when `sub(6, 8)`", function () {
      expect(calc.sub(6, 8)).to.be.equal(-2);
    });
  });

  describe("Mul", function () {
    it("should return 4 when `mul(2, 2)`", function () {
      expect(calc.mul(2, 2)).to.be.equal(4);
    });
  });

  describe("Div", function () {
    it("should return 4 when `div(8, 2)`", function () {
      expect(calc.div(8, 2)).to.be.equal(4);
    });

    it("should return `Não é possível divisão por zero!` when `div(8, 0)`", function () {
      expect(calc.div(8, 0)).to.be.equal("Não é possível divisão por zero!");
    });
  });
});
