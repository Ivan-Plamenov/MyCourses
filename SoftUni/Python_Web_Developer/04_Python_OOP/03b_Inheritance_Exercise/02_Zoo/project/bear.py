from project.mammal import Mammal


class Bear(Mammal):
    def __init__(self, _name: str) -> None:
        super().__init__(_name)
