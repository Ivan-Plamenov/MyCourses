from base_team import BaseTeam


class OutdoorTeam(BaseTeam):
    def __init__(self, name: str, country: str, advantage: int):
        # Initialize with a set budget of 1000.0 EUR for an outdoor team
        super().__init__(name, country, advantage, budget=1000.0)

    def win(self):
        # Increase the team's advantage by 115 points and increment the wins
        self.advantage += 115
        self.wins += 1
