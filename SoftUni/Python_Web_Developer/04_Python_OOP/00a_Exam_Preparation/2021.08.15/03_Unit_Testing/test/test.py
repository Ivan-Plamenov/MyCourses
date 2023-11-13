import unittest
from project.pet_shop import PetShop


class TestPetShop(unittest.TestCase):
    def setUp(self):
        self.shop = PetShop("Happy Pets")

    def test_initialization(self):
        self.assertEqual(self.shop.name, "Happy Pets")
        self.assertEqual(self.shop.food, {})
        self.assertEqual(self.shop.pets, [])

    def test_add_food_positive_quantity(self):
        result = self.shop.add_food("Cat Food", 500)
        self.assertEqual(self.shop.food["Cat Food"], 500)
        self.assertEqual(result, "Successfully added 500.00 grams of Cat Food.")

    def test_add_food_negative_quantity(self):
        with self.assertRaises(ValueError):
            self.shop.add_food("Dog Food", -100)

    def test_add_pet(self):
        result = self.shop.add_pet("Rex")
        self.assertIn("Rex", self.shop.pets)
        self.assertEqual(result, "Successfully added Rex.")

    def test_add_existing_pet(self):
        self.shop.add_pet("Rex")
        with self.assertRaises(Exception):
            self.shop.add_pet("Rex")

    def test_feed_pet_nonexistent(self):
        with self.assertRaises(Exception):
            self.shop.feed_pet("Cat Food", "Whiskers")

    def test_feed_pet_no_food(self):
        self.shop.add_pet("Whiskers")
        result = self.shop.feed_pet("Cat Food", "Whiskers")
        self.assertEqual(result, "You do not have Cat Food")

    def test_feed_pet_insufficient_food(self):
        self.shop.add_pet("Whiskers")
        self.shop.add_food("Cat Food", 50)
        result = self.shop.feed_pet("Cat Food", "Whiskers")
        self.assertEqual(result, "Adding food...")
        self.assertEqual(self.shop.food["Cat Food"], 950)

    def test_feed_pet_sufficient_food(self):
        self.shop.add_pet("Whiskers")
        self.shop.add_food("Cat Food", 200)
        result = self.shop.feed_pet("Cat Food", "Whiskers")
        self.assertEqual(result, "Whiskers was successfully fed")
        self.assertEqual(self.shop.food["Cat Food"], 100)

    def test_repr(self):
        self.shop.add_pet("Rex")
        expected_repr = "Shop Happy Pets:\nPets: Rex"
        self.assertEqual(repr(self.shop), expected_repr)

    def test_check_food_stock(self):
        self.shop.add_food("Bird Food", 300)
        self.assertEqual(self.shop.check_food_stock("Bird Food"), 300)

    def test_total_number_of_pets(self):
        self.shop.add_pet("Rex")
        self.shop.add_pet("Whiskers")
        self.assertEqual(self.shop.total_pets, 2)

    def test_update_pet_status(self):
        self.shop.add_pet("Rex")
        self.shop.update_pet_status("Rex", "adopted")
        self.assertEqual(self.shop.get_pet_status("Rex"), "adopted")

    def test_remove_pet(self):
        self.shop.add_pet("Rex")
        self.shop.remove_pet("Rex")
        self.assertNotIn("Rex", self.shop.pets)

    def test_get_pets_by_type(self):
        self.shop.add_pet("Rex", "dog")
        self.shop.add_pet("Whiskers", "cat")
        dogs = self.shop.get_pets_by_type("dog")
        self.assertIn("Rex", dogs)
        self.assertNotIn("Whiskers", dogs)

    def test_shop_status(self):
        self.shop.open_shop()
        self.assertTrue(self.shop.is_open)
        self.shop.close_shop()
        self.assertFalse(self.shop.is_open)


if __name__ == "__main__":
    unittest.main()
