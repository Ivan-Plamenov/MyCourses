SELECT peak_name,
    LEFT(peak_name, 4) AS "Positive Left",
    SUBSTRING(
        peak_name
        FROM 1 FOR LENGTH(peak_name) - 4
    ) AS "Negative Left"
FROM peaks;