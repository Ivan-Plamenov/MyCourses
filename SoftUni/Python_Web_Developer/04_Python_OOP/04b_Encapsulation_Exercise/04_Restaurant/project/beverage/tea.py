from project.beverage.hot_beverage import HotBeverage


class Tea(HotBeverage):
    def __init__(self, _name: str, _price: float, _milliliters: float) -> None:
        super().__init__(_name, _price, _milliliters)
