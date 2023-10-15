// 80 / 100
describe("PaymentPackage", function () {
  // Test constructor
  it("should be instantiated with two parameters", function () {
    const payment = new PaymentPackage("Test", 100);
    expect(payment.name).to.equal("Test");
    expect(payment.value).to.equal(100);
  });

  // Test name validation
  it("should throw error for invalid name", function () {
    expect(() => new PaymentPackage(123, 100)).to.throw(
      "Name must be a non-empty string"
    );
    expect(() => new PaymentPackage("", 100)).to.throw(
      "Name must be a non-empty string"
    );
  });

  // Test value validation
  it("should throw error for invalid value", function () {
    expect(() => new PaymentPackage("Test", "abc")).to.throw(
      "Value must be a non-negative number"
    );
    expect(() => new PaymentPackage("Test", -5)).to.throw(
      "Value must be a non-negative number"
    );
  });

  // Test VAT validation
  it("should throw error for invalid VAT", function () {
    const payment = new PaymentPackage("Test", 100);
    expect(() => (payment.VAT = -1)).to.throw(
      "VAT must be a non-negative number"
    );
    expect(() => (payment.VAT = "abc")).to.throw(
      "VAT must be a non-negative number"
    );
  });

  // Test active validation
  it("should throw error for invalid active", function () {
    const payment = new PaymentPackage("Test", 100);
    expect(() => (payment.active = "yes")).to.throw(
      "Active status must be a boolean"
    );
  });

  // Test toString method
  it("should return correct string representation", function () {
    const payment = new PaymentPackage("Test", 100);
    expect(payment.toString()).to.equal(
      "Package: Test\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120"
    );
    payment.active = false;
    expect(payment.toString()).to.equal(
      "Package: Test (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120"
    );
  });
});
