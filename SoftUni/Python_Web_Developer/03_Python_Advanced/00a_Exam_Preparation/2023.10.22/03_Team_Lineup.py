def team_lineup(*args):
    # Dictionary to store country-player mappings.
    country_players = {}

    for player, country in args:
        if country not in country_players:
            country_players[country] = []
        country_players[country].append(player)

    # Sorting countries.
    # Primary sort: number of players (descending).
    # Secondary sort: alphabetically.
    sorted_countries = sorted(
        country_players.keys(), key=lambda x: (-len(country_players[x]), x)
    )

    # Preparing the output string.
    result = []
    for country in sorted_countries:
        result.append(f"{country}:")
        for player in country_players[country]:
            result.append(f"  -{player}")

    return "\n".join(result)
