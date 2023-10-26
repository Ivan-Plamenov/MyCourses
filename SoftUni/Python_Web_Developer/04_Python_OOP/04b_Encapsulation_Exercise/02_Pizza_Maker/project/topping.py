class Topping:
    def __init__(self, _topping_type: str, _weight: float) -> None:
        if len(_topping_type) == 0:
            raise ValueError("The topping type cannot be an empty string")
        self.topping_type = _topping_type
        if _weight <= 0:
            raise ValueError("The weight cannot be less or equal to zero")
        self.weight = _weight
