from project.product import Product


class Food(Product):
    def __init__(self, _name: str) -> None:
        self.name = _name
        self.quantity = 15
