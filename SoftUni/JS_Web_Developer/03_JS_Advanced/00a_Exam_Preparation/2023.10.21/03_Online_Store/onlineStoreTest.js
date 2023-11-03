describe("onlineStore", function () {
  describe("isProductAvailable(product, stockQuantity)", function () {
    it("should return out of stock message for zero stock", function () {
      const result = onlineStore.isProductAvailable("Camera", 0);
      expect(result).to.equal("Sorry, Camera is currently out of stock.");
    });

    it("should return available message for products in stock", function () {
      const result = onlineStore.isProductAvailable("Camera", 5);
      expect(result).to.equal("Great! Camera is available for purchase.");
    });

    it("should throw error for invalid product type", function () {
      expect(() => onlineStore.isProductAvailable(123, 5)).to.throw(
        Error,
        "Invalid input."
      );
    });

    it("should throw error for invalid stockQuantity type", function () {
      expect(() => onlineStore.isProductAvailable("Camera", "five")).to.throw(
        Error,
        "Invalid input."
      );
    });
  });

  describe("canAffordProduct(productPrice, accountBalance)", function () {
    it("should return insufficient funds message if account balance is low", function () {
      const result = onlineStore.canAffordProduct(200, 100);
      expect(result).to.equal(
        "You don't have sufficient funds to buy this product."
      );
    });

    it("should return success message on successful purchase", function () {
      const result = onlineStore.canAffordProduct(50, 100);
      expect(result).to.equal(
        "Product purchased. Your remaining balance is $50."
      );
    });

    it("should throw error for invalid productPrice type", function () {
      expect(() => onlineStore.canAffordProduct("fifty", 100)).to.throw(
        Error,
        "Invalid input."
      );
    });

    it("should throw error for invalid accountBalance type", function () {
      expect(() => onlineStore.canAffordProduct(50, "hundred")).to.throw(
        Error,
        "Invalid input."
      );
    });
  });

  describe("getRecommendedProducts(productList, category)", function () {
    const sampleProducts = [
      { name: "Camera", category: "Photography" },
      { name: "Lens", category: "Photography" },
      { name: "Shirt", category: "Fashion" },
    ];

    it("should return recommended products for a given category", function () {
      const result = onlineStore.getRecommendedProducts(
        sampleProducts,
        "Photography"
      );
      expect(result).to.equal(
        "Recommended products in the Photography category: Camera, Lens"
      );
    });

    it("should return no recommended products message for empty category", function () {
      const result = onlineStore.getRecommendedProducts(
        sampleProducts,
        "Gadgets"
      );
      expect(result).to.equal(
        "Sorry, we currently have no recommended products in the Gadgets category."
      );
    });

    it("should throw error for invalid productList type", function () {
      expect(() =>
        onlineStore.getRecommendedProducts("invalid", "Photography")
      ).to.throw(Error, "Invalid input");
    });

    it("should throw error for invalid category type", function () {
      expect(() =>
        onlineStore.getRecommendedProducts(sampleProducts, 123)
      ).to.throw(Error, "Invalid input");
    });
  });
});
