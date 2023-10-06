-- Selects address information with columns "Address" (concatenation of number and street) and "city_id,"
-- for addresses in cities with even "city_id" values greater than 0, ordered by "city_id" in ascending order.
SELECT CONCAT(number, ' ', street) AS "Address",
    city_id
FROM addresses
WHERE city_id % 2 = 0
    AND city_id > 0
ORDER BY city_id ASC;