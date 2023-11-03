// 90 / 100
describe("ChristmasMovies", function () {
  let christmas;

  beforeEach(function () {
    christmas = new ChristmasMovies();
  });

  describe("Initialization", function () {
    it("should initialize properties correctly", function () {
      expect(christmas.movieCollection).to.deep.equal([]);
      expect(christmas.watched).to.deep.equal({});
      expect(christmas.actors).to.deep.equal([]);
    });
  });

  describe("buyMovie(movieName, actors)", function () {
    it("should add movie correctly", function () {
      const result = christmas.buyMovie("Home Alone", [
        "Macaulay Culkin",
        "Joe Pesci",
        "Daniel Stern",
      ]);
      expect(result).to.equal(
        "You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!"
      );
      expect(christmas.movieCollection).to.have.length(1);
    });

    it("should throw error when movie is already in collection", function () {
      christmas.buyMovie("Home Alone", ["Macaulay Culkin", "Joe Pesci"]);
      expect(() =>
        christmas.buyMovie("Home Alone", ["Macaulay Culkin", "Joe Pesci"])
      ).to.throw(Error, "You already own Home Alone in your collection!");
    });

    it("should add only unique actors", function () {
      christmas.buyMovie("Last Christmas", [
        "Madison Ingoldsby",
        "Emma Thompson",
        "Boris Isakovic",
        "Madison Ingoldsby",
      ]);
      expect(christmas.movieCollection[0].actors).to.deep.equal([
        "Madison Ingoldsby",
        "Emma Thompson",
        "Boris Isakovic",
      ]);
    });
  });

  describe("discardMovie(movieName)", function () {
    it("should discard a movie and remove it from watched list", function () {
      christmas.buyMovie("Home Alone", ["Macaulay Culkin", "Joe Pesci"]);
      christmas.watchMovie("Home Alone");
      const result = christmas.discardMovie("Home Alone");
      expect(result).to.equal("You just threw away Home Alone!");
      expect(christmas.movieCollection).to.have.length(0);
      expect(christmas.watched).to.not.have.property("Home Alone");
    });

    it("should throw error when trying to discard non-existent movie", function () {
      expect(() => christmas.discardMovie("Home Alone")).to.throw(
        Error,
        "Home Alone is not at your collection!"
      );
    });
  });

  describe("watchMovie(movieName)", function () {
    it("should watch a movie and add it to watched list", function () {
      christmas.buyMovie("Home Alone", ["Macaulay Culkin", "Joe Pesci"]);
      christmas.watchMovie("Home Alone");
      expect(christmas.watched["Home Alone"]).to.equal(1);
    });

    it("should increase watch count if movie is watched multiple times", function () {
      christmas.buyMovie("Home Alone", ["Macaulay Culkin", "Joe Pesci"]);
      christmas.watchMovie("Home Alone");
      christmas.watchMovie("Home Alone");
      expect(christmas.watched["Home Alone"]).to.equal(2);
    });

    it("should throw error when trying to watch non-existent movie", function () {
      expect(() => christmas.watchMovie("Home Alone")).to.throw(
        Error,
        "No such movie in your collection!"
      );
    });
  });

  describe("favouriteMovie()", function () {
    it("should return the most watched movie", function () {
      christmas.buyMovie("Home Alone", ["Macaulay Culkin", "Joe Pesci"]);
      christmas.buyMovie("The Grinch", ["Benedict Cumberbatch"]);
      christmas.watchMovie("Home Alone");
      christmas.watchMovie("The Grinch");
      christmas.watchMovie("The Grinch");
      const result = christmas.favouriteMovie();
      expect(result).to.equal(
        "Your favourite movie is The Grinch and you have watched it 2 times!"
      );
    });

    it("should throw error when there are no watched movies", function () {
      expect(() => christmas.favouriteMovie()).to.throw(
        Error,
        "You have not watched a movie yet this year!"
      );
    });
  });

  describe("mostStarredActors()", function () {
    it("should return actor with most movies", function () {
      christmas.buyMovie("Home Alone", ["Macaulay Culkin", "Joe Pesci"]);
      christmas.buyMovie("Home Alone 2", ["Macaulay Culkin"]);
      const result = christmas.mostStarredActor();
      expect(result).to.equal(
        "The most starred actor is Macaulay Culkin and starred in 2 movies!"
      );
    });

    it("should throw error when there are no movies in the collection", function () {
      expect(() => christmas.mostStarredActor()).to.throw(
        Error,
        "You have not bought any movies yet. Come back when you have purchased at least 1 movie."
      );
    });
  });
});
