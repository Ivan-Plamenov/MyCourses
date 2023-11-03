describe("findNewApartment Tests", function () {
  describe("isGoodLocation()", function () {
    it("should return suitable location message for valid inputs", function () {
      expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal(
        "You can go on home tour!"
      );
    });

    it("should return unsuitable location for invalid city", function () {
      expect(findNewApartment.isGoodLocation("Burgas", true)).to.equal(
        "This location is not suitable for you."
      );
    });

    it("should return no public transport message", function () {
      expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal(
        "There is no public transport in area."
      );
    });

    it("should throw error for invalid input", function () {
      expect(() => findNewApartment.isGoodLocation(123, true)).to.throw(
        "Invalid input!"
      );
    });
  });

  describe("isLargeEnough()", function () {
    it("should return apartments that meet the minimal square meters requirement", function () {
      expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal(
        "50, 60"
      );
    });

    it("should throw error for non-array input", function () {
      expect(() => findNewApartment.isLargeEnough("string", 50)).to.throw(
        "Invalid input!"
      );
    });

    it("should throw error for empty array", function () {
      expect(() => findNewApartment.isLargeEnough([], 50)).to.throw(
        "Invalid input!"
      );
    });
  });

  describe("isItAffordable()", function () {
    it("should return that the home is affordable", function () {
      expect(findNewApartment.isItAffordable(10000, 15000)).to.equal(
        "You can afford this home!"
      );
    });

    it("should return that the home is not affordable", function () {
      expect(findNewApartment.isItAffordable(20000, 15000)).to.equal(
        "You don't have enough money for this house!"
      );
    });

    it("should throw error for invalid input", function () {
      expect(() => findNewApartment.isItAffordable(-10000, 15000)).to.throw(
        "Invalid input!"
      );
    });
  });
});
