# 62 / 100
import unittest
from project.plantation import Plantation


class TestPlantation(unittest.TestCase):
    def setUp(self):
        self.plantation = Plantation(100)

    def test_constructor_and_properties(self):
        self.assertEqual(self.plantation.size, 100)
        self.assertDictEqual(self.plantation.plants, {})
        self.assertListEqual(self.plantation.workers, [])

    def test_size_setter_valid_and_invalid(self):
        self.plantation.size = 50
        self.assertEqual(self.plantation.size, 50)

        with self.assertRaises(ValueError):
            self.plantation.size = -1

    def test_hire_worker_valid_and_duplicate(self):
        result = self.plantation.hire_worker("Alice")
        self.assertEqual(result, "Alice successfully hired.")
        self.assertIn("Alice", self.plantation.workers)

        with self.assertRaises(ValueError):
            self.plantation.hire_worker("Alice")

    def test_planting_valid_new_and_existing_worker(self):
        self.plantation.hire_worker("Bob")
        result = self.plantation.planting("Bob", "Carrot")
        self.assertEqual(result, "Bob planted it's first Carrot.")

        result = self.plantation.planting("Bob", "Tomato")
        self.assertEqual(result, "Bob planted Tomato.")

    def test_planting_unhired_worker_and_full_plantation(self):
        with self.assertRaises(ValueError):
            self.plantation.planting("Charlie", "Potato")

        self.plantation.size = 1
        self.plantation.hire_worker("Alice")
        self.plantation.planting("Alice", "Lettuce")
        with self.assertRaises(ValueError):
            self.plantation.planting("Alice", "Tomato")

    def test_len_method(self):
        self.plantation.hire_worker("Alice")
        self.plantation.planting("Alice", "Tomato")
        self.assertEqual(len(self.plantation), 1)

    def test_str_representation(self):
        self.plantation.hire_worker("Alice")
        self.plantation.planting("Alice", "Tomato")
        expected_str = "Plantation size: 100\nAlice\nAlice planted: Tomato"
        self.assertEqual(str(self.plantation), expected_str)

    def test_repr_representation(self):
        self.plantation.hire_worker("Alice")
        expected_repr = "Size: 100\nWorkers: Alice"
        self.assertEqual(repr(self.plantation), expected_repr)


if __name__ == "__main__":
    unittest.main()
