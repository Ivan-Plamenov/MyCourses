class Vehicle:
    def __init__(self, mileage, max_speed=150):
        self.max_speed = max_speed
        self.mileage = mileage
        self.gadgets = []


# Test the class
car = Vehicle(20)
print(car.max_speed)  # Output: 150 (default value since not provided)
print(car.mileage)  # Output: 20
print(car.gadgets)  # Output: []
car.gadgets.append("Hudly Wireless")
print(car.gadgets)  # Output: ['Hudly Wireless']
