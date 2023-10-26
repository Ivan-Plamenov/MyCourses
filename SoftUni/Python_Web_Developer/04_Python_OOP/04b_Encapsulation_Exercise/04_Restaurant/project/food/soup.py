from project.food.starter import Starter


class Soup(Starter):
    def __init__(self, _name: str, _price: float) -> None:
        super().__init__(_name, _price)
