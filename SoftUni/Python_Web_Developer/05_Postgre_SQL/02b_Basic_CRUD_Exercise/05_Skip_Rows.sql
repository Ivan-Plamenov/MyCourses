-- Retrieves employee IDs, full names, and hire dates, starting from the 10th record
-- and orders them by hire date.
SELECT "id",
    CONCAT(first_name, ' ', middle_name, ' ', last_name) AS "Full Name",
    "hire_date" AS "Hire Date"
FROM employees
ORDER BY "Hire Date" OFFSET 9;