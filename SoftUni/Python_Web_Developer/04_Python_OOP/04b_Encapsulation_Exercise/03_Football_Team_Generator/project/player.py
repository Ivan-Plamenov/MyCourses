class Player:
    def __init__(
        self,
        _name: str,
        _sprint: int,
        _dribble: int,
        _passing: int,
        _shooting: int,
    ) -> None:
        self.__name = _name
        self.__sprint = _sprint
        self.__dribble = _dribble
        self.__passing = _passing
        self.__shooting = _shooting

    @property
    def name(self):
        return self.__name

    def __str__(self) -> str:
        return (
            f"Player: {self.__name}\n"
            f"Sprint: {self.__sprint}\n"
            f"Dribble: {self.__dribble}\n"
            f"Passing: {self.__passing}\n"
            f"Shooting: {self.__shooting}"
        )
