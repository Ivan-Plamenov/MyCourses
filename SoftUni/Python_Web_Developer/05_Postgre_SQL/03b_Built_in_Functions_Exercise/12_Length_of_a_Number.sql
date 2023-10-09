-- Retrieves the length of the "population" column as a string.
SELECT population,
    LENGTH(CAST(population AS VARCHAR)) AS length
FROM countries;