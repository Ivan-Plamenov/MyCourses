import unittest
from project.train.train import Train


class TestTrain(unittest.TestCase):
    def setUp(self):
        self.train = Train("Express", 2)

    def test_constructor(self):
        self.assertEqual(self.train.name, "Express")
        self.assertEqual(self.train.capacity, 2)
        self.assertEqual(self.train.passengers, [])

    def test_add_passenger_success(self):
        result = self.train.add("Alice")
        self.assertIn("Alice", self.train.passengers)
        self.assertEqual(result, "Added passenger Alice")

    def test_add_passenger_train_full(self):
        self.train.add("Alice")
        self.train.add("Bob")
        with self.assertRaises(ValueError) as context:
            self.train.add("Charlie")
        self.assertEqual(str(context.exception), "Train is full")

    def test_add_passenger_already_exists(self):
        self.train.add("Alice")
        with self.assertRaises(ValueError) as context:
            self.train.add("Alice")
        self.assertEqual(str(context.exception), "Passenger Alice Exists")

    def test_remove_passenger_success(self):
        self.train.add("Alice")
        result = self.train.remove("Alice")
        self.assertNotIn("Alice", self.train.passengers)
        self.assertEqual(result, "Removed Alice")

    def test_remove_passenger_not_found(self):
        with self.assertRaises(ValueError) as context:
            self.train.remove("Charlie")
        self.assertEqual(str(context.exception), "Passenger Not Found")

    def test_zero_capacity_train(self):
        zero_capacity_train = Train("Local", Train.ZERO_CAPACITY)
        self.assertEqual(zero_capacity_train.capacity, 0)
        with self.assertRaises(ValueError):
            zero_capacity_train.add("Alice")


if __name__ == "__main__":
    unittest.main()
