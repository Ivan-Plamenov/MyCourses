-- Selects project names and start dates for specific project names, limiting the result to 20 records.
SELECT name,
    start_date
FROM projects
WHERE name IN ('Mountain', 'Road', 'Touring')
LIMIT 20;