class Flower:
    def __init__(self, name, water_requirements):
        self.name = name
        self.water_requirements = water_requirements
        self.is_happy = False

    def water(self, quantity):
        if quantity >= self.water_requirements:
            self.is_happy = True

    def status(self):
        if self.is_happy:
            return f"{self.name} is happy"
        else:
            return f"{self.name} is not happy"


# Test the class
flower = Flower("Lilly", 100)
flower.water(50)
print(flower.status())  # Output: Lilly is not happy
flower.water(60)
print(flower.status())  # Output: Lilly is not happy
flower.water(100)
print(flower.status())  # Output: Lilly is happy
