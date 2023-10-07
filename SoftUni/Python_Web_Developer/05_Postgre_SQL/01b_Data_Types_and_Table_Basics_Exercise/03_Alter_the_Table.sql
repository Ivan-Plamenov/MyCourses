-- Adds columns "code", "task", and "salary" to the "minions_info" table.
ALTER TABLE minions_info
ADD COLUMN code CHAR(4),
    ADD COLUMN task TEXT,
    ADD COLUMN salary NUMERIC(8, 3);