from abc import ABC


class Food(ABC):
    def __init__(self, _quantity: int) -> None:
        self.quantity = _quantity


class Vegetable(Food):
    def __init__(self, _quantity: int) -> None:
        super().__init__(_quantity)


class Fruit(Food):
    def __init__(self, _quantity: int) -> None:
        super().__init__(_quantity)


class Meat(Food):
    def __init__(self, _quantity: int) -> None:
        super().__init__(_quantity)


class Seed(Food):
    def __init__(self, _quantity: int) -> None:
        super().__init__(_quantity)
