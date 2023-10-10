-- Update max players count for board games with a player range of [2, 2]
UPDATE players_ranges
SET max_players = max_players + 1
WHERE min_players = 2
    AND max_players = 2;
-- Append ' V2' to the names of board games published in 2020 or later
UPDATE board_games
SET name = name || ' V2'
WHERE release_year >= 2020;