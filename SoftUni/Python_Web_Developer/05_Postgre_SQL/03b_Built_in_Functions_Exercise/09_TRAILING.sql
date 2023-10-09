-- Removes trailing spaces from the "continent_name" column using the TRIM function.
SELECT continent_name,
    TRIM(
        TRAILING
        FROM continent_name
    ) AS trim
FROM continents;