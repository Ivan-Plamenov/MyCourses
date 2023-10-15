describe("weddingDay Tests", function () {
  describe("pickVenue()", function () {
    it("should return the correct message for a valid venue", function () {
      expect(weddingDay.pickVenue(200, 100, "Varna")).to.equal(
        "This venue meets the requirements, with capacity of 200 guests and 100$ cover."
      );
    });

    it("should return error for invalid information", function () {
      expect(() => weddingDay.pickVenue("200", 100, "Varna")).to.throw(
        "Invalid Information!"
      );
    });

    it("should return location error for invalid location", function () {
      expect(() => weddingDay.pickVenue(200, 100, "Sofia")).to.throw(
        "The location of this venue is not in the correct area!"
      );
    });

    it("should return requirements not met for invalid capacity and price", function () {
      expect(weddingDay.pickVenue(140, 130, "Varna")).to.equal(
        "This venue does not meet your requirements!"
      );
    });
  });

  describe("otherSpendings()", function () {
    it("should return the total price with discount", function () {
      expect(
        weddingDay.otherSpendings(["flowers"], ["pictures"], true)
      ).to.equal(
        "You spend 1020$ for wedding decoration and photography with 15% discount!"
      );
    });

    it("should return the total price without discount", function () {
      expect(
        weddingDay.otherSpendings(
          ["Fabric drapes and curtains"],
          ["video"],
          false
        )
      ).to.equal("You spend 1700$ for wedding decoration and photography!");
    });

    it("should throw error for invalid input", function () {
      expect(() => weddingDay.otherSpendings(400, ["video"], false)).to.throw(
        "Invalid Information!"
      );
    });
  });

  describe("tableDistribution()", function () {
    it("should return correct distribution for guests less than 6 per table", function () {
      expect(weddingDay.tableDistribution(10, 2)).to.equal(
        "There is only 5 people on every table, you can join some tables."
      );
    });

    it("should return correct distribution for guests 6 or more per table", function () {
      expect(weddingDay.tableDistribution(40, 5)).to.equal(
        "You have 5 tables with 8 guests on table."
      );
    });

    it("should throw error for invalid input", function () {
      expect(() => weddingDay.tableDistribution(-40, 5)).to.throw(
        "Invalid Information!"
      );
    });
  });
});
