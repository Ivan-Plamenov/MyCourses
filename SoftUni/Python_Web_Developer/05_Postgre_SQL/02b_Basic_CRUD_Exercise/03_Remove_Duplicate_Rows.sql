SELECT DISTINCT ON (name) name AS "Cities Information",
    area AS "Area (km2)"
FROM cities
ORDER BY name DESC;