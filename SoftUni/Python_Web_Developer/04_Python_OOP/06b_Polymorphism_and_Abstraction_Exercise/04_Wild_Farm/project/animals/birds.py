from project.animals.animal import Bird


class Owl(Bird):
    def __init__(
        self, _name: str, _weight: float, _wing_size: float, _food_eaten=0
    ) -> None:
        super().__init__(_name, _weight, _wing_size, _food_eaten)

    def make_sound(self):
        return super().make_sound()

    def feed(self, _food: object):
        return super().feed(_food)

    def __repr__(self) -> str:
        return super().__repr__()


class Hen(Bird):
    def __init__(
        self, _name: str, _weight: float, _wing_size: float, _food_eaten=0
    ) -> None:
        super().__init__(_name, _weight, _wing_size, _food_eaten)

    def make_sound(self):
        return super().make_sound()

    def feed(self, _food: object):
        return super().feed(_food)

    def __repr__(self) -> str:
        return super().__repr__()
