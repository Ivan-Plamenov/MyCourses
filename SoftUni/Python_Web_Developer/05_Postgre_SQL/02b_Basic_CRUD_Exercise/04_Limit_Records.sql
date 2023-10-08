-- Retrieves employee IDs, full names, and job titles for the first 50 employees
-- and orders them by first name in ascending order.
SELECT id AS "ID",
    CONCAT(first_name, ' ', last_name) AS "Full Name",
    job_title AS "Job Title"
FROM employees
ORDER BY first_name ASC
LIMIT 50;