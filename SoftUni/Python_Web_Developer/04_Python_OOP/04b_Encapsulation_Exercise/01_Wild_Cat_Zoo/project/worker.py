class Worker:
    def __init__(self, _name: str, _age: int, _salary: int) -> None:
        self.name = _name
        self.age = _age
        self.salary = _salary

    def __repr__(self) -> str:
        return f"Name: {self.name}, Age: {self.age}, Salary: {self.salary}"
