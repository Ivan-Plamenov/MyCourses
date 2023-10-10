-- This query retrieves the names, ratings, and category names of the first five board games 
-- with a rating higher than 7.00. The games either contain the letter 'a' in their name 
-- OR have a rating greater than 7.50 and have a player count between 2 and 5. 
-- The results are sorted by the game's name in ascending order and then by rating in descending order.
SELECT bg.name,
    bg.rating,
    c.name AS category_name
FROM board_games AS bg
    JOIN categories AS c ON c.id = bg.category_id
    JOIN players_ranges AS pr ON pr.id = bg.players_range_id
WHERE(
        bg.rating > 7.00
        OR bg.name LIKE '%a%'
        AND bg.rating > 7.50
    )
    AND (
        pr.min_players >= 2
        AND pr.max_players <= 5
    )
ORDER BY bg.name,
    bg.rating DESC
LIMIT 5;