-- Retrieves the elevation and peak name where elevation is greater than or equal to 4884.
SELECT CONCAT(elevation, ' --->> ', peak_name) AS "Elevation --->> Peak Name"
FROM peaks
WHERE elevation >= 4884;