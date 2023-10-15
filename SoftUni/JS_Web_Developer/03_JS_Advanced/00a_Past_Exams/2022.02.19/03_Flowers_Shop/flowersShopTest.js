describe("flowerShop", function () {
  describe("calcPriceOfFlowers()", function () {
    it("should correctly calculate the price of the flowers", function () {
      expect(flowerShop.calcPriceOfFlowers("Rose", 5, 10)).to.equal(
        "You need $50.00 to buy Rose!"
      );
    });

    it("should throw error for invalid flower input", function () {
      expect(() => flowerShop.calcPriceOfFlowers(123, 5, 10)).to.throw(
        "Invalid input!"
      );
    });

    it("should throw error for invalid price input", function () {
      expect(() => flowerShop.calcPriceOfFlowers("Rose", "five", 10)).to.throw(
        "Invalid input!"
      );
    });

    it("should throw error for invalid quantity input", function () {
      expect(() => flowerShop.calcPriceOfFlowers("Rose", 5, "ten")).to.throw(
        "Invalid input!"
      );
    });
  });

  describe("checkFlowersAvailable()", function () {
    const gardenArr = ["Rose", "Lily", "Orchid"];

    it("should return availability message if the flower is available", function () {
      expect(flowerShop.checkFlowersAvailable("Rose", gardenArr)).to.equal(
        "The Rose are available!"
      );
    });

    it("should return sold message if the flower is not available", function () {
      expect(flowerShop.checkFlowersAvailable("Daisy", gardenArr)).to.equal(
        "The Daisy are sold! You need to purchase more!"
      );
    });
  });

  describe("sellFlowers()", function () {
    const gardenArr = ["Rose", "Lily", "Orchid"];

    it("should correctly sell the flower at the specified space", function () {
      expect(flowerShop.sellFlowers(gardenArr, 1)).to.equal("Rose / Orchid");
    });

    it("should throw error for invalid gardenArr input", function () {
      expect(() => flowerShop.sellFlowers("invalid", 1)).to.throw(
        "Invalid input!"
      );
    });

    it("should throw error for negative space input", function () {
      expect(() => flowerShop.sellFlowers(gardenArr, -1)).to.throw(
        "Invalid input!"
      );
    });

    it("should throw error for space larger than gardenArr length", function () {
      expect(() => flowerShop.sellFlowers(gardenArr, 10)).to.throw(
        "Invalid input!"
      );
    });
  });
});
