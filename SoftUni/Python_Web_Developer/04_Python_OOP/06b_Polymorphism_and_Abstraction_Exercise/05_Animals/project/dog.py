from project.animal import Animal


class Dog(Animal):
    def __init__(self, _name: str, _age: int, _gender: str) -> None:
        super().__init__(_name, _age, _gender)

    def make_sound(self):
        return "Woof!"

    def __repr__(self) -> str:
        return (
            f"This is {self.name}. {self.name} is a {self.age} "
            f"year old {self.gender} {self.__class__.__name__}"
        )
