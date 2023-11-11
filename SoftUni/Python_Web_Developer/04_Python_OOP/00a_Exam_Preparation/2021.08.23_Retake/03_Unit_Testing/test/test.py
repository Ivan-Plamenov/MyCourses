# 92/100
import unittest
from project.library import Library


class TestLibrary(unittest.TestCase):
    def setUp(self):
        self.library = Library("City Library")

    def test_constructor(self):
        self.assertEqual(self.library.name, "City Library")
        self.assertEqual(self.library.books_by_authors, {})
        self.assertEqual(self.library.readers, {})

    def test_name_setter_valid(self):
        self.library.name = "New Library"
        self.assertEqual(self.library.name, "New Library")

    def test_name_setter_invalid(self):
        with self.assertRaises(ValueError):
            self.library.name = ""

    def test_add_book(self):
        self.library.add_book("Author A", "Book 1")
        self.assertIn("Author A", self.library.books_by_authors)
        self.assertIn("Book 1", self.library.books_by_authors["Author A"])

    def test_add_reader_new(self):
        result = self.library.add_reader("Reader 1")
        self.assertIsNone(result)
        self.assertIn("Reader 1", self.library.readers)

    def test_add_reader_existing(self):
        self.library.add_reader("Reader 1")
        result = self.library.add_reader("Reader 1")
        self.assertEqual(
            result, "Reader 1 is already registered in the City Library library."
        )

    def test_rent_book_not_registered_reader(self):
        result = self.library.rent_book("Reader 1", "Author A", "Book 1")
        self.assertEqual(
            result, "Reader 1 is not registered in the City Library Library."
        )

    def test_rent_book_no_author_books(self):
        self.library.add_reader("Reader 1")
        result = self.library.rent_book("Reader 1", "Author A", "Book 1")
        self.assertEqual(
            result, "City Library Library does not have any Author A's books."
        )

    def test_rent_book_no_specific_book(self):
        self.library.add_reader("Reader 1")
        self.library.add_book("Author A", "Book 1")
        result = self.library.rent_book("Reader 1", "Author A", "Book 2")
        self.assertEqual(
            result, """City Library Library does not have Author A's "Book 2"."""
        )

    def test_rent_book_success(self):
        self.library.add_reader("Reader 1")
        self.library.add_book("Author A", "Book 1")
        result = self.library.rent_book("Reader 1", "Author A", "Book 1")
        self.assertNotIn("Book 1", self.library.books_by_authors["Author A"])
        self.assertIn({"Author A": "Book 1"}, self.library.readers["Reader 1"])


if __name__ == "__main__":
    unittest.main()
