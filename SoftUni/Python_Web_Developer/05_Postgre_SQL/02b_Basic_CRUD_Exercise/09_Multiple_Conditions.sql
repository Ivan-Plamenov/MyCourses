-- Selects addresses with numbers less than 1000 or IDs between 50 and 100.
SELECT number,
    street
FROM addresses
WHERE (
        id BETWEEN 50 AND 100
    )
    OR (number < 1000);