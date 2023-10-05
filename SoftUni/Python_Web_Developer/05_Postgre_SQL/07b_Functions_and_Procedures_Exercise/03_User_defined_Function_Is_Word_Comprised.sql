CREATE OR REPLACE FUNCTION fn_is_word_comprised(
        set_of_letters VARCHAR(50),
        word VARCHAR(50)
    ) RETURNS BOOLEAN AS $$
DECLARE i INT;
char_in_set CHAR;
char_in_word CHAR;
BEGIN -- Convert both inputs to lowercase for case-insensitive comparison
set_of_letters := LOWER(set_of_letters);
word := LOWER(word);
-- Iterate through each character in the word
i := 1;
WHILE i <= LENGTH(word) LOOP char_in_word := SUBSTRING(
    word
    FROM i FOR 1
);
-- Check if the character is a letter and exists in the set_of_letters
IF char_in_word ~ '[a-z]'
AND POSITION(char_in_word IN set_of_letters) > 0 THEN i := i + 1;
ELSE RETURN FALSE;
END IF;
END LOOP;
-- All characters in the word exist in the set_of_letters
RETURN TRUE;
END;
$$ LANGUAGE plpgsql;