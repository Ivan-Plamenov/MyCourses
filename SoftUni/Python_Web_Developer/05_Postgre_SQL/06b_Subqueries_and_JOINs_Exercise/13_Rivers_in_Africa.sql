-- Retrieve the top 5 African countries and their associated rivers (if any)
SELECT c.country_name,
    r.river_name
FROM (
        SELECT country_code,
            country_name
        FROM countries
        WHERE continent_code = 'AF'
        ORDER BY country_name
        LIMIT 5
    ) AS c
    LEFT JOIN countries_rivers AS cr ON c.country_code = cr.country_code
    LEFT JOIN rivers AS r ON cr.river_id = r.id
ORDER BY c.country_name;