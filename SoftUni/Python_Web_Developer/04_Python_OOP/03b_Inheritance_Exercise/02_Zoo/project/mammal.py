from project.animal import Animal


class Mammal(Animal):
    def __init__(self, _name: str) -> None:
        super().__init__(_name)
