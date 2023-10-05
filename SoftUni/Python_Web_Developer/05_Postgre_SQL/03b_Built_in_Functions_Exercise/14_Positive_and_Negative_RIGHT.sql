SELECT peak_name,
    RIGHT(peak_name, 4) AS "Positive Right",
    SUBSTRING(
        peak_name
        FROM 5
    ) AS "Negative Right"
FROM peaks;