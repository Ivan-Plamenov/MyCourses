-- Change the data type and limit length for the "task" column
ALTER TABLE minions_info
ALTER COLUMN task TYPE VARCHAR(150);