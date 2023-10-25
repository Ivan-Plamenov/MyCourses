class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def set_x(self, new_x):
        self.x = new_x

    def set_y(self, new_y):
        self.y = new_y

    def __str__(self):
        return f"The point has coordinates ({self.x},{self.y})"


# Test the class
p = Point(2, 4)
print(p)  # Output: The point has coordinates (2,4)
p.set_x(3)
p.set_y(5)
print(p)  # Output: The point has coordinates (3,5)
