import unittest
from paint_factory import PaintFactory


class TestPaintFactory(unittest.TestCase):
    def setUp(self):
        self.factory = PaintFactory("TestFactory", 100)

    def test_init(self):
        self.assertEqual(self.factory.name, "TestFactory")
        self.assertEqual(self.factory.capacity, 100)
        self.assertEqual(self.factory.ingredients, {})

    def test_add_ingredient_valid(self):
        self.factory.add_ingredient("red", 10)
        self.assertIn("red", self.factory.ingredients)
        self.assertEqual(self.factory.ingredients["red"], 10)

    def test_add_ingredient_invalid_type(self):
        with self.assertRaises(TypeError):
            self.factory.add_ingredient("purple", 20)

    def test_add_ingredient_exceeds_capacity(self):
        with self.assertRaises(ValueError):
            self.factory.add_ingredient("red", 101)

    def test_remove_ingredient_valid(self):
        self.factory.add_ingredient("blue", 30)
        self.factory.remove_ingredient("blue", 20)
        self.assertEqual(self.factory.ingredients["blue"], 10)

    def test_remove_ingredient_not_exist(self):
        with self.assertRaises(KeyError):
            self.factory.remove_ingredient("orange", 5)

    def test_remove_ingredient_negative_quantity(self):
        self.factory.add_ingredient("green", 15)
        with self.assertRaises(ValueError):
            self.factory.remove_ingredient("green", 20)

    def test_can_add_true(self):
        self.assertTrue(self.factory.can_add(100))

    def test_can_add_false(self):
        self.factory.add_ingredient("yellow", 80)
        self.assertFalse(self.factory.can_add(21))

    def test_products_property(self):
        self.factory.add_ingredient("white", 5)
        self.assertEqual(self.factory.products, {"white": 5})

    def test_repr_output(self):
        self.factory.add_ingredient("red", 10)
        expected_repr = "Factory name: TestFactory with capacity 100.\nred: 10\n"
        self.assertEqual(repr(self.factory), expected_repr)


if __name__ == "__main__":
    unittest.main()
