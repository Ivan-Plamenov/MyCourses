class vowels:
    def __init__(self, _string: str) -> None:
        self.string = _string
        self.vowels = ["a", "i", "o", "u", "e", "y"]
        self.index = -1

    def __iter__(self):
        return self

    def __next__(self):
        while True:
            self.index += 1
            if self.index < len(self.string):
                if self.string[self.index].lower() in self.vowels:
                    return self.string[self.index]
            else:
                raise StopIteration


my_string = vowels("Abcedifuty0o")
for char in my_string:
    print(char)
