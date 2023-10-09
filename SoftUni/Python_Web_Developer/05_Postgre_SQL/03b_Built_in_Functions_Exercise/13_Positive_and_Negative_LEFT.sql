-- Retrieves the first 4 characters of the "peak_name" column with both positive and negative positions.
SELECT peak_name,
    LEFT(peak_name, 4) AS "Positive Left",
    LEFT(peak_name, -4) AS "Negative Left"
FROM peaks;