from project.food.dessert import Dessert


class Cake(Dessert):
    GRAMS = 250
    CALORIES = 1000
    PRICE = 5

    def __init__(self, _name: str) -> None:
        self.__name = _name
        self.__grams = Cake.GRAMS
        self.__calories = Cake.CALORIES
        self.__price = Cake.PRICE

    @property
    def name(self):
        return self.__name

    @property
    def gram(self):
        return self.__grams

    @property
    def calories(self):
        return self.__calories

    @property
    def price(self):
        return self.__price
