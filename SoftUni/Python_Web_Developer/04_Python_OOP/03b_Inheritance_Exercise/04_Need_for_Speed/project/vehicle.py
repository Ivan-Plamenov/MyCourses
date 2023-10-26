class Vehicle:
    DEFAULT_FUEL_CONSUMPTION: float

    def __init__(self, _fuel: float, _hp: int) -> None:
        self.fuel = _fuel
        self.horse_power = _hp
        self.fuel_consumption = 1.25
        Vehicle.DEFAULT_FUEL_CONSUMPTION = self.fuel_consumption

    def drive(self, _km: int):
        expended = _km * self.fuel_consumption
        if expended <= self.fuel:
            self.fuel -= expended
