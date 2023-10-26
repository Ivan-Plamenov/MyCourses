class Animal:
    def __init__(
        self, _name: str, _gender: int, _age: int, _money_for_care: int
    ) -> None:
        self.name = _name
        self.gender = _gender
        self.age = _age
        self.money_for_care = _money_for_care

    def __repr__(self) -> str:
        return f"Name: {self.name}, Age: {self.age}, Gender: {self.gender}"
