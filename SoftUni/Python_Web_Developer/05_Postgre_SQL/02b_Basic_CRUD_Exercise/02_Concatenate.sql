-- Retrieves city info with name and optional state, along with area in square kilometers, ordered by ID.
SELECT name || ' ' || COALESCE(state, '') AS "Cities Information",
    area AS "Area (km2)"
FROM cities
ORDER BY id;