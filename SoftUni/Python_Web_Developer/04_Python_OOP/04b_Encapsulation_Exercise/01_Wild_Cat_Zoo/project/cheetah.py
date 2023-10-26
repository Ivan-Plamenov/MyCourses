from project.animal import Animal


class Cheetah(Animal):
    def __init__(self, _name: str, _gender: int, _age: int) -> None:
        self.name = _name
        self.gender = _gender
        self.age = _age
        self.money_for_care = 60
