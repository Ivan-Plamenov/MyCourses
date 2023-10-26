class Product:
    def __init__(self, _name: str, _qty: int) -> None:
        self.name = _name
        self.quantity = _qty

    def decrease(self, _qty: int):
        if self.quantity >= _qty:
            self.quantity -= _qty

    def increase(self, _qty: int):
        self.quantity += _qty

    def __repr__(self) -> str:
        return self.name
