from project.cat import Cat


class Kitten(Cat):
    def __init__(self, _name: str, _age: int) -> None:
        super().__init__(_name, _age, _gender="Female")

    def make_sound(self):
        return "Meow"

    def __repr__(self) -> str:
        return super().__repr__()
