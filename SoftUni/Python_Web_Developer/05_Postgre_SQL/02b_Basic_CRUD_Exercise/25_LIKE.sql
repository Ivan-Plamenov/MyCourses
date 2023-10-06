-- Selects project names and start dates for projects with names starting with 'MOUNT',
-- ordered by project ID.
SELECT name,
    start_date
FROM projects
WHERE name LIKE 'MOUNT%'
ORDER BY id;