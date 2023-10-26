class Room:
    def __init__(self, _number: int, _capacity: int) -> None:
        self.number = _number
        self.capacity = _capacity
        self.guests = 0
        self.is_taken = False

    def take_room(self, _people: int):
        if self.is_taken is False and _people <= self.capacity:
            self.guests += _people
            self.is_taken = True
            self.capacity -= _people
        else:
            return f"Room number {self.number} cannot be taken"

    def free_room(self):
        if self.is_taken:
            self.is_taken = False
            self.guests = 0
        else:
            return f"Room number {self.number} is not taken"
