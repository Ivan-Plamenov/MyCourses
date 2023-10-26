from project.player import Player


class Team:
    def __init__(self, _name: str, _rating: int) -> None:
        self.__name = _name
        self.__rating = _rating
        self.__players = []

    def add_player(self, _player: Player):
        if _player in self.__players:
            return f"Player {_player.name} has already joined"
        else:
            self.__players.append(_player)
            return f"Player {_player.name} joined team {self.__name}"

    def remove_player(self, _player_name: str):
        for index, player in enumerate(self.__players):
            if player.name == _player_name:
                del self.__players[index]
                return player
        return f"Player {_player_name} not found"
