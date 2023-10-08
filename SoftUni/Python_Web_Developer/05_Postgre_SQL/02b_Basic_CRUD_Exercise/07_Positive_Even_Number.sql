-- Retrieves addresses and their city IDs for even-numbered cities (greater than 0),
-- ordering them by city ID in ascending order.
SELECT CONCAT(number, ' ', street) AS "Address",
    city_id
FROM addresses
WHERE city_id % 2 = 0
    AND city_id > 0
ORDER BY city_id ASC;