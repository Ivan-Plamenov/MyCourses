-- Retrieves the make, model, and condition of all cars, ordered by their IDs.
SELECT c.make,
    c.model,
    c."condition"
FROM cars AS c
ORDER BY c."id";