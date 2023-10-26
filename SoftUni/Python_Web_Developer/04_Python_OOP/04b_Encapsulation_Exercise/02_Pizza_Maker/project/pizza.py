from project.dough import Dough
from project.topping import Topping


class Pizza:
    def __init__(self, _name: str, _dough: Dough, _toppings_capacity: int) -> None:
        if len(_name) == 0:
            raise ValueError("The name cannot be an empty string")
        self.name = _name
        if _dough is None:
            raise ValueError("You should add dough to the pizza")
        self.dough = _dough
        if _toppings_capacity <= 0:
            raise ValueError("The topping's capacity cannot be less or equal to zero")
        self.toppings_capacity = _toppings_capacity
        self.toppings = {}

    def add_topping(self, _topping: Topping):
        if _topping.topping_type in self.toppings and self.toppings_capacity > 0:
            self.toppings[_topping.topping_type] += _topping.weight
            self.toppings_capacity -= 1
        elif self.toppings_capacity == 0:
            raise ValueError("Not enough space for another topping")
        elif _topping.topping_type not in self.toppings:
            self.toppings[_topping.topping_type] = _topping.weight
            self.toppings_capacity -= 1

    def calculate_total_weight(self):
        total_weight = self.dough.weight
        for topping_weight in self.toppings.values():
            total_weight += topping_weight
        return total_weight
