class custom_range:
    def __init__(self, _start: int, _end: int) -> None:
        self.start = _start
        self.end = _end

    def __iter__(self):
        return self

    def __next__(self):
        try:
            if self.start <= self.end:
                num = self.start
                self.start += 1
                return num
            else:
                raise IndexError
        except IndexError:
            raise StopIteration


one_to_ten = custom_range(1, 10)
for num in one_to_ten:
    print(num)
