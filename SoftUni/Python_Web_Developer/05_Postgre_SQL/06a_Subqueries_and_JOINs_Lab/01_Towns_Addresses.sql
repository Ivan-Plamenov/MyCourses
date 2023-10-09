-- Select town information and associated addresses
SELECT t.town_id,
    t.NAME,
    a.address_text
FROM towns AS t
    JOIN addresses AS a USING(town_id)
WHERE t.NAME IN ('San Francisco', 'Sofia', 'Carnation')
ORDER BY a.town_id,
    a.address_id;