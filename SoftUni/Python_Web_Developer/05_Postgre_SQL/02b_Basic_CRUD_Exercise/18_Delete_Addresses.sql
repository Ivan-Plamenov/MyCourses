-- Deletes addresses associated with city IDs 5, 17, 20, and 30 from the "addresses" table.
DELETE FROM addresses
WHERE city_id IN (5, 17, 20, 30);