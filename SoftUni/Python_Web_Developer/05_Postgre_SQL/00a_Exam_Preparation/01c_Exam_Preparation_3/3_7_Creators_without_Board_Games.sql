-- Retrieve creators without any associated board games
SELECT creators.id,
    creators.first_name || ' ' || creators.last_name AS creator_name,
    creators.email
FROM creators
    LEFT JOIN creators_board_games ON creators.id = creators_board_games.creator_id
WHERE creators_board_games.board_game_id IS NULL
ORDER BY creator_name ASC;