# 70 / 100
class Shop:
    def __init__(self, name, shop_type, capacity):
        self.name = name
        self.shop_type = shop_type
        self.capacity = capacity
        self.items = {}

    def small_shop(cls, name, shop_type):
        # Create a shop with a default capacity of 10
        return cls(name, shop_type, 10)

    def add_item(self, item_name):
        if self.capacity <= 0:
            return "Not enough capacity in the shop"

        if item_name not in self.items:
            self.items[item_name] = 0

        self.items[item_name] += 1
        self.capacity -= 1
        return f"{item_name} added to the shop"

    def remove_item(self, item_name, amount):
        if item_name not in self.items or self.items[item_name] < amount:
            return f"Cannot remove {amount} {item_name}"

        self.items[item_name] -= amount
        self.capacity += amount

        if self.items[item_name] == 0:
            del self.items[item_name]

        return f"{amount} {item_name} removed from the shop"

    def __repr__(self):
        return f"{self.name} of type {self.shop_type} with capacity {self.capacity}"


# Test the Shop class
fresh_shop = Shop("Fresh Shop", "Fruit and Veg", 50)
small_shop = Shop.small_shop("Fashion Boutique", "Clothes")

print(fresh_shop)
print(small_shop)

print(fresh_shop.add_item("Bananas"))
print(fresh_shop.remove_item("Tomatoes", 2))

print(small_shop.add_item("Jeans"))
print(small_shop.add_item("Jeans"))
print(small_shop.remove_item("Jeans", 2))
print(small_shop.items)
