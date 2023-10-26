class take_skip:
    def __init__(self, step, count):
        self.step = step
        self.count = count
        self.current = 0
        self.generated = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.generated == self.count:
            raise StopIteration

        current_value = self.current
        self.current += self.step
        self.generated += 1
        return current_value


# Test Cases
numbers = take_skip(2, 6)
for number in numbers:
    print(number)

numbers = take_skip(10, 5)
for number in numbers:
    print(number)
