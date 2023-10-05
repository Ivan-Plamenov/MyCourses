SELECT name || ' ' || COALESCE(state, '') AS "Cities Information",
    area AS "Area (km2)"
FROM cities
ORDER BY id;