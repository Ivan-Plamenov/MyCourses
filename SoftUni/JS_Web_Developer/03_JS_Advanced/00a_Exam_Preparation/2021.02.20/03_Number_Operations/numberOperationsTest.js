describe("numberOperations", function () {
  describe("powNumber", function () {
    it("should return correct power of a number", function () {
      expect(numberOperations.powNumber(5)).to.equal(25);
      expect(numberOperations.powNumber(0)).to.equal(0);
      expect(numberOperations.powNumber(-3)).to.equal(9);
    });
  });

  describe("numberChecker", function () {
    it("should throw error if input is not a number", function () {
      expect(() => numberOperations.numberChecker("a")).to.throw(
        "The input is not a number!"
      );
      expect(() => numberOperations.numberChecker(undefined)).to.throw(
        "The input is not a number!"
      );
    });

    it("should identify numbers lower than 100", function () {
      expect(numberOperations.numberChecker("50")).to.equal(
        "The number is lower than 100!"
      );
      expect(numberOperations.numberChecker(50)).to.equal(
        "The number is lower than 100!"
      );
    });

    it("should identify numbers greater or equal to 100", function () {
      expect(numberOperations.numberChecker("150")).to.equal(
        "The number is greater or equal to 100!"
      );
      expect(numberOperations.numberChecker(150)).to.equal(
        "The number is greater or equal to 100!"
      );
      expect(numberOperations.numberChecker(100)).to.equal(
        "The number is greater or equal to 100!"
      );
    });
  });

  describe("sumArrays", function () {
    it("should sum two arrays by their indices correctly", function () {
      expect(numberOperations.sumArrays([1, 2, 3], [4, 5, 6])).to.eql([
        5, 7, 9,
      ]);
    });

    it("should handle arrays of different lengths", function () {
      expect(numberOperations.sumArrays([1, 2], [3, 4, 5])).to.eql([4, 6, 5]);
      expect(numberOperations.sumArrays([1, 2, 3], [4, 5])).to.eql([5, 7, 3]);
    });

    it("should handle arrays with negative numbers", function () {
      expect(numberOperations.sumArrays([-1, 2, -3], [4, -5, 6])).to.eql([
        3, -3, 3,
      ]);
    });

    it("should handle arrays with floating point numbers", function () {
      expect(numberOperations.sumArrays([0.1, 0.2], [0.3, 0.4])).to.eql([
        0.4, 0.6,
      ]);
    });
  });
});
