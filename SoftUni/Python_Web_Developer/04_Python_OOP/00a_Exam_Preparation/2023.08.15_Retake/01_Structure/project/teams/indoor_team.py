from base_team import BaseTeam


class IndoorTeam(BaseTeam):
    def __init__(self, name: str, country: str, advantage: int):
        # Initialize with a set budget of 500.0 EUR for an indoor team
        super().__init__(name, country, advantage, budget=500.0)

    def win(self):
        # Increase the team's advantage by 145 points and increment the wins
        self.advantage += 145
        self.wins += 1
