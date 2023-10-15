describe("bookSelection", function () {
  describe("isGenreSuitable()", function () {
    it("should return not suitable for Thriller genre for age <= 12", function () {
      expect(bookSelection.isGenreSuitable("Thriller", 12)).to.equal(
        "Books with Thriller genre are not suitable for kids at 12 age"
      );
    });

    it("should return not suitable for Horror genre for age <= 12", function () {
      expect(bookSelection.isGenreSuitable("Horror", 10)).to.equal(
        "Books with Horror genre are not suitable for kids at 10 age"
      );
    });

    it("should return suitable for any other genre for age <= 12", function () {
      expect(bookSelection.isGenreSuitable("Romance", 11)).to.equal(
        "Those books are suitable"
      );
    });

    it("should return suitable for Thriller and Horror genre for age > 12", function () {
      expect(bookSelection.isGenreSuitable("Horror", 15)).to.equal(
        "Those books are suitable"
      );
    });
  });

  describe("isItAffordable()", function () {
    it("should return not affordable if budget is less than price", function () {
      expect(bookSelection.isItAffordable(120, 100)).to.equal(
        "You don't have enough money"
      );
    });

    it("should return remaining budget after purchase", function () {
      expect(bookSelection.isItAffordable(50, 100)).to.equal(
        "Book bought. You have 50$ left"
      );
    });

    it("should throw error for invalid price input", function () {
      expect(() => bookSelection.isItAffordable("50", 100)).to.throw(
        "Invalid input"
      );
    });

    it("should throw error for invalid budget input", function () {
      expect(() => bookSelection.isItAffordable(50, "100")).to.throw(
        "Invalid input"
      );
    });
  });

  describe("suitableTitles()", function () {
    const books = [
      { title: "The Da Vinci Code", genre: "Thriller" },
      { title: "Twilight", genre: "Romance" },
      { title: "Dracula", genre: "Horror" },
    ];

    it("should return book titles of the wanted genre", function () {
      expect(bookSelection.suitableTitles(books, "Thriller")).to.eql([
        "The Da Vinci Code",
      ]);
    });

    it("should return empty array if no books of the wanted genre", function () {
      expect(bookSelection.suitableTitles(books, "Fantasy")).to.eql([]);
    });

    it("should throw error if books parameter is not an array", function () {
      expect(() => bookSelection.suitableTitles("invalid", "Horror")).to.throw(
        "Invalid input"
      );
    });

    it("should throw error if wantedGenre is not a string", function () {
      expect(() => bookSelection.suitableTitles(books, 1234)).to.throw(
        "Invalid input"
      );
    });
  });
});
