from project.cat import Cat


class Tomcat(Cat):
    def __init__(self, _name: str, _age: int) -> None:
        super().__init__(_name, _age, _gender="Male")

    def make_sound(self):
        return "Hiss"

    def __repr__(self) -> str:
        return super().__repr__()
