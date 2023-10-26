class Player:
    def __init__(self, _name: str, _hp: int, _mp: int) -> None:
        self.name = _name
        self.hp = _hp
        self.mp = _mp
        self.skills = {}
        self.guild = "Unaffiliated"

    def add_skill(self, _skill_name: str, _mana_cost: int):
        if _skill_name in self.skills:
            return "Skill already added"
        else:
            self.skills[_skill_name] = _mana_cost
            return (
                f"Skill {_skill_name} added to the collection of the "
                f"player {self.name}"
            )

    def player_info(self):
        all_skills = []
        new_line = "\n"
        for key, value in self.skills.items():
            all_skills.append(f"==={key} - {value}")
        return (
            f"Name: {self.name}\n"
            f"Guild: {self.guild}\n"
            f"HP: {self.hp}\n"
            f"MP: {self.mp}\n"
            f"{new_line.join(all_skills)}"
        )
