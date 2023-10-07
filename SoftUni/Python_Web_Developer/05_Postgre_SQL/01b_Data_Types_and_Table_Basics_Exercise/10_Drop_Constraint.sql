-- Makes the "equipped" column in the "minions_info" table nullable.
ALTER TABLE minions_info
ALTER COLUMN equipped DROP NOT NULL;