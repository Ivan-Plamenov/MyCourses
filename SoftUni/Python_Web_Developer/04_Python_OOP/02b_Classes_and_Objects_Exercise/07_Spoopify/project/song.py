class Song:
    def __init__(self, _name: str, _length: float, _single: bool) -> None:
        self.name = _name
        self.length = _length
        self.single = _single

    def get_info(self):
        return f"{self.name} - {self.length}"
