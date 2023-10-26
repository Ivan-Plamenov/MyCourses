from project.product import Product


class Food(Product):
    def __init__(self, _name: str, _price: float, _grams: float) -> None:
        super().__init__(_name, _price)
        self.__grams = _grams

    @property
    def grams(self):
        return self.__grams
