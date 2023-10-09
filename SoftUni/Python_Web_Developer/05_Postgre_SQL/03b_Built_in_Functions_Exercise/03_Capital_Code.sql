-- Adds a new column "capital_code" to the "countries" table and updates it
-- with the first two characters of the "capital" column.
ALTER TABLE countries
ADD capital_code VARCHAR(2);
UPDATE countries
SET capital_code = SUBSTRING(
        capital
        FROM 1 FOR 2
    );