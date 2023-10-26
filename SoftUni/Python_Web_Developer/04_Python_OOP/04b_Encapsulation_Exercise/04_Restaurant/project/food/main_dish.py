from project.food.food import Food


class MainDish(Food):
    def __init__(self, _name: str, _price: float, _grams: float) -> None:
        super().__init__(_name, _price, _grams)
