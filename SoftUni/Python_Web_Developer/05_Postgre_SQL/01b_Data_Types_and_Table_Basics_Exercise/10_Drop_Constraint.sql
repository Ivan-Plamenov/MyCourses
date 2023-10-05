-- Drop the NOT NULL constraint from the "equipped" column
ALTER TABLE minions_info
ALTER COLUMN equipped DROP NOT NULL;