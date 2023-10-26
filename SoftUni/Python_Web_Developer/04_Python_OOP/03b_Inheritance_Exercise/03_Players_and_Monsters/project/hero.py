class Hero:
    def __init__(self, _username: str, _level: int) -> None:
        self.username = _username
        self.level = _level

    def __str__(self) -> str:
        return (
            f"{self.username} of type {self.__class__.__name__} "
            f"has level {self.level}"
        )
