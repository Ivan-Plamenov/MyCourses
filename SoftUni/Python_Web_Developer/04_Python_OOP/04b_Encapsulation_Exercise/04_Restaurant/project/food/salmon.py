from project.food.main_dish import MainDish


class Salmon(MainDish):
    GRAMS = 22

    def __init__(self, _name: str, _price: float) -> None:
        self.__name = _name
        self.__price = _price
        self.__grams = Salmon.GRAMS

    @property
    def name(self):
        return self.__name

    @property
    def price(self):
        return self.__price

    @property
    def grams(self):
        return self.__grams
