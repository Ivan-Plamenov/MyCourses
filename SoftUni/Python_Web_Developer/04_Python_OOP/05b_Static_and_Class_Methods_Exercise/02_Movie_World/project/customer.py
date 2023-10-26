class Customer:
    def __init__(self, _name: str, _age: int, _id: int) -> None:
        self.name = _name
        self.age = _age
        self.id = _id
        self.rented_dvds = []

    def __repr__(self) -> str:
        return (
            f"{self.id}: {self.name} of age {self.age} has "
            f"{len(self.rented_dvds)} rented DVD's "
            f"({', '.join([i.name for i in self.rented_dvds])})"
        )
