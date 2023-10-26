class User:
    def __init__(self, _id: int, _username: str) -> None:
        self.id = _id
        self.username = _username
        self.books = []

    def info(self):
        return ", ".join(sorted(self.books, key=lambda x: x))

    def __str__(self) -> str:
        return f"{self.id}, {self.username}, {self.books}"
