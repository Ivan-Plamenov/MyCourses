-- Selects employee information with columns "ID," "Full Name" (concatenation of first and last names),
-- and "Job Title," ordered by first name in ascending order, and limits the result to 50 rows.
SELECT id AS "ID",
    CONCAT(first_name, ' ', last_name) AS "Full Name",
    job_title AS "Job Title"
FROM employees
ORDER BY first_name ASC
LIMIT 50;