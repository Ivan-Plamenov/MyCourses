-- This query retrieves the full name, email, and highest-rated board game for each creator 
-- whose email address ends with ".com". The results are sorted in ascending order by the creator's full name.
SELECT c.first_name || ' ' || c.last_name AS full_name,
    c.email,
    MAX(bg.rating) AS rating
FROM creators AS c
    JOIN creators_board_games AS cbg ON c.id = cbg.creator_id
    JOIN board_games AS bg ON cbg.board_game_id = bg.id
WHERE c.email LIKE '%.com'
GROUP BY c.id,
    c.first_name,
    c.last_name,
    c.email
ORDER BY full_name;