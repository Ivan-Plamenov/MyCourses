class reverse_iter:
    def __init__(self, _iterable: iter) -> None:
        self.iterable = _iterable
        self.index = -1

    def __iter__(self):
        return self

    def __next__(self):
        try:
            if abs(self.index) <= len(self.iterable):
                num = self.iterable[self.index]
                self.index += -1
                return num
            else:
                raise IndexError
        except IndexError:
            raise StopIteration


reversed_list = reverse_iter([1, 2, 3, 4])
for item in reversed_list:
    print(item)
