-- Selects employee info for those with salaries over 1000, ordering by ID.
SELECT id,
    CONCAT(first_name, ' ', last_name) AS full_name,
    job_title,
    salary
FROM employees
WHERE salary > 1000
ORDER BY id;