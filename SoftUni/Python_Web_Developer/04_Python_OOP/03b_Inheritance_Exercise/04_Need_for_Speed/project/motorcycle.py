from project.vehicle import Vehicle


class Motorcycle(Vehicle):
    def __init__(self, _fuel: float, _hp: int) -> None:
        super().__init__(_fuel, _hp)
        self.fuel_consumption = 1.25

    def drive(self, _km: int):
        expended = _km * self.fuel_consumption
        if expended <= self.fuel:
            self.fuel -= expended
