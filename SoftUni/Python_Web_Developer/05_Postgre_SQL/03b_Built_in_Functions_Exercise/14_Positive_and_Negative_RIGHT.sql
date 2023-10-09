-- Retrieves the last 4 characters of the "peak_name" column with both positive and negative positions.
SELECT peak_name,
    RIGHT(peak_name, 4) AS "Positive Right",
    SUBSTRING(
        peak_name
        FROM 5
    ) AS "Negative Right"
FROM peaks;