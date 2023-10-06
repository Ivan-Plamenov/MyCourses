-- Selects project details for projects within a specified date range, ordered by their start date.
SELECT name,
    start_date,
    end_date
FROM projects
WHERE start_date >= '2016-06-01'
    AND end_date < '2023-06-04'
ORDER BY start_date;