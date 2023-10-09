-- Retrieve latitude values and round them to two decimal places using ROUND, and truncate them to two decimal places using TRUNC.
SELECT latitude,
    ROUND(latitude, 2) AS round,
    TRUNC(latitude, 2) AS trunc
FROM apartments;