class Person:
    def __init__(self, _name: str, _surname: str) -> None:
        self.name = _name
        self.surname = _surname

    def __add__(self, other):
        return Person(self.name, other.surname)

    def __repr__(self) -> str:
        return f"{self.name} {self.surname}"


class Group:
    def __init__(self, _name: str, _people: list) -> None:
        self.name = _name
        self.people = _people

    def __len__(self):
        return len(self.people)

    def __add__(self, other):
        name = self.people[0].name + " " + other.people[0].name
        return Group(name, self.people + other.people)

    def __getitem__(self, index):
        if index >= 0:
            return f"Person {index}: {self.people[index]}"
        else:
            raise IndexError("list index out of range")

    def __repr__(self) -> str:
        return (
            f"Group {self.name} with members "
            f"{', '.join(str(i) for i in self.people)}"
        )


# Test Cases
p0 = Person("Aliko", "Dangote")
p1 = Person("Bill", "Gates")
p2 = Person("Warren", "Buffet")
p3 = Person("Elon", "Musk")
p4 = p2 + p3

first_group = Group("__VIP__", [p0, p1, p2])
second_group = Group("Special", [p3, p4])
third_group = first_group + second_group

print(len(first_group))
print(second_group)
print(third_group[0])

for person in third_group:
    print(person)
