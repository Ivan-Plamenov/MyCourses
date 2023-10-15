// 94 / 100
describe("rentCar", function () {
  describe("searchCar()", function () {
    const shop = ["Volkswagen", "BMW", "Audi"];

    it("should find the model in the shop and return its count", function () {
      expect(rentCar.searchCar(shop, "Audi")).to.equal(
        "There is 1 car of model Audi in the catalog!"
      );
    });

    it("should throw error if the model is not in the shop", function () {
      expect(() => rentCar.searchCar(shop, "Tesla")).to.throw(
        "There are no such models in the catalog!"
      );
    });

    it("should throw error for invalid shop input", function () {
      expect(() => rentCar.searchCar("invalid", "Audi")).to.throw(
        "Invalid input!"
      );
    });

    it("should throw error for invalid model input", function () {
      expect(() => rentCar.searchCar(shop, 123)).to.throw("Invalid input!");
    });
  });

  describe("calculatePriceOfCar()", function () {
    it("should return the cost for renting the car model for given days", function () {
      expect(rentCar.calculatePriceOfCar("Audi", 2)).to.equal(
        "You choose Audi and it will cost $72!"
      );
    });

    it("should throw error if the model is not in the catalog", function () {
      expect(() => rentCar.calculatePriceOfCar("Tesla", 2)).to.throw(
        "No such model in the catalog!"
      );
    });

    it("should throw error for invalid model input", function () {
      expect(() => rentCar.calculatePriceOfCar(123, 2)).to.throw(
        "Invalid input!"
      );
    });

    it("should throw error for invalid days input", function () {
      expect(() => rentCar.calculatePriceOfCar("Audi", "two")).to.throw(
        "Invalid input!"
      );
    });
  });

  describe("checkBudget()", function () {
    it("should return 'You rent a car!' if budget is enough", function () {
      expect(rentCar.checkBudget(20, 2, 50)).to.equal("You rent a car!");
    });

    it("should return 'You need a bigger budget!' if budget is insufficient", function () {
      expect(rentCar.checkBudget(20, 3, 50)).to.equal(
        "You need a bigger budget!"
      );
    });

    it("should throw error for invalid costPerDay input", function () {
      expect(() => rentCar.checkBudget("20", 2, 50)).to.throw("Invalid input!");
    });

    it("should throw error for invalid days input", function () {
      expect(() => rentCar.checkBudget(20, "two", 50)).to.throw(
        "Invalid input!"
      );
    });

    it("should throw error for invalid budget input", function () {
      expect(() => rentCar.checkBudget(20, 2, "fifty")).to.throw(
        "Invalid input!"
      );
    });
  });
});
