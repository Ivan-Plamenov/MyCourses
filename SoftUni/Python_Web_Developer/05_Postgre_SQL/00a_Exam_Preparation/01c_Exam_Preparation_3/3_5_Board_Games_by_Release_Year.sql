-- Select the name and rating of each board game
SELECT bg."name",
    bg.rating
FROM board_games AS bg
ORDER BY bg.release_year,
    bg."name" DESC;