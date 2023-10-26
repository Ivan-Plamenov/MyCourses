from project.beverage.hot_beverage import HotBeverage


class Coffee(HotBeverage):
    MILLILITERS = 50
    PRICE = 3.50

    def __init__(self, _name: str, _caffeine: float) -> None:
        self.__name = _name
        self.__price = Coffee.PRICE
        self.__milliliters = Coffee.MILLILITERS
        self.__caffeine = _caffeine

    @property
    def name(self):
        return self.__name

    @property
    def price(self):
        return self.__price

    @property
    def milliliters(self):
        return self.__milliliters

    @property
    def caffeine(self):
        return self.__caffeine
