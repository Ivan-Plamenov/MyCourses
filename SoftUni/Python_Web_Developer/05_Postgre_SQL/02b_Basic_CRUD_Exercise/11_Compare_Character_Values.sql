-- Retrieves project names and start dates for specific project names
-- and limits the result to the first 20 records.
SELECT name,
    start_date
FROM projects
WHERE name IN ('Mountain', 'Road', 'Touring')
LIMIT 20;