-- Creates an ENUM type "type_mood" with values ('happy', 'relaxed', 'stressed', 'sad'),
-- and adds a "mood" column with the "type_mood" data type to the "minions_info" table.
CREATE TYPE type_mood AS ENUM ('happy', 'relaxed', 'stressed', 'sad');
ALTER TABLE minions_info
ADD COLUMN mood type_mood;