# 71/100
import unittest
from project.factory.paint_factory import PaintFactory


class TestPaintFactory(unittest.TestCase):
    def setUp(self):
        # Initialize a PaintFactory object for testing
        self.paint_factory = PaintFactory("Test Paint Factory", capacity=500)

    def tearDown(self):
        # Clean up resources used for testing (if necessary)
        pass

    def test_constructor(self):
        # Test the constructor of the PaintFactory class
        self.assertEqual(self.paint_factory.name, "Test Paint Factory")
        self.assertEqual(self.paint_factory.capacity, 500)
        self.assertEqual(self.paint_factory.ingredients, {})
        self.assertEqual(
            self.paint_factory.valid_ingredients,
            ["white", "yellow", "blue", "green", "red"],
        )

    def test_add_ingredient(self):
        # Test the add_ingredient method
        self.paint_factory.add_ingredient("white", 50)
        self.assertEqual(self.paint_factory.ingredients["white"], 50)

        with self.assertRaises(ValueError):
            self.paint_factory.add_ingredient("blue", 600)  # Exceeds capacity

        with self.assertRaises(TypeError):
            self.paint_factory.add_ingredient("black", 20)  # Invalid ingredient

    # Define more test methods for other functions of PaintFactory


if __name__ == "__main__":
    unittest.main()
