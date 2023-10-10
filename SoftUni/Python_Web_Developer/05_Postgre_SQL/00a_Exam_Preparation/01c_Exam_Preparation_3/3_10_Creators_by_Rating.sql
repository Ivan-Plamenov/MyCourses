-- This query retrieves the last name, average rating (rounded up), and publisher's name
-- for all creators who have created a board game published by "Stonemaier Games".
-- The results are sorted by average rating in descending order and then by the creator's last name.
SELECT c.last_name,
    CEIL(AVG(bg.rating)) AS average_rating,
    p.name AS publisher_name
FROM creators AS c
    JOIN creators_board_games AS cbg ON c.id = cbg.creator_id
    JOIN board_games AS bg ON cbg.board_game_id = bg.id
    JOIN publishers AS p ON bg.publisher_id = p.id
WHERE p.name = 'Stonemaier Games'
GROUP BY c.last_name,
    p.name
HAVING AVG(bg.rating) IS NOT NULL
ORDER BY average_rating DESC,
    c.last_name;