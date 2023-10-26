from project.beverage.beverage import Beverage


class HotBeverage(Beverage):
    def __init__(self, _name: str, _price: float, _milliliters: float) -> None:
        super().__init__(_name, _price, _milliliters)
