class PizzaDelivery:
    def __init__(self, _name: str, _price: float, _ingr: dict) -> None:
        self.name = _name
        self.price = _price
        self.ingredients = _ingr
        self.ordered = False

    def add_extra(self, _ingr: str, _qty: int, _price_per_qty: float):
        if self.ordered is False:
            if _ingr in self.ingredients:
                self.ingredients[_ingr] += _qty
            else:
                self.ingredients[_ingr] = _qty
            self.price += _qty * _price_per_qty
        else:
            return (
                f"Pizza {self.name} already prepared, and we can't "
                f"make any changes!"
            )

    def remove_ingredient(self, _ingr: str, _qty: int, _price_per_qty: float):
        if self.ordered is False:
            if _ingr not in self.ingredients:
                return (
                    f"Wrong ingredient selected! We do not use "
                    f"{_ingr} in {self.name}!"
                )
            elif _ingr in self.ingredients and _qty > self.ingredients[_ingr]:
                return f"Please check again the desired quantity of {_ingr}!"
            else:
                self.ingredients[_ingr] -= _qty
                self.price -= _qty * _price_per_qty
        else:
            return (
                f"Pizza {self.name} already prepared, and we can't "
                f"make any changes!"
            )

    def make_order(self):
        self.ordered = True
        print_ingr = []
        for key, value in self.ingredients.items():
            print_ingr.append(f"{key}: {str(value)}")
        return (
            f"You've ordered pizza {self.name} prepared with "
            f"{', '.join(print_ingr)} and the price will be "
            f"{self.price}lv."
        )
