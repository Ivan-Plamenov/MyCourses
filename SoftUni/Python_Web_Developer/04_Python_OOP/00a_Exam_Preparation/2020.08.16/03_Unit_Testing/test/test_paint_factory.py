import unittest
from project.factory.paint_factory import PaintFactory


class TestPaintFactory(unittest.TestCase):
    def setUp(self):
        self.factory = PaintFactory("TestFactory", 100)

    def test_constructor(self):
        self.assertEqual(self.factory.name, "TestFactory")
        self.assertEqual(self.factory.capacity, 100)
        self.assertListEqual(
            self.factory.valid_ingredients, ["white", "yellow", "blue", "green", "red"]
        )
        self.assertEqual(self.factory.ingredients, {})

    def test_add_ingredient_valid(self):
        self.factory.add_ingredient("red", 20)
        self.assertIn("red", self.factory.ingredients)
        self.assertEqual(self.factory.ingredients["red"], 20)

    def test_add_ingredient_exceeds_capacity(self):
        with self.assertRaises(ValueError):
            self.factory.add_ingredient("blue", 101)

    def test_add_ingredient_invalid(self):
        with self.assertRaises(TypeError):
            self.factory.add_ingredient("purple", 10)

    def test_remove_ingredient_valid(self):
        self.factory.add_ingredient("yellow", 30)
        self.factory.remove_ingredient("yellow", 10)
        self.assertEqual(self.factory.ingredients["yellow"], 20)

    def test_remove_ingredient_not_exists(self):
        with self.assertRaises(KeyError):
            self.factory.remove_ingredient("orange", 10)

    def test_remove_ingredient_excess(self):
        self.factory.add_ingredient("green", 25)
        with self.assertRaises(ValueError):
            self.factory.remove_ingredient("green", 30)

    def test_products_property(self):
        self.factory.add_ingredient("white", 50)
        self.assertDictEqual(self.factory.products, {"white": 50})


if __name__ == "__main__":
    unittest.main()
