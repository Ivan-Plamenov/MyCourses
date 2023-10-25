class Cup:
    def __init__(self, size, quantity):
        self.size = size
        self.quantity = min(quantity, size)  # Ensure quantity does not exceed size

    def fill(self, quantity):
        if self.quantity + quantity <= self.size:
            self.quantity += quantity

    def status(self):
        return self.size - self.quantity


# Test the class
cup = Cup(100, 50)
print(cup.status())  # Output: 50
cup.fill(40)
cup.fill(20)
print(cup.status())  # Output: 10
