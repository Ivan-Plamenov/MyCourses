-- Retrieves addresses with their IDs, formatted as "number street," and associated city IDs
-- for addresses with IDs greater than or equal to 20.
SELECT id,
    CONCAT(number, ' ', street) AS "Address",
    city_id
FROM addresses
WHERE id >= 20;