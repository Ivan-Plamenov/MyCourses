-- Selects employee IDs, first names, and last names for employees with no middle name,
-- limiting the result to 3 records.
SELECT id,
    first_name,
    last_name
FROM employees
WHERE middle_name IS NULL
LIMIT 3;