describe("testNumbers", function () {
  describe("sumNumbers", function () {
    it("should return undefined if one of the params is not a number", function () {
      expect(testNumbers.sumNumbers("a", 5)).to.be.undefined;
      expect(testNumbers.sumNumbers(5, "b")).to.be.undefined;
      expect(testNumbers.sumNumbers("a", "b")).to.be.undefined;
      expect(testNumbers.sumNumbers(undefined, 5)).to.be.undefined;
    });

    it("should sum two positive numbers correctly", function () {
      expect(testNumbers.sumNumbers(5, 3)).to.equal("8.00");
    });

    it("should sum positive and negative number correctly", function () {
      expect(testNumbers.sumNumbers(-5, 3)).to.equal("-2.00");
    });

    it("should sum two negative numbers correctly", function () {
      expect(testNumbers.sumNumbers(-5, -3)).to.equal("-8.00");
    });

    it("should sum numbers and round to two decimal places", function () {
      expect(testNumbers.sumNumbers(0.1, 0.2)).to.equal("0.30");
    });
  });

  describe("numberChecker", function () {
    it("should throw error if input is not a number", function () {
      expect(() => testNumbers.numberChecker("a")).to.throw(
        "The input is not a number!"
      );
      expect(() => testNumbers.numberChecker(undefined)).to.throw(
        "The input is not a number!"
      );
    });

    it("should identify even numbers", function () {
      expect(testNumbers.numberChecker("4")).to.equal("The number is even!");
      expect(testNumbers.numberChecker(4)).to.equal("The number is even!");
    });

    it("should identify odd numbers", function () {
      expect(testNumbers.numberChecker("5")).to.equal("The number is odd!");
      expect(testNumbers.numberChecker(5)).to.equal("The number is odd!");
    });
  });

  describe("averageSumArray", function () {
    it("should return average sum of array correctly", function () {
      expect(testNumbers.averageSumArray([1, 2, 3, 4])).to.equal(2.5);
    });

    it("should handle array of length 1", function () {
      expect(testNumbers.averageSumArray([5])).to.equal(5);
    });

    it("should handle arrays with negative numbers", function () {
      expect(testNumbers.averageSumArray([-5, 5, 10])).to.equal(
        3.3333333333333335
      );
    });

    it("should handle arrays with floating point numbers", function () {
      expect(testNumbers.averageSumArray([0.1, 0.2])).to.be.closeTo(
        0.15,
        0.001
      ); // Using closeTo due to floating point precision issues
    });
  });
});
