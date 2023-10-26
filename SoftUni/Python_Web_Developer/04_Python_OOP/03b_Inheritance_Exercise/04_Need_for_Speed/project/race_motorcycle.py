from project.motorcycle import Motorcycle


class RaceMotorcycle(Motorcycle):
    def __init__(self, _fuel: float, _hp: int) -> None:
        super().__init__(_fuel, _hp)
        self.fuel_consumption = 8

    def drive(self, _km: int):
        expended = _km * self.fuel_consumption
        if expended <= self.fuel:
            self.fuel -= expended
