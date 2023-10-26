from abc import ABC, abstractmethod
from project.food import Vegetable, Fruit, Meat


class Animal(ABC):
    def __init__(self, _name: str, _weight: float, _food_eaten=0) -> None:
        self.name = _name
        self.weight = _weight
        self.food_eaten = _food_eaten

    @abstractmethod
    def make_sound():
        pass

    @abstractmethod
    def feed():
        pass


class Bird(Animal):
    def __init__(
        self, _name: str, _weight: float, _wing_size: float, _food_eaten=0
    ) -> None:
        super().__init__(_name, _weight, _food_eaten)
        self.wing_size = _wing_size

    def make_sound(self):
        if self.__class__.__name__ == "Owl":
            return "Hoot Hoot"
        else:
            return "Cluck"

    def feed(self, _food: object):
        if isinstance(_food, Meat) and self.__class__.__name__ == "Owl":
            self.weight += _food.quantity * 0.25
            self.food_eaten += _food.quantity
        elif self.__class__.__name__ == "Hen":
            self.weight += _food.quantity * 0.35
            self.food_eaten += _food.quantity
        else:
            return (
                f"{self.__class__.__name__} does not eat "
                f"{_food.__class__.__name__}!"
            )

    def __repr__(self) -> str:
        return (
            f"{self.__class__.__name__} "
            f"[{self.name}, {self.wing_size}, "
            f"{self.weight}, {self.food_eaten}]"
        )


class Mammal(Animal):
    def __init__(
        self, _name: str, _weight: float, _living_region: str, _food_eaten=0
    ) -> None:
        super().__init__(_name, _weight, _food_eaten)
        self.living_region = _living_region

    def make_sound(self):
        if self.__class__.__name__ == "Mouse":
            return "Squeak"
        elif self.__class__.__name__ == "Dog":
            return "Woof!"
        elif self.__class__.__name__ == "Cat":
            return "Meow"
        else:
            return "ROAR!!!"

    def feed(self, _food: object):
        if isinstance(_food, Meat) and self.__class__.__name__ == "Tiger":
            self.weight += _food.quantity
            self.food_eaten += _food.quantity
        elif isinstance(_food, Meat) and self.__class__.__name__ == "Dog":
            self.weight += _food.quantity * 0.4
            self.food_eaten += _food.quantity
        elif self.__class__.__name__ == "Mouse" and (
            isinstance(_food, Vegetable) or isinstance(_food, Fruit)
        ):
            self.weight += _food.quantity * 0.1
            self.food_eaten += _food.quantity
        elif self.__class__.__name__ == "Cat" and (
            isinstance(_food, Vegetable) or isinstance(_food, Meat)
        ):
            self.weight += _food.quantity * 0.3
            self.food_eaten += _food.quantity
        else:
            return (
                f"{self.__class__.__name__} does not eat "
                f"{_food.__class__.__name__}!"
            )

    def __repr__(self) -> str:
        return (
            f"{self.__class__.__name__} "
            f"[{self.name}, {self.weight}, "
            f"{self.living_region}, {self.food_eaten}]"
        )
