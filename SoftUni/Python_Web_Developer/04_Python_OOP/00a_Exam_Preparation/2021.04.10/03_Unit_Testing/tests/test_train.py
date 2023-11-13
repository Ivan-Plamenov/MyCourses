# 100 / 100
import unittest
from project.train.train import Train


class TestTrain(unittest.TestCase):
    def setUp(self):
        self.train = Train("Express", 2)

    def test_initialization(self):
        self.assertEqual(self.train.name, "Express")
        self.assertEqual(self.train.capacity, 2)
        self.assertEqual(self.train.passengers, [])

    def test_add_passenger(self):
        result = self.train.add("John Doe")
        self.assertIn("John Doe", self.train.passengers)
        self.assertEqual(result, "Added passenger John Doe")

    def test_add_passenger_when_full(self):
        self.train.add("John Doe")
        self.train.add("Jane Doe")
        with self.assertRaises(ValueError) as context:
            self.train.add("Alice")
        self.assertEqual(str(context.exception), self.train.TRAIN_FULL)

    def test_add_existing_passenger(self):
        self.train.add("John Doe")
        with self.assertRaises(ValueError) as context:
            self.train.add("John Doe")
        self.assertEqual(
            str(context.exception), self.train.PASSENGER_EXISTS.format("John Doe")
        )

    def test_remove_passenger(self):
        self.train.add("John Doe")
        result = self.train.remove("John Doe")
        self.assertNotIn("John Doe", self.train.passengers)
        self.assertEqual(result, "Removed John Doe")

    def test_remove_nonexistent_passenger(self):
        with self.assertRaises(ValueError) as context:
            self.train.remove("Alice")
        self.assertEqual(
            str(context.exception), self.train.PASSENGER_NOT_FOUND.format("Alice")
        )


if __name__ == "__main__":
    unittest.main()
