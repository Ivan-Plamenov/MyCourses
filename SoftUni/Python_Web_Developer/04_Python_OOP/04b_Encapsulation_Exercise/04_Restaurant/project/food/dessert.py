from project.food.food import Food


class Dessert(Food):
    def __init__(
        self, _name: str, _price: float, _grams: float, _calories: float
    ) -> None:
        super().__init__(_name, _price, _grams)
        self.__calories = _calories

    @property
    def calories(self):
        return self.__calories
