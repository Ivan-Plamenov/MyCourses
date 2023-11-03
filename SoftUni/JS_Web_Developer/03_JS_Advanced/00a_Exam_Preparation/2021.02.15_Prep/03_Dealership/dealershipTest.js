describe("dealership", function () {
  describe("newCarCost", function () {
    it("should give a discount based on the old car model", function () {
      expect(dealership.newCarCost("Audi A4 B8", 30000)).to.equal(15000);
      expect(dealership.newCarCost("Audi A6 4K", 30000)).to.equal(10000);
      expect(dealership.newCarCost("Audi A8 D5", 35000)).to.equal(10000);
      expect(dealership.newCarCost("Audi TT 8J", 28000)).to.equal(14000);
    });

    it("should return the new car price if the old model is not in the list", function () {
      expect(dealership.newCarCost("Unknown Model", 30000)).to.equal(30000);
    });
  });

  describe("carEquipment", function () {
    it("should return selected extras based on the provided indices", function () {
      const extras = [
        "heated seats",
        "sliding roof",
        "sport rims",
        "navigation",
      ];
      expect(dealership.carEquipment(extras, [0, 2])).to.eql([
        "heated seats",
        "sport rims",
      ]);
      expect(dealership.carEquipment(extras, [1, 3])).to.eql([
        "sliding roof",
        "navigation",
      ]);
      expect(dealership.carEquipment(extras, [])).to.eql([]);
    });
  });

  describe("euroCategory", function () {
    it("should provide a discount if the category is 4 or higher", function () {
      expect(dealership.euroCategory(4)).to.equal(
        "We have added 5% discount to the final price: 14250."
      );
      expect(dealership.euroCategory(5)).to.equal(
        "We have added 5% discount to the final price: 14250."
      );
    });

    it("should not provide a discount if the category is below 4", function () {
      expect(dealership.euroCategory(1)).to.equal(
        "Your euro category is low, so there is no discount from the final price!"
      );
      expect(dealership.euroCategory(3)).to.equal(
        "Your euro category is low, so there is no discount from the final price!"
      );
    });
  });
});
