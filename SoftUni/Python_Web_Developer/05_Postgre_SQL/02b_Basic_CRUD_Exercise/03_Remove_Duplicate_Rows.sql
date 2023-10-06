-- Selects unique city names and their corresponding areas,
-- ordering the results by city name in descending order.
SELECT DISTINCT ON (name) name AS "Cities Information",
    area AS "Area (km2)"
FROM cities
ORDER BY name DESC;