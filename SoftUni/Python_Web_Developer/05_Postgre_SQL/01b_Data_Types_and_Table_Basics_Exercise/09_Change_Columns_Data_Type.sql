-- Modifies the data type and length of the "task" column in the "minions_info" table to VARCHAR(150).
ALTER TABLE minions_info
ALTER COLUMN task TYPE VARCHAR(150);