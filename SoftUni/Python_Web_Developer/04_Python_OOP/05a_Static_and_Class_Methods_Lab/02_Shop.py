class Shop:
    def __init__(self, _name: str, _type: str, _capacity: int) -> None:
        self.name = _name
        self.type = _type
        self.capacity = _capacity
        self.items = {}

    @classmethod
    def small_shop(cls, _name: str, _type: str):
        return Shop(_name, _type, 10)

    def add_item(self, _item_name: str):
        if self.capacity > 0:
            if _item_name in self.items:
                self.items[_item_name] += 1
            else:
                self.items[_item_name] = 1
            self.capacity -= 1
            return f"{_item_name} added to the shop"
        else:
            return "Not enough capacity in the shop"

    def remove_item(self, _item_name: str, _amount: int):
        if _item_name in self.items:
            if _amount <= self.items[_item_name]:
                self.items[_item_name] -= _amount
                self.capacity += _amount
                return f"{_amount} {_item_name} removed from the shop"
        return f"Cannot remove {_amount} {_item_name}"

    def __repr__(self) -> str:
        return f"{self.name} of type {self.type} with capacity {self.capacity}"


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
