-- Retrieves author first names, last names, and birth years in YYYY format.
SELECT first_name,
    last_name,
    TO_CHAR(born, 'YYYY') AS YEAR
FROM authors;