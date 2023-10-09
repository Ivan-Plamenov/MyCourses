-- Create a PostgreSQL function that retrieves games based on their finished status
CREATE OR REPLACE FUNCTION fn_is_game_over(is_game_over BOOLEAN) RETURNS TABLE (
        name VARCHAR(50),
        game_type_id INT,
        is_finished BOOLEAN
    ) AS $$ BEGIN -- Return games with a specified finished status
    RETURN QUERY
SELECT g.name,
    g.game_type_id,
    g.is_finished
FROM games g
WHERE g.is_finished = is_game_over;
END;
$$ LANGUAGE plpgsql;