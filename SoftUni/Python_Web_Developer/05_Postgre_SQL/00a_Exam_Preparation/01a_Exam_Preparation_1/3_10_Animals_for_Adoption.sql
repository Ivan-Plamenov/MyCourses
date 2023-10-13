-- Retrieve Young Animals Without Owners (Excluding a Specific Type): Fetches the names, birth years, and types of animals that do not have owners, are not of animal type ID 3, and are less than 5 years old as of '01/01/2022'.
-- The results are ordered by the animal's name in alphabetical order.
SELECT a."name" AS "animal",
    EXTRACT(
        YEAR
        FROM a.birthdate
    ) AS "birth_year",
    at.animal_type
FROM animals AS a
    JOIN animal_types AS at ON a.animal_type_id = at."id"
WHERE owner_id IS NULL
    AND a.animal_type_id != 3
    AND EXTRACT(
        YEAR
        FROM AGE('01/01/2022', a.birthdate)
    ) < 5
ORDER BY animal;