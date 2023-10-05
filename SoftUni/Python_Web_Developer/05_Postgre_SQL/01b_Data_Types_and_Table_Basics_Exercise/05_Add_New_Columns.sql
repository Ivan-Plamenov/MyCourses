-- Adds columns "email" and "equipped" to the "minions_info" table.
ALTER TABLE minions_info
ADD COLUMN email VARCHAR(20),
    ADD COLUMN equipped BOOLEAN NOT NULL;