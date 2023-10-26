from project.worker import Worker


class Keeper(Worker):
    def __init__(self, _name: str, _age: int, _salary: int) -> None:
        super().__init__(_name, _age, _salary)
