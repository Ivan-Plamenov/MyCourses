# 100 / 100
import unittest
from project.factory.paint_factory import PaintFactory


class TestPaintFactory(unittest.TestCase):
    def setUp(self):
        self.factory = PaintFactory("TestFactory", 100)

    def test_initialization(self):
        self.assertEqual(self.factory.name, "TestFactory")
        self.assertEqual(self.factory.capacity, 100)
        self.assertEqual(self.factory.ingredients, {})

    def test_add_valid_ingredient_within_capacity(self):
        self.factory.add_ingredient("red", 20)
        self.assertEqual(self.factory.ingredients["red"], 20)

    def test_add_valid_ingredient_exceeding_capacity(self):
        with self.assertRaises(ValueError):
            self.factory.add_ingredient("blue", 101)

    def test_add_invalid_ingredient(self):
        with self.assertRaises(TypeError):
            self.factory.add_ingredient("purple", 20)

    def test_remove_existing_ingredient_within_quantity(self):
        self.factory.add_ingredient("yellow", 30)
        self.factory.remove_ingredient("yellow", 10)
        self.assertEqual(self.factory.ingredients["yellow"], 20)

    def test_remove_ingredient_exceeding_quantity(self):
        self.factory.add_ingredient("green", 15)
        with self.assertRaises(ValueError):
            self.factory.remove_ingredient("green", 20)

    def test_remove_non_existing_ingredient(self):
        with self.assertRaises(KeyError):
            self.factory.remove_ingredient("orange", 10)

    def test_products_property(self):
        self.factory.add_ingredient("white", 50)
        self.assertEqual(self.factory.products, {"white": 50})


if __name__ == "__main__":
    unittest.main()
