-- Retrieve board games sorted by release year and name
SELECT name,
    rating
FROM board_games
ORDER BY release_year ASC,
    name DESC;