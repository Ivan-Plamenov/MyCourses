import re
from project.equipment.elbow_pad import ElbowPad
from project.equipment.knee_pad import KneePad
from project.teams.indoor_team import IndoorTeam
from project.teams.outdoor_team import OutdoorTeam


class Tournament:
    VALID_EQUIPMENT_TYPES = {"KneePad": KneePad, "ElbowPad": ElbowPad}
    VALID_TEAM_TYPES = {"OutdoorTeam": OutdoorTeam, "IndoorTeam": IndoorTeam}

    def __init__(self, name: str, capacity: int):
        if not re.match("^[A-Za-z0-9]+$", name):
            raise ValueError("Tournament name should contain letters and digits only!")
        self.name = name
        self.capacity = capacity
        self.equipment = []
        self.teams = []

    def add_equipment(self, equipment_type: str):
        if equipment_type not in self.VALID_EQUIPMENT_TYPES:
            raise Exception("Invalid equipment type!")
        equipment_class = self.VALID_EQUIPMENT_TYPES[equipment_type]
        equipment = equipment_class()
        self.equipment.append(equipment)
        return f"{equipment_type} was successfully added."

    def add_team(self, team_type: str, team_name: str, country: str, advantage: int):
        if team_type not in self.VALID_TEAM_TYPES:
            raise Exception("Invalid team type!")
        if len(self.teams) >= self.capacity:
            return "Not enough tournament capacity."
        team_class = self.VALID_TEAM_TYPES[team_type]
        team = team_class(team_name, country, advantage)
        self.teams.append(team)
        return f"{team_type} was successfully added."

    def sell_equipment(self, equipment_type: str, team_name: str):
        team = next((t for t in self.teams if t.name == team_name), None)
        equipment_to_sell = next(
            (
                e
                for e in reversed(self.equipment)
                if isinstance(e, self.VALID_EQUIPMENT_TYPES[equipment_type])
            ),
            None,
        )

        if team is None or equipment_to_sell is None:
            raise Exception("Invalid operation!")

        if team.budget < equipment_to_sell.price:
            raise Exception("Budget is not enough!")

        team.budget -= equipment_to_sell.price
        team.equipment.append(equipment_to_sell)
        self.equipment.remove(equipment_to_sell)
        return f"Successfully sold {equipment_type} to {team_name}."

    def remove_team(self, team_name: str):
        team = next((t for t in self.teams if t.name == team_name), None)
        if team is None:
            raise Exception("No such team!")
        if team.wins > 0:
            raise Exception(f"The team has {team.wins} wins! Removal is impossible!")
        self.teams.remove(team)
        return f"Successfully removed {team_name}."

    def increase_equipment_price(self, equipment_type: str):
        count = 0
        for equipment in self.equipment:
            if isinstance(equipment, self.VALID_EQUIPMENT_TYPES[equipment_type]):
                equipment.increase_price()
                count += 1
        return f"Successfully changed {count}pcs of equipment."

    def play(self, team_name1: str, team_name2: str):
        team1 = next((t for t in self.teams if t.name == team_name1), None)
        team2 = next((t for t in self.teams if t.name == team_name2), None)

        if type(team1) != type(team2):
            raise Exception("Game cannot start! Team types mismatch!")

        score1 = team1.advantage + sum(e.protection for e in team1.equipment)
        score2 = team2.advantage + sum(e.protection for e in team2.equipment)

        if score1 > score2:
            team1.win()
            return f"The winner is {team1.name}."
        elif score2 > score1:
            team2.win()
            return f"The winner is {team2.name}."
        else:
            return "No winner in this game."

    def get_statistics(self):
        stats = [f"Tournament: {self.name}\nNumber of Teams: {len(self.teams)}\nTeams:"]
        sorted_teams = sorted(self.teams, key=lambda x: x.wins, reverse=True)
        for team in sorted_teams:
            stats.append(team.get_statistics())
        return "\n".join(stats)
