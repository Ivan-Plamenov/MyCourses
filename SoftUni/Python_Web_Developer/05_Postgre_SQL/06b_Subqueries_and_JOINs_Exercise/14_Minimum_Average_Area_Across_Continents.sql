-- Find the minimum average area among continents
SELECT MIN(avg_area) AS "min_average_area"
FROM (
        SELECT continent_code,
            AVG(area_in_sq_km) AS avg_area
        FROM countries
        GROUP BY continent_code
    ) AS continent_avg;