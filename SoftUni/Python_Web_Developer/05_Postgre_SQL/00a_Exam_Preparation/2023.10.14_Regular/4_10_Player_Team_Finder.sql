--10/10
CREATE OR REPLACE PROCEDURE sp_players_team_name(
        player_name VARCHAR(50),
        OUT team_name VARCHAR(45)
    ) AS $$ BEGIN
SELECT t.name INTO team_name
FROM teams t
    JOIN players p ON t.id = p.team_id
WHERE CONCAT(p.first_name, ' ', p.last_name) = player_name;
-- If no team found for the player
IF team_name IS NULL THEN team_name := 'The player currently has no team';
END IF;
EXCEPTION
WHEN NO_DATA_FOUND THEN team_name := 'The player currently has no team';
END;
$$ LANGUAGE plpgsql;