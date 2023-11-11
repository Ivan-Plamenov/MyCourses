import unittest
from project.trip import Trip


class TestTrip(unittest.TestCase):
    def setUp(self):
        self.trip = Trip(10000, 2, False)

    def test_constructor_valid_input(self):
        trip = Trip(10000, 2, True)
        self.assertEqual(trip.budget, 10000)
        self.assertEqual(trip.travelers, 2)
        self.assertTrue(trip.is_family)

    def test_constructor_invalid_travelers(self):
        with self.assertRaises(ValueError) as context:
            Trip(5000, 0, False)
        self.assertTrue("At least one traveler is required!" in str(context.exception))

    def test_travelers_setter_valid(self):
        self.trip.travelers = 3
        self.assertEqual(self.trip.travelers, 3)

    def test_travelers_setter_invalid(self):
        with self.assertRaises(ValueError) as context:
            self.trip.travelers = 0
        self.assertTrue("At least one traveler is required!" in str(context.exception))

    def test_is_family_setter_valid(self):
        self.trip.travelers = 2
        self.trip.is_family = True
        self.assertTrue(self.trip.is_family)

    def test_is_family_setter_invalid(self):
        self.trip.travelers = 1
        self.trip.is_family = True
        self.assertFalse(self.trip.is_family)

    def test_book_a_trip_successful(self):
        result = self.trip.book_a_trip("Brazil")
        self.assertIn("Successfully booked", result)
        self.assertEqual(
            self.trip.budget, 10000 - Trip.DESTINATION_PRICES_PER_PERSON["Brazil"] * 2
        )

    def test_book_a_trip_insufficient_budget(self):
        self.trip.budget = 3000
        result = self.trip.book_a_trip("Australia")
        self.assertEqual(result, "Your budget is not enough!")

    def test_book_a_trip_invalid_destination(self):
        result = self.trip.book_a_trip("Mars")
        self.assertEqual(
            result, "This destination is not in our offers, please choose a new one!"
        )

    def test_book_a_trip_family_discount(self):
        self.trip.is_family = True
        self.trip.book_a_trip("New Zealand")
        expected_price = Trip.DESTINATION_PRICES_PER_PERSON["New Zealand"] * 2 * 0.9
        self.assertEqual(
            self.trip.booked_destinations_paid_amounts["New Zealand"], expected_price
        )

    def test_booking_status_no_bookings(self):
        result = self.trip.booking_status()
        self.assertEqual(result, f"No bookings yet. Budget: {self.trip.budget:.2f}")

    def test_booking_status_with_bookings(self):
        self.trip.book_a_trip("Brazil")
        result = self.trip.booking_status()
        self.assertIn("Brazil", result)
        self.assertIn(f"Budget Left: {self.trip.budget:.2f}", result)

    def test_edge_case_change_travelers_after_booking(self):
        self.trip.book_a_trip("Brazil")
        initial_booking_amount = self.trip.booked_destinations_paid_amounts["Brazil"]
        self.trip.travelers = 3
        self.assertEqual(
            self.trip.booked_destinations_paid_amounts["Brazil"], initial_booking_amount
        )

    def test_edge_case_repeated_bookings(self):
        self.trip.book_a_trip("Bulgaria")
        initial_budget = self.trip.budget
        self.trip.book_a_trip("Bulgaria")
        self.assertEqual(
            self.trip.budget,
            initial_budget - Trip.DESTINATION_PRICES_PER_PERSON["Bulgaria"],
        )

    def test_edge_case_boundary_budget(self):
        self.trip.budget = Trip.DESTINATION_PRICES_PER_PERSON["Bulgaria"]
        result = self.trip.book_a_trip("Bulgaria")
        self.assertIn("Successfully booked", result)
        self.assertEqual(self.trip.budget, 0)

    def test_exception_handling_unexpected_input(self):
        with self.assertRaises(Exception):
            self.trip.travelers = "two"


if __name__ == "__main__":
    unittest.main()
