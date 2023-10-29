class Cup:
    def __init__(self, size, quantity):
        self.size = size
        self.quantity = min(quantity, size)  # Ensure quantity does not exceed size

    def fill(self, quantity):
        if self.quantity + quantity <= self.size:
            self.quantity += quantity

    def status(self):
        return self.size - self.quantity
