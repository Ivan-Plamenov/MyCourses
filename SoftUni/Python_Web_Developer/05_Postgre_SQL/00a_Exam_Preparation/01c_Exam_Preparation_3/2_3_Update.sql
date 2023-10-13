-- Increase the max_players by 1 for rows where min_players is 2 and max_players is 2
UPDATE players_ranges
SET max_players = max_players + 1
WHERE min_players = 2
    AND max_players = 2;
-- Append ' V2' to the game name for board games released in the year 2020 or later
UPDATE board_games
SET "name" = "name" || ' V2'
WHERE release_year >= 2020;