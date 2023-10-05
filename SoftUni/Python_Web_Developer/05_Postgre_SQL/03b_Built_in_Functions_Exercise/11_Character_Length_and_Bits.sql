SELECT CONCAT(mountain_range, ' ', peak_name) AS "Mountain Information",
    LENGTH(CONCAT(mountain_range, ' ', peak_name)) AS "Characters Length",
    LENGTH(
        CONVERT_TO(CONCAT(mountain_range, ' ', peak_name), 'UTF-8')
    ) * 8 AS "Bits of a String"
FROM mountains,
    peaks;