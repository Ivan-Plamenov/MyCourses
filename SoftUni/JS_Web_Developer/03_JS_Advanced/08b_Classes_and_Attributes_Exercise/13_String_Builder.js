// 77 / 100
describe("StringBuilder", function () {
  // Test constructor
  it("should be instantiated with or without a string argument", function () {
    const str1 = new StringBuilder();
    const str2 = new StringBuilder("hello");

    expect(str1.toString()).to.equal("");
    expect(str2.toString()).to.equal("hello");
  });

  // Test append method
  it("should append strings to the end of the storage", function () {
    const str = new StringBuilder("hello");
    str.append(", there");
    expect(str.toString()).to.equal("hello, there");
  });

  // Test prepend method
  it("should prepend strings to the beginning of the storage", function () {
    const str = new StringBuilder("there");
    str.prepend("hello, ");
    expect(str.toString()).to.equal("hello, there");
  });

  // Test insertAt method
  it("should insert strings at the specified index", function () {
    const str = new StringBuilder("User, hello, there");
    str.insertAt("woop", 6);
    expect(str.toString()).to.equal("User, woop hello, there");
  });

  // Test insertAt method with out-of-range index
  it("should throw an error when insertAt index is out of range", function () {
    const str = new StringBuilder("User, hello, there");
    expect(() => str.insertAt("woop", 20)).to.throw("Index is out of range");
  });

  // Test remove method
  it("should remove elements starting at the specified index", function () {
    const str = new StringBuilder("User, woop hello, there");
    str.remove(6, 3);
    expect(str.toString()).to.equal("User, hello, there");
  });

  // Test remove method with out-of-range index
  it("should throw an error when remove index is out of range", function () {
    const str = new StringBuilder("User, hello, there");
    expect(() => str.remove(20, 3)).to.throw("Index is out of range");
  });

  // Test toString method
  it("should return correct string representation", function () {
    const str = new StringBuilder("User, hello, there");
    expect(str.toString()).to.equal("User, hello, there");
  });

  // Test invalid argument in constructor
  it("should throw an error when passed a non-string argument in constructor", function () {
    expect(() => new StringBuilder(123)).to.throw("Argument must be a string");
  });

  // Test invalid argument in append method
  it("should throw an error when passed a non-string argument in append", function () {
    const str = new StringBuilder("hello");
    expect(() => str.append(123)).to.throw("Argument must be a string");
  });

  // Test invalid argument in prepend method
  it("should throw an error when passed a non-string argument in prepend", function () {
    const str = new StringBuilder("there");
    expect(() => str.prepend(123)).to.throw("Argument must be a string");
  });

  // Test invalid argument in insertAt method
  it("should throw an error when passed a non-string argument in insertAt", function () {
    const str = new StringBuilder("User, hello, there");
    expect(() => str.insertAt(123, 6)).to.throw("Argument must be a string");
  });
});
