# 84 / 100

import unittest
from project.shopping_cart import ShoppingCart


class TestShoppingCart(unittest.TestCase):
    def setUp(self):
        self.cart = ShoppingCart("ShopName", 100.0)

    # Test Initialization and State Management
    def test_initialization(self):
        self.assertEqual(self.cart.shop_name, "ShopName")
        self.assertEqual(self.cart.budget, 100.0)
        self.assertEqual(self.cart.products, {})

    # Test for Shop Name Setter
    def test_invalid_shop_name(self):
        with self.assertRaises(ValueError):
            self.cart.shop_name = "shopname"  # Lowercase start
        with self.assertRaises(ValueError):
            self.cart.shop_name = "Shop1Name"  # Contains non-alphabetic character

    # Positive Testing for add_to_cart
    def test_add_to_cart(self):
        result = self.cart.add_to_cart("ProductA", 50.0)
        self.assertIn("ProductA", self.cart.products)
        self.assertEqual(result, "ProductA product was successfully added to the cart!")

    # Negative Testing for add_to_cart
    def test_add_expensive_product(self):
        with self.assertRaises(ValueError):
            self.cart.add_to_cart("ExpensiveProduct", 150.0)

    # Positive Testing for remove_from_cart
    def test_remove_from_cart(self):
        self.cart.add_to_cart("ProductA", 50.0)
        result = self.cart.remove_from_cart("ProductA")
        self.assertNotIn("ProductA", self.cart.products)
        self.assertEqual(
            result, "Product ProductA was successfully removed from the cart!"
        )

    # Negative Testing for remove_from_cart
    def test_remove_nonexistent_product(self):
        with self.assertRaises(ValueError):
            self.cart.remove_from_cart("NonexistentProduct")

    # Test Merging Carts
    def test_merge_carts(self):
        other_cart = ShoppingCart("OtherShop", 200.0)
        other_cart.add_to_cart("ProductB", 20.0)
        new_cart = self.cart + other_cart
        self.assertEqual(new_cart.shop_name, "ShopNameOtherShop")
        self.assertEqual(new_cart.budget, 300.0)
        self.assertIn("ProductB", new_cart.products)

    # Test Buy Products
    def test_buy_products(self):
        self.cart.add_to_cart("ProductA", 20.0)
        result = self.cart.buy_products()
        self.assertEqual(
            result, "Products were successfully bought! Total cost: 20.00lv."
        )

    # Test Buy Products Over Budget
    def test_buy_products_over_budget(self):
        self.cart.add_to_cart("ProductA", 50.0)
        self.cart.add_to_cart("ProductB", 60.0)
        with self.assertRaises(ValueError):
            self.cart.buy_products()


if __name__ == "__main__":
    unittest.main()
