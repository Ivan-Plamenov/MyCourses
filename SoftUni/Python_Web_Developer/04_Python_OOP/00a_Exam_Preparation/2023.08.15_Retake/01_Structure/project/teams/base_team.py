from abc import ABC, abstractmethod


class BaseTeam(ABC):
    def __init__(self, name: str, country: str, advantage: int, budget: float):
        # Validate the name
        if not name.strip():
            raise ValueError("Team name cannot be empty!")
        self.name = name

        # Validate the country
        if len(country.strip()) < 2:
            raise ValueError("Team country should be at least 2 symbols long!")
        self.country = country

        # Validate the advantage
        if advantage <= 0:
            raise ValueError("Advantage must be greater than zero!")
        self.advantage = advantage

        self.budget = budget
        self.wins = 0
        self.equipment = []

    @abstractmethod
    def win(self):
        pass

    def get_statistics(self):
        total_equipment_price = sum(e.price for e in self.equipment)
        avg_protection = 0
        if self.equipment:
            avg_protection = sum(e.protection for e in self.equipment) / len(
                self.equipment
            )

        # Format the statistics string
        statistics = (
            f"Name: {self.name}\n"
            f"Country: {self.country}\n"
            f"Advantage: {self.advantage} points\n"
            f"Budget: {self.budget:.2f}EUR\n"
            f"Wins: {self.wins}\n"
            f"Total Equipment Price: {total_equipment_price:.2f}\n"
            f"Average Protection: {int(avg_protection)}"
        )
        return statistics
