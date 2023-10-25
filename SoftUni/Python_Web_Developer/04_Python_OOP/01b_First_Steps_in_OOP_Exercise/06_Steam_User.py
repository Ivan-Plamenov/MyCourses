class SteamUser:
    def __init__(self, username, games):
        self.username = username
        self.games = games
        self.played_hours = 0

    def play(self, game, hours):
        if game in self.games:
            self.played_hours += hours
            return f"{self.username} is playing {game}"
        else:
            return f"{game} is not in library"

    def buy_game(self, game):
        if game not in self.games:
            self.games.append(game)
            return f"{self.username} bought {game}"
        else:
            return f"{game} is already in your library"

    def status(self):
        games_count = len(self.games)
        return f"{self.username} has {games_count} games. Total play time: {self.played_hours}"


# Test the class
user = SteamUser("Peter", ["Rainbow Six Siege", "CS:GO", "Fortnite"])
print(user.play("Fortnite", 3))  # Output: Peter is playing Fortnite
print(
    user.play("Oxygen Not Included", 5)
)  # Output: Oxygen Not Included is not in library
print(user.buy_game("CS:GO"))  # Output: CS:GO is already in your library
print(user.buy_game("Oxygen Not Included"))  # Output: Peter bought Oxygen Not Included
print(
    user.play("Oxygen Not Included", 6)
)  # Output: Peter is playing Oxygen Not Included
print(user.status())  # Output: Peter has 4 games. Total play time: 9
