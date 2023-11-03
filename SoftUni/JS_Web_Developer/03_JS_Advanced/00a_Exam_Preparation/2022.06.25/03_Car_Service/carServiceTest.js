describe("carService", function () {
  describe("isItExpensive()", function () {
    it("should classify 'Engine' issue as expensive", function () {
      expect(carService.isItExpensive("Engine")).to.equal(
        "The issue with the car is more severe and it will cost more money"
      );
    });

    it("should classify 'Transmission' issue as expensive", function () {
      expect(carService.isItExpensive("Transmission")).to.equal(
        "The issue with the car is more severe and it will cost more money"
      );
    });

    it("should classify any other issue as cheaper", function () {
      expect(carService.isItExpensive("Brakes")).to.equal(
        "The overall price will be a bit cheaper"
      );
    });
  });

  describe("discount()", function () {
    it("should not apply discount for numberOfParts <= 2", function () {
      expect(carService.discount(2, 100)).to.equal(
        "You cannot apply a discount"
      );
    });

    it("should apply a 15% discount for numberOfParts between 3 and 7", function () {
      expect(carService.discount(4, 100)).to.equal(
        "Discount applied! You saved 15$"
      );
    });

    it("should apply a 30% discount for numberOfParts > 7", function () {
      expect(carService.discount(8, 100)).to.equal(
        "Discount applied! You saved 30$"
      );
    });

    it("should throw error for invalid numberOfParts input", function () {
      expect(() => carService.discount("4", 100)).to.throw("Invalid input");
    });

    it("should throw error for invalid totalPrice input", function () {
      expect(() => carService.discount(4, "100")).to.throw("Invalid input");
    });
  });

  describe("partsToBuy()", function () {
    const catalog = [
      { part: "blowoff valve", price: 145 },
      { part: "coil springs", price: 230 },
      { part: "injectors", price: 80 },
    ];

    it("should return total price of needed parts", function () {
      expect(
        carService.partsToBuy(catalog, ["blowoff valve", "injectors"])
      ).to.equal(225);
    });

    it("should return 0 if partsCatalog is empty", function () {
      expect(
        carService.partsToBuy([], ["blowoff valve", "injectors"])
      ).to.equal(0);
    });

    it("should throw error if partsCatalog is not an array", function () {
      expect(() =>
        carService.partsToBuy("invalid", ["blowoff valve"])
      ).to.throw("Invalid input");
    });

    it("should throw error if neededParts is not an array", function () {
      expect(() => carService.partsToBuy(catalog, "invalid")).to.throw(
        "Invalid input"
      );
    });

    it("should handle parts that aren't in the catalog (they won't be included in the total price)", function () {
      expect(carService.partsToBuy(catalog, ["nonexistent part"])).to.equal(0);
    });
  });
});
