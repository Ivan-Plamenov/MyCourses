from project.player import Player


class Guild:
    def __init__(self, _name: str) -> None:
        self.name = _name
        self.players = []

    def assign_player(self, _player: Player):
        if _player.guild == "Unaffiliated":
            _player.guild = self.name
            self.players.append(_player)
            return f"Welcome player {_player.name} to the guild {self.name}"
        elif _player.guild != self.name:
            return f"Player {_player.name} is in another guild."
        elif _player.guild == self.name:
            return f"Player {_player.name} is already in the guild."

    def kick_player(self, _player_name: str):
        if self.players:
            for index, value in enumerate(self.player):
                if value.name == _player_name:
                    value.guild = "Unaffiliated"
                    self.players.pop(index)
                    return f"Player {value.name} has been removed from the guild."
            return f"Player {_player_name} is not in the guild."
        else:
            return f"Player {_player_name} is not in the guild."

    def guild_info(self):
        new_line = "\n"
        info = [player.player_info() for player in self.players]
        return f"Guild: {self.name}\n{new_line.join(info)}"
