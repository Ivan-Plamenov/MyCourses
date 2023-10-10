-- This function takes the first name of a board game creator as input 
-- and returns the total number of board games created by the specified creator.
CREATE OR REPLACE FUNCTION fn_creator_with_board_games(first_name_of_creator VARCHAR(30)) RETURNS INT AS $$
DECLARE total_games INT;
BEGIN
SELECT count(cbg.creator_id) INTO total_games
FROM creators AS c
    JOIN creators_board_games AS cbg ON c.id = cbg.creator_id
WHERE c.first_name = first_name_of_creator;
RETURN total_games;
END;
$$ LANGUAGE plpgsql;