CREATE OR REPLACE FUNCTION fn_difficulty_level(level INT) RETURNS VARCHAR(50) AS $$ BEGIN IF level <= 40 THEN RETURN 'Normal Difficulty';
ELSIF level >= 41
AND level <= 60 THEN RETURN 'Nightmare Difficulty';
ELSE RETURN 'Hell Difficulty';
END IF;
END;
$$ LANGUAGE plpgsql;