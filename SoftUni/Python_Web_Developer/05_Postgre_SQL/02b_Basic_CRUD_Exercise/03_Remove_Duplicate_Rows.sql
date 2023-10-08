-- Gets unique city names and their areas (in square kilometers), 
-- choosing the last occurrence of each city name when ordered in descending order.
SELECT DISTINCT ON (name) name AS "Cities Information",
    area AS "Area (km2)"
FROM cities
ORDER BY name DESC;