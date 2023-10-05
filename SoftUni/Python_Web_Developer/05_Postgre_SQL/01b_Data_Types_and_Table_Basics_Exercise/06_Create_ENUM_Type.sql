-- Create the ENUM type
CREATE TYPE type_mood AS ENUM ('happy', 'relaxed', 'stressed', 'sad');
-- Add the "mood" column to the "minions_info" table
ALTER TABLE minions_info
ADD COLUMN mood type_mood;