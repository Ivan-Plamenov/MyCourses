-- Retrieve Volunteers for Education Program from Sofia: Fetches the names, phone numbers, and addresses (after the word 'Sofia') of volunteers who work as 'Education program assistant' and are based in Sofia.
-- The results are ordered by the volunteer's name in alphabetical order.
SELECT v."name" AS "volunteers",
    v.phone_number,
    SUBSTRING(
        v.address,
        POSITION('Sofia' IN v.address) + 7
    ) AS "address"
FROM volunteers AS v
    JOIN volunteers_departments AS vd ON v.department_id = vd."id"
WHERE vd.department_name = 'Education program assistant'
    AND v.address LIKE '%Sofia%'
ORDER BY volunteers;