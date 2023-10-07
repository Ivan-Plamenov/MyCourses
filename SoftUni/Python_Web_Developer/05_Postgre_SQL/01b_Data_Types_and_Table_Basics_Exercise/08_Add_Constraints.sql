-- Adds unique and check constraints to the "minions_info" table.
ALTER TABLE minions_info
ADD CONSTRAINT unique_constraint UNIQUE (id, email),
    ADD CONSTRAINT banana_check CHECK (banana > 0);