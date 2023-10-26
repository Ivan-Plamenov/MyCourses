from project.animals.animal import Mammal


class Mouse(Mammal):
    def __init__(
        self, _name: str, _weight: float, _living_region: str, _food_eaten=0
    ) -> None:
        super().__init__(_name, _weight, _living_region, _food_eaten)

    def make_sound(self):
        return super().make_sound()

    def feed(self, _food: object):
        return super().feed(_food)

    def __repr__(self) -> str:
        return super().__repr__()


class Dog(Mammal):
    def __init__(
        self, _name: str, _weight: float, _living_region: str, _food_eaten=0
    ) -> None:
        super().__init__(_name, _weight, _living_region, _food_eaten)

    def make_sound(self):
        return super().make_sound()

    def feed(self, _food: object):
        return super().feed(_food)

    def __repr__(self) -> str:
        return super().__repr__()


class Cat(Mammal):
    def __init__(
        self, _name: str, _weight: float, _living_region: str, _food_eaten=0
    ) -> None:
        super().__init__(_name, _weight, _living_region, _food_eaten)

    def make_sound(self):
        return super().make_sound()

    def feed(self, _food: object):
        return super().feed(_food)

    def __repr__(self) -> str:
        return super().__repr__()


class Tiger(Mammal):
    def __init__(
        self, _name: str, _weight: float, _living_region: str, _food_eaten=0
    ) -> None:
        super().__init__(_name, _weight, _living_region, _food_eaten)

    def make_sound(self):
        return super().make_sound()

    def feed(self, _food: object):
        return super().feed(_food)

    def __repr__(self) -> str:
        return super().__repr__()
