-- Selects employee information with columns "id," "Full Name" (concatenation of first, middle, and last names),
-- and "Hire Date," ordered by "Hire Date" and skipping the first 9 rows.
SELECT "id",
    CONCAT(first_name, ' ', middle_name, ' ', last_name) AS "Full Name",
    "hire_date" AS "Hire Date"
FROM employees
ORDER BY "Hire Date" OFFSET 9;