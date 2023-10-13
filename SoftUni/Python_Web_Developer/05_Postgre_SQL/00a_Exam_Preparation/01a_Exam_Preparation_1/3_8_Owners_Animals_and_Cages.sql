-- Retrieve Owners and Their Mammal Animals with Cage ID: Fetches the combined names of owners and their mammal animals, the owner's phone number, and the cage ID where the animal is housed.
-- The results are ordered by the owner's name in ascending order and then by the animal's name in descending order.
SELECT CONCAT(o."name", ' - ', a."name") AS "Owners - Animals",
    o.phone_number AS "Phone Number",
    c."id" AS "Cage ID"
FROM owners AS o
    JOIN animals AS a ON a.owner_id = o."id"
    JOIN animal_types AS at ON at."id" = a.animal_type_id
    JOIN animals_cages AS ac ON ac.animal_id = a."id"
    JOIN cages AS c ON ac.cage_id = c."id"
WHERE at.animal_type = 'Mammals'
ORDER BY o."name",
    a."name" DESC;