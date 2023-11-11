# 82 / 100
import unittest
from project.pet_shop import PetShop


class TestPetShop(unittest.TestCase):
    def setUp(self):
        self.pet_shop = PetShop("Happy Paws")

    def test_constructor(self):
        self.assertEqual(self.pet_shop.name, "Happy Paws")
        self.assertEqual(self.pet_shop.food, {})
        self.assertEqual(self.pet_shop.pets, [])

    def test_add_food_valid(self):
        message = self.pet_shop.add_food("Dog Food", 500)
        self.assertEqual(message, "Successfully added 500.00 grams of Dog Food.")
        self.assertIn("Dog Food", self.pet_shop.food)
        self.assertEqual(self.pet_shop.food["Dog Food"], 500)

    def test_add_food_invalid_quantity(self):
        with self.assertRaises(ValueError):
            self.pet_shop.add_food("Cat Food", -100)

    def test_add_pet_success(self):
        message = self.pet_shop.add_pet("Buddy")
        self.assertIn("Buddy", self.pet_shop.pets)
        self.assertEqual(message, "Successfully added Buddy.")

    def test_add_pet_duplicate(self):
        self.pet_shop.add_pet("Buddy")
        with self.assertRaises(Exception):
            self.pet_shop.add_pet("Buddy")

    def test_feed_pet_valid(self):
        self.pet_shop.add_pet("Buddy")
        self.pet_shop.add_food("Dog Food", 200)
        message = self.pet_shop.feed_pet("Dog Food", "Buddy")
        self.assertEqual(message, "Buddy was successfully fed")
        self.assertEqual(self.pet_shop.food["Dog Food"], 100)

    def test_feed_pet_invalid_pet(self):
        with self.assertRaises(Exception):
            self.pet_shop.feed_pet("Dog Food", "Unknown")

    def test_feed_pet_insufficient_food(self):
        self.pet_shop.add_pet("Buddy")
        self.pet_shop.add_food("Dog Food", 50)
        message = self.pet_shop.feed_pet("Dog Food", "Buddy")
        self.assertEqual(message, "Adding food...")
        self.assertEqual(self.pet_shop.food["Dog Food"], 1050)

    def test_feed_pet_no_food(self):
        self.pet_shop.add_pet("Buddy")
        message = self.pet_shop.feed_pet("Dog Food", "Buddy")
        self.assertEqual(message, "You do not have Dog Food")

    def test_repr(self):
        self.pet_shop.add_pet("Buddy")
        self.pet_shop.add_pet("Max")
        representation = self.pet_shop.__repr__()
        self.assertEqual(representation, "Shop Happy Paws:\nPets: Buddy, Max")


if __name__ == "__main__":
    unittest.main()
