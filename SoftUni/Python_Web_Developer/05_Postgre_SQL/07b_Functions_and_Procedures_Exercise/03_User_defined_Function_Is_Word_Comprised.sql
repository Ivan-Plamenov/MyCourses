-- Create a PostgreSQL function to check if a word can be formed using a set of letters
CREATE OR REPLACE FUNCTION fn_is_word_comprised(
        set_of_letters VARCHAR(50),
        word VARCHAR(50)
    ) RETURNS BOOLEAN AS $$ BEGIN -- Convert both inputs to lowercase for case-insensitive comparison
    set_of_letters := LOWER(set_of_letters);
word := LOWER(word);
-- Iterate through each character in the word
FOR char_in_word IN
SELECT UNNEST(string_to_array(word, NULL)) LOOP -- Check if the character is a letter and exists in the set_of_letters
    IF char_in_word ~ '[a-z]'
    AND POSITION(char_in_word IN set_of_letters) > 0 THEN CONTINUE;
ELSE RETURN FALSE;
END IF;
END LOOP;
-- All characters in the word exist in the set_of_letters
RETURN TRUE;
END;
$$ LANGUAGE plpgsql;