from project.elf import Elf


class MuseElf(Elf):
    def __init__(self, _username: str, _level: int) -> None:
        super().__init__(_username, _level)

    def __str__(self) -> str:
        return super().__str__()
