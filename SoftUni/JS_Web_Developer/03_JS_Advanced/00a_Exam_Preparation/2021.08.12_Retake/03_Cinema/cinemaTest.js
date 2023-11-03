// 86 / 100
describe("cinema", function () {
  describe("showMovies", function () {
    it("should return a message for an empty list", function () {
      expect(cinema.showMovies([])).to.equal(
        "There are currently no movies to show."
      );
    });

    it("should list one movie", function () {
      expect(cinema.showMovies(["Joker"])).to.equal("Joker");
    });

    it("should list multiple movies separated by comma", function () {
      expect(
        cinema.showMovies(["Joker", "King Kong", "The Tomorrow War"])
      ).to.equal("Joker, King Kong, The Tomorrow War");
    });
  });

  describe("ticketPrice", function () {
    it("should return the correct price for 'Premiere'", function () {
      expect(cinema.ticketPrice("Premiere")).to.equal(12.0);
    });

    it("should return the correct price for 'Normal'", function () {
      expect(cinema.ticketPrice("Normal")).to.equal(7.5);
    });

    it("should return the correct price for 'Discount'", function () {
      expect(cinema.ticketPrice("Discount")).to.equal(5.5);
    });

    it("should throw an error for an invalid projection type", function () {
      expect(() => cinema.ticketPrice("Unknown")).to.throw(
        "Invalid projection type."
      );
    });
  });

  describe("swapSeatsInHall", function () {
    it("should return unsuccessful for non-integer seats", function () {
      expect(cinema.swapSeatsInHall(1.5, 2)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("should return unsuccessful for seats <= 0", function () {
      expect(cinema.swapSeatsInHall(-1, 5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("should return unsuccessful for seats > 20", function () {
      expect(cinema.swapSeatsInHall(21, 19)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("should return unsuccessful for same seat numbers", function () {
      expect(cinema.swapSeatsInHall(10, 10)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("should return successful for valid seat swaps", function () {
      expect(cinema.swapSeatsInHall(1, 20)).to.equal(
        "Successful change of seats in the hall."
      );
    });
  });
});
