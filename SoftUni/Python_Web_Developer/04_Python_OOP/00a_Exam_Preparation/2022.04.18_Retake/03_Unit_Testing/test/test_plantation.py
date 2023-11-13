import unittest
from project.plantation import Plantation


class TestPlantation(unittest.TestCase):
    def setUp(self):
        self.plantation = Plantation(10)

    # Test Initialization and State Management
    def test_initialization(self):
        self.assertEqual(self.plantation.size, 10)
        self.assertEqual(self.plantation.plants, {})
        self.assertEqual(self.plantation.workers, [])

    # Test for Size Setter
    def test_invalid_size(self):
        with self.assertRaises(ValueError):
            self.plantation.size = -1

    # Positive Testing for hire_worker
    def test_hire_worker(self):
        result = self.plantation.hire_worker("Worker A")
        self.assertIn("Worker A", self.plantation.workers)
        self.assertEqual(result, "Worker A successfully hired.")

    # Negative Testing for hire_worker
    def test_hire_existing_worker(self):
        self.plantation.hire_worker("Worker A")
        with self.assertRaises(ValueError):
            self.plantation.hire_worker("Worker A")

    # Positive Testing for planting
    def test_planting(self):
        self.plantation.hire_worker("Worker A")
        result = self.plantation.planting("Worker A", "Tomato")
        self.assertIn("Tomato", self.plantation.plants["Worker A"])
        self.assertEqual(result, "Worker A planted it's first Tomato.")

    # Negative Testing for planting
    def test_planting_by_unhired_worker(self):
        with self.assertRaises(ValueError):
            self.plantation.planting("Worker B", "Tomato")

    def test_planting_on_full_plantation(self):
        self.plantation.hire_worker("Worker A")
        for _ in range(self.plantation.size):
            self.plantation.planting("Worker A", "Tomato")
        with self.assertRaises(ValueError):
            self.plantation.planting("Worker A", "Cucumber")

    # Test __len__ method
    def test_len_method(self):
        self.plantation.hire_worker("Worker A")
        self.plantation.planting("Worker A", "Tomato")
        self.plantation.planting("Worker A", "Cucumber")
        self.assertEqual(len(self.plantation), 2)

    # Test __str__ method
    def test_str_method(self):
        self.plantation.hire_worker("Worker A")
        self.plantation.planting("Worker A", "Tomato")
        expected_result = "Plantation size: 10\nWorker A\nWorker A planted: Tomato"
        self.assertEqual(str(self.plantation), expected_result)

    # Test __repr__ method
    def test_repr_method(self):
        self.plantation.hire_worker("Worker A")
        expected_result = "Size: 10\nWorkers: Worker A"
        self.assertEqual(repr(self.plantation), expected_result)


if __name__ == "__main__":
    unittest.main()
