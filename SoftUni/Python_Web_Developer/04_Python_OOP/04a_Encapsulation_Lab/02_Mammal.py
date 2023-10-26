# 75 / 100
class Mammal:
    kingdom = "animals"

    def __init__(self, name, type, sound):
        self.name = name
        self.type = type
        self.sound = sound

    def make_sound(self):
        return f"{self.name} makes {self.sound}"

    def get_kingdom(self):
        return Mammal.kingdom

    def info(self):
        return f"{self.name} is of type {self.type}"


# Example usage:
mammal = Mammal("Dog", "Domestic", "Bark")
print(mammal.make_sound())  # Output: Dog makes Bark
print(mammal.get_kingdom())  # Output: animals
print(mammal.info())  # Output: Dog is of type Domestic
