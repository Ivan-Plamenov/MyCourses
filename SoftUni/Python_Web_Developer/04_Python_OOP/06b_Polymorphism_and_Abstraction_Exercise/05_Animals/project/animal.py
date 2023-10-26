from abc import ABC, abstractmethod


class Animal(ABC):
    def __init__(self, _name: str, _age: int, _gender: str) -> None:
        self.name = _name
        self.age = _age
        self.gender = _gender

    @abstractmethod
    def make_sound():
        pass

    @abstractmethod
    def __repr__(self) -> str:
        pass
