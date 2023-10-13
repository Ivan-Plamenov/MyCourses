-- Retrieve Animal Details with Type: Fetches the name, type, and formatted birthdate for each animal.
-- The results are ordered alphabetically by the animal's name.
SELECT a."name",
    at.animal_type,
    TO_CHAR(a.birthdate, 'DD.MM.YYYY') AS formatted_birthdate
FROM animals AS a
    JOIN animal_types AS at ON a.animal_type_id = at."id"
ORDER BY "name";