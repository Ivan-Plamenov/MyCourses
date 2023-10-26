from project.room import Room


class Hotel:
    def __init__(self, _name: str) -> None:
        self.name = _name
        self.rooms = []
        self.guests = 0

    @classmethod
    def from_stars(cls, _stars_count: int):
        name = f"{_stars_count} stars Hotel"
        return Hotel(name)

    def add_room(self, _room: Room):
        self.rooms.append(_room)

    def take_room(self, _room_number: int, _people: int):
        for index, room in enumerate(self.rooms):
            if room.number == _room_number:
                room.take_room(_people)
                self.guests += room.guests

    def free_room(self, _room_number: int):
        for index, room in enumerate(self.rooms):
            if room.number == _room_number:
                self.guests -= room.guests
                room.free_room()

    def status(self):
        free = ", ".join(str(i.number) for i in self.rooms if i.is_taken is False)
        taken = ", ".join(str(i.number) for i in self.rooms if i.is_taken is True)
        return (
            f"Hotel {self.name} has {self.guests} total guests\n"
            f"Free rooms: {free}\n"
            f"Taken rooms: {taken}"
        )
