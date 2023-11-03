// 93 / 100
describe("library", function () {
  describe("calcPriceOfBook()", function () {
    it("should correctly calculate the price for books after 1980", function () {
      expect(library.calcPriceOfBook("Life Style", 1985)).to.equal(
        "Price of Life Style is 20.00"
      );
    });

    it("should correctly calculate the price for books before or during 1980", function () {
      expect(library.calcPriceOfBook("Old Book", 1980)).to.equal(
        "Price of Old Book is 10.00"
      );
    });

    it("should throw an error for invalid nameOfBook input", function () {
      expect(() => library.calcPriceOfBook(123, 1985)).to.throw(
        "Invalid input"
      );
    });

    it("should throw an error for invalid year input", function () {
      expect(() => library.calcPriceOfBook("Life Style", "1985")).to.throw(
        "Invalid input"
      );
    });
  });

  describe("findBook()", function () {
    const availableBooks = ["Troy", "Life Style", "Toronto"];

    it("should find the book if it exists in the array", function () {
      expect(library.findBook(availableBooks, "Life Style")).to.equal(
        "We found the book you want."
      );
    });

    it("should not find the book if it doesn't exist in the array", function () {
      expect(library.findBook(availableBooks, "Missing Book")).to.equal(
        "The book you are looking for is not here!"
      );
    });

    it("should throw an error if there are no books available", function () {
      expect(() => library.findBook([], "Life Style")).to.throw(
        "No books currently available"
      );
    });
  });

  describe("arrangeTheBooks()", function () {
    it("should correctly arrange the books if there is sufficient space", function () {
      expect(library.arrangeTheBooks(30)).to.equal(
        "Great job, the books are arranged."
      );
    });

    it("should indicate insufficient space if there are too many books", function () {
      expect(library.arrangeTheBooks(50)).to.equal(
        "Insufficient space, more shelves need to be purchased."
      );
    });

    it("should throw an error for invalid countBooks input (negative)", function () {
      expect(() => library.arrangeTheBooks(-5)).to.throw("Invalid input");
    });

    it("should throw an error for invalid countBooks input (not an integer)", function () {
      expect(() => library.arrangeTheBooks("30")).to.throw("Invalid input");
    });
  });
});
