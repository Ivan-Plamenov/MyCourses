# 75 / 100
import unittest
from project.robot import Robot


class TestRobot(unittest.TestCase):
    def setUp(self):
        self.robot = Robot("R101", "Military", 100, 10000.0)

    def test_constructor(self):
        self.assertEqual(self.robot.robot_id, "R101")
        self.assertEqual(self.robot.category, "Military")
        self.assertEqual(self.robot.available_capacity, 100)
        self.assertEqual(self.robot.price, 10000.0)
        self.assertEqual(self.robot.hardware_upgrades, [])
        self.assertEqual(self.robot.software_updates, [])

    def test_category_setter_valid_and_invalid(self):
        self.robot.category = "Education"
        self.assertEqual(self.robot.category, "Education")

        with self.assertRaises(ValueError):
            self.robot.category = "InvalidCategory"

    def test_price_setter_valid_and_invalid(self):
        self.robot.price = 15000.0
        self.assertEqual(self.robot.price, 15000.0)

        with self.assertRaises(ValueError):
            self.robot.price = -100.0

    def test_upgrade_valid_and_duplicate(self):
        result = self.robot.upgrade("New Processor", 1000.0)
        self.assertIn("New Processor", self.robot.hardware_upgrades)
        self.assertEqual(self.robot.price, 10000.0 + 1000.0 * Robot.PRICE_INCREMENT)
        self.assertEqual(result, "Robot R101 was upgraded with New Processor.")

        result = self.robot.upgrade("New Processor", 1000.0)
        self.assertEqual(result, "Robot R101 was not upgraded.")

    def test_update_valid_and_invalid(self):
        result = self.robot.update(2.0, 50)
        self.assertIn(2.0, self.robot.software_updates)
        self.assertEqual(self.robot.available_capacity, 50)
        self.assertEqual(result, "Robot R101 was updated to version 2.0.")

        result = self.robot.update(1.5, 60)
        self.assertEqual(result, "Robot R101 was not updated.")

        result = self.robot.update(2.5, 60)
        self.assertEqual(result, "Robot R101 was not updated.")

    def test_comparison_gt(self):
        other_robot = Robot("R102", "Education", 100, 9000.0)
        result = self.robot > other_robot
        self.assertEqual(
            result, "Robot with ID R101 is more expensive than Robot with ID R102."
        )

        equal_price_robot = Robot("R103", "Education", 100, 10000.0)
        result = self.robot > equal_price_robot
        self.assertEqual(
            result, "Robot with ID R101 costs equal to Robot with ID R103."
        )

        cheaper_robot = Robot("R104", "Education", 100, 11000.0)
        result = self.robot > cheaper_robot
        self.assertEqual(
            result, "Robot with ID R101 is cheaper than Robot with ID R104."
        )


if __name__ == "__main__":
    unittest.main()
