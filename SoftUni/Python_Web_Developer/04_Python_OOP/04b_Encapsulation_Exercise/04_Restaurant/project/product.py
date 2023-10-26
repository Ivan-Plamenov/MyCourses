class Product:
    def __init__(self, _name: str, _price: float) -> None:
        self.__name = _name
        self.__price = _price

    @property
    def name(self):
        return self.__name

    @property
    def price(self):
        return self.__price
