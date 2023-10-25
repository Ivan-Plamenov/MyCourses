class Glass:
    capacity = 250

    def __init__(self):
        self.content = 0

    def fill(self, ml):
        if self.content + ml <= Glass.capacity:
            self.content += ml
            return f"Glass filled with {ml} ml"
        else:
            return f"Cannot add {ml} ml"

    def empty(self):
        self.content = 0
        return "Glass is now empty"

    def info(self):
        space_left = Glass.capacity - self.content
        return f"{space_left} ml left"


# Test the class
glass = Glass()
print(glass.fill(100))  # Output: Glass filled with 100 ml
print(glass.fill(200))  # Output: Cannot add 200 ml
print(glass.empty())  # Output: Glass is now empty
print(glass.fill(200))  # Output: Glass filled with 200 ml
print(glass.info())  # Output: 50 ml left
