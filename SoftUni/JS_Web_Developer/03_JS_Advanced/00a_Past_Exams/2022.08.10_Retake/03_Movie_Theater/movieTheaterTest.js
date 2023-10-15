describe("movieTheater", function () {
  describe("ageRestrictions()", function () {
    it("should handle movie rating G", function () {
      expect(movieTheater.ageRestrictions("G")).to.equal(
        "All ages admitted to watch the movie"
      );
    });

    it("should handle movie rating PG", function () {
      expect(movieTheater.ageRestrictions("PG")).to.equal(
        "Parental guidance suggested! Some material may not be suitable for pre-teenagers"
      );
    });

    // ... [similar tests for R and NC-17]

    it("should handle unknown movie ratings", function () {
      expect(movieTheater.ageRestrictions("Unknown")).to.equal(
        "There are no age restrictions for this movie"
      );
    });
  });

  describe("moneySpent()", function () {
    it("should calculate cost correctly without discount", function () {
      expect(movieTheater.moneySpent(1, ["Popcorn"], ["Soda"])).to.equal(
        "The total cost for the purchase is 22.00"
      );
    });

    it("should calculate cost correctly with discount", function () {
      expect(
        movieTheater.moneySpent(4, ["Nachos", "Popcorn"], ["Soda", "Water"])
      ).to.equal(
        "The total cost for the purchase with applied discount is 54.40"
      );
    });

    it("should throw error for invalid ticket input", function () {
      expect(() => movieTheater.moneySpent("1", [], [])).to.throw(
        "Invalid input"
      );
    });
  });

  describe("reservation()", function () {
    it("should return the row with the most seats when multiple rows can accommodate", function () {
      const rows = [
        { rowNumber: 1, freeSeats: 7 },
        { rowNumber: 2, freeSeats: 8 },
      ];
      expect(movieTheater.reservation(rows, 7)).to.equal(2);
    });

    it("should throw error for invalid rowArray input", function () {
      expect(() => movieTheater.reservation("invalid", 1)).to.throw(
        "Invalid input"
      );
    });

    it("should throw error for invalid neededSeatsCount input", function () {
      expect(() => movieTheater.reservation([], "invalid")).to.throw(
        "Invalid input"
      );
    });
  });
});
