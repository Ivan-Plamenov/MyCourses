class sequence_repeat:
    def __init__(self, _seq: str, _number: int) -> None:
        self.sequence = _seq
        self.number = _number
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.number != 0:
            value = next(iter(self.sequence[self.index]))
            self.index += 1
            if self.index == len(self.sequence):
                self.index = 0
            self.number -= 1
            return value
        else:
            raise StopIteration
