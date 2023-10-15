const chai = require("chai");
const assert = chai.assert;

describe("Tests for recipeSelection object", function () {
  describe("isTypeSuitable() tests", function () {
    it("should return not suitable for vegetarians", function () {
      const result = recipeSelection.isTypeSuitable("Meat", "Vegetarian");
      assert.equal(result, "This recipe is not suitable for vegetarians");
    });

    it("should return not suitable for vegans (Meat)", function () {
      const result = recipeSelection.isTypeSuitable("Meat", "Vegan");
      assert.equal(result, "This recipe is not suitable for vegans");
    });

    it("should return not suitable for vegans (Dairy)", function () {
      const result = recipeSelection.isTypeSuitable("Dairy", "Vegan");
      assert.equal(result, "This recipe is not suitable for vegans");
    });

    it("should return suitable for dietary restriction", function () {
      const result = recipeSelection.isTypeSuitable("Fish", "Pescatarian");
      assert.equal(
        result,
        "This recipe is suitable for your dietary restriction"
      );
    });

    it("should throw an error for invalid input", function () {
      assert.throws(
        () => recipeSelection.isTypeSuitable(123, "Vegetarian"),
        "Invalid input"
      );
    });
  });

  describe("isItAffordable() tests", function () {
    it("should return that you don't have enough budget", function () {
      const result = recipeSelection.isItAffordable(150, 100);
      assert.equal(
        result,
        "You don't have enough budget to afford this recipe"
      );
    });

    it("should return the remaining budget", function () {
      const result = recipeSelection.isItAffordable(50, 100);
      assert.equal(result, "Recipe ingredients bought. You have 50$ left");
    });

    it("should throw an error for invalid input (price)", function () {
      assert.throws(
        () => recipeSelection.isItAffordable("50", 100),
        "Invalid input"
      );
    });

    it("should throw an error for invalid input (budget)", function () {
      assert.throws(
        () => recipeSelection.isItAffordable(50, "100"),
        "Invalid input"
      );
    });
  });

  describe("getRecipesByCategory() tests", function () {
    const sampleRecipes = [
      { title: "Spicy Tofu Stir-Fry", category: "Asian" },
      { title: "Pasta Carbonara", category: "Italian" },
      { title: "Sushi Rolls", category: "Asian" },
    ];

    it("should return recipes from the desired category", function () {
      const result = recipeSelection.getRecipesByCategory(
        sampleRecipes,
        "Asian"
      );
      assert.deepEqual(result, ["Spicy Tofu Stir-Fry", "Sushi Rolls"]);
    });

    it("should throw an error for invalid input (recipes)", function () {
      assert.throws(
        () => recipeSelection.getRecipesByCategory("Invalid", "Asian"),
        "Invalid input"
      );
    });

    it("should throw an error for invalid input (category)", function () {
      assert.throws(
        () => recipeSelection.getRecipesByCategory(sampleRecipes, 123),
        "Invalid input"
      );
    });
  });
});
