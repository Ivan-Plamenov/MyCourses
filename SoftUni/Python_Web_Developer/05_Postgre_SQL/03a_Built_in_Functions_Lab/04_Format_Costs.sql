-- Retrieves book titles and truncates the "COST" column to 3 decimal places,
-- ordering the results by ID.
SELECT title,
    TRUNC(COST, 3) AS modified_price
FROM books
ORDER BY id;