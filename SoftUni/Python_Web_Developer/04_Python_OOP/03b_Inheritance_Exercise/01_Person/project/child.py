from project.person import Person


class Child(Person):
    def __init__(self, _name: str, _age: int) -> None:
        super().__init__(_name, _age)
