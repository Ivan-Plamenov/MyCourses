import unittest
from project.movie import Movie


class TestMovie(unittest.TestCase):
    def test_constructor_valid(self):
        movie = Movie("Inception", 2010, 8.8)
        self.assertEqual(movie.name, "Inception")
        self.assertEqual(movie.year, 2010)
        self.assertEqual(movie.rating, 8.8)
        self.assertEqual(movie.actors, [])

    def test_constructor_invalid(self):
        with self.assertRaises(ValueError) as context:
            Movie("", 2021, 8.5)
        self.assertEqual(str(context.exception), "Name cannot be an empty string!")

        with self.assertRaises(ValueError) as context:
            Movie("Dune", 120, 8.5)
        self.assertEqual(str(context.exception), "Year is not valid!")

    def test_add_actor(self):
        movie = Movie("Dune", 2021, 8.5)
        movie.add_actor("Zendaya")
        movie.add_actor("Rebecca Ferguson")
        self.assertEqual(movie.actors, ["Zendaya", "Rebecca Ferguson"])
        result = movie.add_actor("Rebecca Ferguson")
        self.assertEqual(
            result, "Rebecca Ferguson is already added in the list of actors!"
        )

    def test_gt_method(self):
        movie_a = Movie("Dune", 2021, 8.5)
        movie_b = Movie("Titanic", 1997, 7.8)
        self.assertEqual(str(movie_a > movie_b), '"Dune" is better than "Titanic"')

        movie_c = Movie("The Shawshank Redemption", 1994, 9.2)
        self.assertEqual(
            str(movie_a > movie_c), '"The Shawshank Redemption" is better than "Dune"'
        )

    def test_repr_method(self):
        movie = Movie("Dune", 2021, 8.5)
        movie.add_actor("Zendaya")
        movie.add_actor("Rebecca Ferguson")
        self.assertEqual(
            str(movie),
            "Name: Dune\nYear of Release: 2021\nRating: 8.50\nCast: Zendaya, Rebecca Ferguson",
        )


if __name__ == "__main__":
    unittest.main()
