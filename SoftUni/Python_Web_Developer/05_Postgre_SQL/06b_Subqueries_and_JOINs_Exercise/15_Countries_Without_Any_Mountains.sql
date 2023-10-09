-- Count the number of countries without mountains
SELECT COUNT(*) AS "countries_without_mountains"
FROM countries
WHERE country_code NOT IN (
        SELECT DISTINCT country_code
        FROM mountains_countries
    );