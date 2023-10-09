-- Create a PostgreSQL function to calculate the total cash of users in a specified game
CREATE OR REPLACE FUNCTION fn_cash_in_users_games(game_name VARCHAR(50)) RETURNS TABLE (total_cash NUMERIC(19, 2)) AS $$ BEGIN -- Calculate the total cash of users who have an odd rank in the specified game
    RETURN QUERY
SELECT ROUND(SUM(cash), 2) AS total_cash
FROM (
        SELECT cash,
            ROW_NUMBER() OVER (
                ORDER BY cash DESC
            ) AS row_num
        FROM users_games
        WHERE game_id = (
                SELECT id
                FROM games
                WHERE "name" = game_name
            )
    ) AS ranked_rows
WHERE row_num % 2 = 1;
END;
$$ LANGUAGE plpgsql;