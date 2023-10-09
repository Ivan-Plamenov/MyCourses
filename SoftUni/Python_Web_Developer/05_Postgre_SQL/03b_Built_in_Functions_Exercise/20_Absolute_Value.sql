-- Retrieve longitude values and calculate their absolute values using ABS.
SELECT longitude,
    ABS(longitude) AS abs
FROM apartments;