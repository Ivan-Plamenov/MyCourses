class Category:
    def __init__(self, _id: int, _name: str) -> None:
        self.id = _id
        self.name = _name

    def edit(self, _new_name: str):
        self.name = _new_name

    def __repr__(self) -> str:
        return f"Category {self.id}: {self.name}"
