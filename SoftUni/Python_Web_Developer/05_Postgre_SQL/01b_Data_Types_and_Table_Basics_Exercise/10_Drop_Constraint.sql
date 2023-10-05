-- Removes the NOT NULL constraint from the "equipped" column in the "minions_info" table.
ALTER TABLE minions_info
ALTER COLUMN equipped DROP NOT NULL;