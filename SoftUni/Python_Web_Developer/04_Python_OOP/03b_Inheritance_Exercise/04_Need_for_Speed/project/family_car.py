from project.car import Car


class FamilyCar(Car):
    def __init__(self, _fuel: float, _hp: int) -> None:
        super().__init__(_fuel, _hp)
        self.fuel_consumption = 3

    def drive(self, _km: int):
        expended = _km * self.fuel_consumption
        if expended <= self.fuel:
            self.fuel -= expended
