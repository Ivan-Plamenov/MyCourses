-- Performs left and right trimming of 'M' and 'm' characters from the "peak_name" column.
SELECT TRIM(
        'M'
        FROM peak_name
    ) AS "Left Trim",
    TRIM(
        BOTH 'm'
        FROM peak_name
    ) AS "Right Trim"
FROM peaks;