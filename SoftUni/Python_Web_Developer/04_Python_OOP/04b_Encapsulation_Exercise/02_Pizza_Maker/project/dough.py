class Dough:
    def __init__(
        self, _flour_type: str, _baking_technique: str, _weight: float
    ) -> None:
        if len(_flour_type) == 0:
            raise ValueError("The flour type cannot be an empty string")
        self.flour_type = _flour_type
        if len(_baking_technique) == 0:
            raise ValueError("The baking technique cannot be an empty string")
        self.baking_technique = _baking_technique
        if _weight <= 0:
            raise ValueError("The weight cannot be less or equal to zero")
        self.weight = _weight
