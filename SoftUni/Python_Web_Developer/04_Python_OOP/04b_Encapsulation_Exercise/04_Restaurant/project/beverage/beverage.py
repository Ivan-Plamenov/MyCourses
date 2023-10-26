from project.product import Product


class Beverage(Product):
    def __init__(self, _name: str, _price: float, _milliliters: float) -> None:
        super().__init__(_name, _price)
        self.__milliliters = _milliliters

    @property
    def milliliters(self):
        return self.__milliliters
