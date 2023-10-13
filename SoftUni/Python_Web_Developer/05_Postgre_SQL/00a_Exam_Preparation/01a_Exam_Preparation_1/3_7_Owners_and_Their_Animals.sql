-- Retrieve Top 5 Owners with Most Animals: Fetches the names of owners and the count of animals they own.
-- The results are ordered in descending order based on the number of animals they own. In case of a tie, they are sorted alphabetically by the owner's name.
-- Only the top 5 owners are retrieved.
SELECT o."name" AS "owner",
    COUNT(*) AS "count_of_animals"
FROM owners AS o
    JOIN animals AS a ON a.owner_id = o."id"
GROUP BY o."name"
ORDER BY count_of_animals DESC,
    "owner"
LIMIT 5;