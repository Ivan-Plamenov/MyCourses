# 81 / 100

import unittest
from project.second_hand_car import SecondHandCar


class TestSecondHandCar(unittest.TestCase):
    def setUp(self):
        self.car = SecondHandCar("Toyota", "Sedan", 20000, 5000.0)

    def test_constructor(self):
        self.assertEqual(self.car.model, "Toyota")
        self.assertEqual(self.car.car_type, "Sedan")
        self.assertEqual(self.car.mileage, 20000)
        self.assertEqual(self.car.price, 5000.0)
        self.assertEqual(self.car.repairs, [])

    def test_price_setter_valid_and_invalid(self):
        self.car.price = 3000.0
        self.assertEqual(self.car.price, 3000.0)

        with self.assertRaises(ValueError):
            self.car.price = 0.5

    def test_mileage_setter_valid_and_invalid(self):
        self.car.mileage = 25000
        self.assertEqual(self.car.mileage, 25000)

        with self.assertRaises(ValueError):
            self.car.mileage = 50

    def test_set_promotional_price_valid_and_invalid(self):
        result = self.car.set_promotional_price(4000.0)
        self.assertEqual(result, "The promotional price has been successfully set.")
        self.assertEqual(self.car.price, 4000.0)

        with self.assertRaises(ValueError):
            self.car.set_promotional_price(5000.0)

    def test_need_repair_valid_and_invalid(self):
        result = self.car.need_repair(1000.0, "Engine repair")
        self.assertEqual(result, "Price has been increased due to repair charges.")
        self.assertEqual(self.car.price, 6000.0)
        self.assertIn("Engine repair", self.car.repairs)

        result = self.car.need_repair(4000.0, "Transmission repair")
        self.assertEqual(result, "Repair is impossible!")

    def test_comparison_gt(self):
        other_car = SecondHandCar("Honda", "Sedan", 15000, 4500.0)
        self.assertTrue(self.car > other_car)

        other_car_with_different_type = SecondHandCar("Honda", "SUV", 15000, 4500.0)
        result = self.car > other_car_with_different_type
        self.assertEqual(result, "Cars cannot be compared. Type mismatch!")

    def test_str_method(self):
        expected_str = "Model Toyota | Type Sedan | Milage 20000km\nCurrent price: 5000.00 | Number of Repairs: 0"
        self.assertEqual(str(self.car), expected_str)


if __name__ == "__main__":
    unittest.main()
