-- Selects address information with columns "id," "Address" (concatenation of number and street),
-- and "city_id" for addresses with an "id" greater than or equal to 20.
SELECT id,
    CONCAT(number, ' ', street) AS "Address",
    city_id
FROM addresses
WHERE id >= 20;